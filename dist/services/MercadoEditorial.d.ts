import { ApiRequest } from "../base/ApiRequest.js";
export declare class MercadoEditoral extends ApiRequest {
    private readonly _configLivros;
    livros(isbn: string): Promise<any>;
}
