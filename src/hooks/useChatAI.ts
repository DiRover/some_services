import API from '@libs/API.ts';
import type {ChatMessageRequest} from '../entities/chat/types.ts';
import {CHAT_ROLE} from '../entities/chat/types.ts';
import {useAtom} from 'jotai';
import {atomChat} from '../atoms/atomChat.ts';
import {useMutation} from '@tanstack/react-query';
import type {AxiosResponse} from 'axios';
import axios from 'axios';

export function useChatAI() {
    const [messages, setMessages] = useAtom(atomChat);

    const {isPending: loading, mutate: sendMessage} = useMutation<
        AxiosResponse<{choices?: {message: ChatMessageRequest}[]}>,
        unknown,
        string
    >({
        mutationFn: value => {
            const userMessage = {content: value, role: CHAT_ROLE.user};
            setMessages(userMessage);

            return axios.post(
                API.chatAI(),
                {
                    messages: [...messages, userMessage],
                    model: 'deepseek/deepseek-chat-v3-0324',
                },
                {
                    headers: {
                        Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
                        'Content-Type': 'application/json',
                    },
                },
            );
        },
        onSuccess: data => {
            const reply = data.data.choices?.[0]?.message;
            if (reply) {
                setMessages(reply);
            }
        },
    });

    return {loading, sendMessage};
}
