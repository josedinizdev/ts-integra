import { ApiRequest } from "../base/ApiRequest.js";
export declare class ViaCep extends ApiRequest {
    private readonly _configCep;
    cep(cep: string): Promise<any>;
}
