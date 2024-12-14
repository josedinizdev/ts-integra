import { ApiRequest } from "../base/ApiRequest.js";
export declare class Isbn extends ApiRequest {
    private readonly ISBN_PATTERN;
    private readonly API_BASE64_KEY;
    private readonly API_KEY;
    private readonly _configEncontrar;
    encontrar(isbn: string): Promise<any>;
    isValidIsbn(isbn: string): boolean;
    private isbn13ToIsbn10;
    private isbn10ToIsbn13;
}
