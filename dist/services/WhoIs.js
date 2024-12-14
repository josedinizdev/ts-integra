import { ApiRequest } from "../base/ApiRequest.js";
export class WhoIs extends ApiRequest {
    _configDominio = {
        baseURL: "https://jsonwhoisapi.com/api/v1/whois",
    };
    async dominio(dominio) {
        this.init(this._configDominio);
        const response = await this.get("", { params: { identifier: dominio } });
        return response.data;
    }
}
