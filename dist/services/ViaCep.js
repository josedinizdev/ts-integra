import { ApiRequest } from "../base/ApiRequest.js";
export class ViaCep extends ApiRequest {
    _configCep = {
        baseURL: "https://viacep.com.br/ws",
    };
    async cep(cep) {
        this.init(this._configCep);
        const response = await this.get(`/${cep}/json`);
        return response.data;
    }
}
