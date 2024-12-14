import { ApiRequest } from "../base/ApiRequest.js";
export class Anatel extends ApiRequest {
    _configDadosAbertos = {
        baseURL: "https://www.anatel.gov.br/dadosabertos/",
    };
    async ddd() {
        this.init(this._configDadosAbertos);
        const response = await this.get('PDA/Codigo_Nacional/PGCN.csv', {
            responseEncoding: 'binary'
        });
        const csv = response.data.toString('binary')
            .split('\r\n')
            .shift();
        return csv.map((l) => l.split(';')).map(([Codigo, Estado, Cidade, DDD]) => {
            return {
                Codigo,
                Estado,
                Cidade,
                DDD
            };
        });
    }
}
