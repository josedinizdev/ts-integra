import { ApiRequest } from "../base/ApiRequest.js";
export class Receita extends ApiRequest {
    _configCnpj = {
        baseURL: "https://minhareceita.org/",
    };
    _configCnpjAlt = {
        baseURL: "https://www.receitaws.com.br/v1/cnpj/",
    };
    async cnpj(cnpj) {
        this.init(this._configCnpj);
        const response = await this.get(cnpj);
        return response.data;
    }
    async cnpjAlt(cnpj) {
        this.init(this._configCnpjAlt);
        const response = await this.get(cnpj);
        return response.data;
    }
}
