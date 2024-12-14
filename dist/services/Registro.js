import { ApiRequest } from "../base/ApiRequest.js";
export class Registro extends ApiRequest {
    _config = {
        baseURL: "https://registro.br/v2/ajax/avail/raw/",
    };
    async dominio(dominio) {
        this.init(this._config);
        if (!dominio.length || /[^A-Za-z0-9àáâãéêíóôõúüç.-]/.test(dominio))
            throw new Error('O domínio não foi informado corretamente!');
        const response = await this.get(dominio);
        return response.data;
    }
}
