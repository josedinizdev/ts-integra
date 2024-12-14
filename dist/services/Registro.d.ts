import { ApiRequest } from "../base/ApiRequest.js";
export declare class Registro extends ApiRequest {
    private readonly _config;
    dominio(dominio: string): Promise<any>;
}
