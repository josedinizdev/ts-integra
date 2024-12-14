import { ApiRequest } from "../base/ApiRequest.js";
export declare class Receita extends ApiRequest {
    private readonly _configCnpj;
    private readonly _configCnpjAlt;
    cnpj(cnpj: string): Promise<any>;
    cnpjAlt(cnpj: string): Promise<any>;
}
