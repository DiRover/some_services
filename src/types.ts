export interface PaginationResponse {
    total: number;
}

export interface PaginationParams {
    limit: number;
    skip: number;
}

export interface BaseDTO {
    id: string;
}
