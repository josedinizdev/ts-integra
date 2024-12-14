import { ApiRequest, Config } from "../base/ApiRequest.js";

export class Anatel extends ApiRequest {
    
    private readonly _configDadosAbertos: Config = {
        baseURL: "https://www.anatel.gov.br/dadosabertos/",
    };

    public async ddd(): Promise<any> {
        this.init(this._configDadosAbertos);
        const response: any = await this.get('PDA/Codigo_Nacional/PGCN.csv', {
            responseEncoding: 'binary'
        });

        const csv: string[] = response.data.toString('binary')
                                           .split('\r\n')
                                           .shift();

        return csv.map((l) => l.split(';')).map(([Codigo, Estado, Cidade, DDD]) => {
            return { 
                Codigo, 
                Estado, 
                Cidade, 
                DDD };
        });
    }
}