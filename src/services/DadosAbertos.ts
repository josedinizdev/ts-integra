import { ApiRequest, Config } from "../base/ApiRequest.js";

export class DadosAbertos extends ApiRequest {
    
    private readonly _configEducacao: Config = {
        baseURL: "http://educacao.dadosabertosbr.com/api",
    };

    public async cidades(uf: string): Promise<any> {
        this.init(this._configEducacao);

        const response: any = await this.get(`/cidades/${uf}`);
        return response.data;
    }
}