import { ApiRequest } from "../base/ApiRequest.js";
export declare class WhoIs extends ApiRequest {
    private readonly _configDominio;
    dominio(dominio: string): Promise<any>;
}
