export default class API {
    private static prefixMockApiURL = import.meta.env.VITE_MOCK_API_URL;
    private static prefixDummyApiURL =
        import.meta.env.MODE === 'production'
            ? 'https://dummyjson.com'
            : import.meta.env.VITE_DUMMY_API_URL;
    private static prefixOpenRouterApiURL = import.meta.env
        .VITE_OPENROUTER_API_URL;

    protected static joinCommands(...commands: string[]): string {
        const suffix = commands.join('/');
        return suffix.length ? `/${suffix}` : '';
    }

    public static users(): string;
    public static users(id: string): string;
    public static users(command: 'add'): string;
    public static users(...commands: string[]) {
        const prefix = '/users';
        return `${this.prefixDummyApiURL}${prefix}${this.joinCommands(...commands)}`;
    }

    public static chatAI(): string {
        return `${this.prefixOpenRouterApiURL}/api/v1/chat/completions`;
    }

    public static jobs(): string {
        return `${this.prefixMockApiURL}/jobs`;
    }

    public static companies(): string {
        return `${this.prefixDummyApiURL}/c/f63e-ad01-411e-85a8/companies`;
    }
}
