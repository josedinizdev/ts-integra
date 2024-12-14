import { ApiRequest, Config } from "../base/ApiRequest.js";

export class Receita extends ApiRequest {
    
    private readonly _configCnpj: Config = {
        baseURL: "https://minhareceita.org/",
    };

    private readonly _configCnpjAlt: Config = {
        baseURL: "https://www.receitaws.com.br/v1/cnpj/",
    };

    public async cnpj(cnpj: string): Promise<any> {
        this.init(this._configCnpj);
        const response: any = await this.get(cnpj);
        return response.data;
    }

    public async cnpjAlt(cnpj: string): Promise<any> {
        this.init(this._configCnpjAlt);
        const response: any = await this.get(cnpj);
        return response.data;
    }
}