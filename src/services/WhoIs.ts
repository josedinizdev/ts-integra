import { ApiRequest, Config } from "../base/ApiRequest.js";

export class WhoIs extends ApiRequest {

    private readonly _configDominio: Config = {
        baseURL: "https://jsonwhoisapi.com/api/v1/whois",
    };

    public async dominio(dominio: string): Promise<any> {
        this.init(this._configDominio);   
        const response: any = await this.get("", { params: { identifier: dominio }});

        return response.data;
    }
}