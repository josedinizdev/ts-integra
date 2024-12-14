import { ApiRequest } from "../base/ApiRequest.js";
export class DadosAbertos extends ApiRequest {
    _configEducacao = {
        baseURL: "http://educacao.dadosabertosbr.com/api",
    };
    async cidades(uf) {
        this.init(this._configEducacao);
        const response = await this.get(`/cidades/${uf}`);
        return response.data;
    }
}
