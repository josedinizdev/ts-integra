import { ApiRequest } from "../base/ApiRequest.js";
export declare class Correios extends ApiRequest {
    private readonly _configCep;
    private readonly _configCepAlt;
    cep(cep: string): Promise<any>;
    cepAlt(cep: string): Promise<any>;
    private gerarXMlCepAlt;
}
