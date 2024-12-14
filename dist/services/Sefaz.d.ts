import { ApiRequest } from "../base/ApiRequest.js";
export declare class Sefaz extends ApiRequest {
    private readonly _configNcm;
    ncm(): Promise<any>;
    private normalizeNcm;
}
