export const CHAT_ROLE = {
    assistant: 'assistant',
    user: 'user',
} as const;

export type CHAT_ROLE_NAME = keyof typeof CHAT_ROLE;

export interface ChatMessageRequest {
    content: string;
    role: CHAT_ROLE_NAME;
}
