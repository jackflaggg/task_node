export interface APIError extends Error {
    response?: {
        status: number;
        data?: unknown; // Дополнительная информация о данных
    };
}

export function isAPIError(error: any): error is APIError {
    return error && typeof error === 'object' && 'response' in error;
}

export enum HTTP_STATUSES {
    NOT_AUTHORIZATION_401 = 401,
    NOT_FOUND_404 = 404,
}

export interface tokenDictionaryInt {
    token: string,
    city: string,
    language: string,
}