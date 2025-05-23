export enum CHAT_ROLE {
    user = 'user',
    assistant = 'assistant',
}

export interface ChatMessageRequest {
    content: string;
    role: CHAT_ROLE;
}
