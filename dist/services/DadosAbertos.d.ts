import { ApiRequest } from "../base/ApiRequest.js";
export declare class DadosAbertos extends ApiRequest {
    private readonly _configEducacao;
    cidades(uf: string): Promise<any>;
}
