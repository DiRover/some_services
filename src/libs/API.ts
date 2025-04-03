export default class API {
    private static prefix = import.meta.env.API_BASE_URL;

    public static users(): string {
        return `${this.prefix}/users`;
    }
}
