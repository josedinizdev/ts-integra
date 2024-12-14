import { ApiRequest } from "../base/ApiRequest.js";
export interface IPesquisarLivros {
    isbn?: string;
    country?: string;
    keywords?: string;
    title?: string;
    author?: string;
}
export declare class Google extends ApiRequest {
    private readonly _configLivros;
    livros(options: IPesquisarLivros): Promise<any>;
    private gerarParametro;
}
