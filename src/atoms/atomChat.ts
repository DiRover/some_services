import {atom} from 'jotai';
import type {ChatMessageRequest} from '../entities/chat/types.ts';

const baseChatAtom = atom<ChatMessageRequest[]>([]);

export const atomChat = atom(
    get => get(baseChatAtom),
    (get, set, update: ChatMessageRequest) => {
        const current = get(baseChatAtom);
        const combined = [...current, update].slice(-30);
        set(baseChatAtom, combined);
    },
);
