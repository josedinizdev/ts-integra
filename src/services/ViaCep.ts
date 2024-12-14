import { ApiRequest, Config } from "../base/ApiRequest.js";

export class ViaCep extends ApiRequest {
    
    private readonly _configCep: Config = {
        baseURL: "https://viacep.com.br/ws",
    };

    public async cep(cep: string): Promise<any> {
        this.init(this._configCep);

        const response: any = await this.get(`/${cep}/json`);
        return response.data;
    }
}