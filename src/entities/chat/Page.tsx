/**
 * Created by ROVENSKIY D.A. on 22.05.2025
 */
import {memo, useState} from 'react';
import {useChatAI} from '@hooks/useChatAI.ts';
import {Button, Input, Spin} from 'antd';
import {twMerge} from 'tailwind-merge';
import {CHAT_ROLE} from './types.ts';
import ButtonBack from '@components/ButtonBack.tsx';
import {atomChat} from '../../atoms/atomChat.ts';
import {useAtomValue} from 'jotai';
import {LoadingOutlined} from '@ant-design/icons';

const {TextArea} = Input;

export const Component = memo(() => {
    const {loading, sendMessage} = useChatAI();
    const messages = useAtomValue(atomChat);
    const [text, setText] = useState('');

    const handleSend = () => {
        if (text.trim()) {
            sendMessage(text);
            setText('');
        }
    };

    return (
        <div className="text-everywhere-color flex h-full w-full flex-col gap-y-4">
            <div className="self-start">
                <ButtonBack to="/services-list" />
            </div>

            <div className="flex flex-auto flex-col overflow-y-auto rounded-3xl border p-4">
                {messages.map((msg, idx) => (
                    <div
                        key={idx}
                        className={twMerge(
                            'flex gap-x-2',
                            msg.role === CHAT_ROLE.assistant
                                ? 'text-chatAI-color'
                                : '',
                        )}
                    >
                        <strong className="capitalize">{msg?.role}:</strong>
                        &nbsp;
                        <i>{msg?.content}</i>
                    </div>
                ))}
                <Spin
                    indicator={<LoadingOutlined />}
                    spinning={loading}
                    className={twMerge('!text-chatAI-color self-start')}
                    size="large"
                />
            </div>

            <div className="flex flex-col gap-y-4">
                <TextArea
                    value={text}
                    onChange={e => setText(e.target.value)}
                    onPressEnter={handleSend}
                    placeholder="Enter message"
                    autoSize={{maxRows: 5, minRows: 3}}
                    className="!rounded-3xl !p-4 !text-lg"
                    size="small"
                />
                <Button
                    type="primary"
                    className="!bg-header-bg"
                    onClick={handleSend}
                >
                    Send
                </Button>
            </div>
        </div>
    );
});
