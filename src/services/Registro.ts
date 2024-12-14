import { ApiRequest, Config } from "../base/ApiRequest.js";

export class Registro extends ApiRequest {
    
    private readonly _config: Config = {
        baseURL: "https://registro.br/v2/ajax/avail/raw/",
    };

    public async dominio(dominio: string): Promise<any> {
        this.init(this._config);
        if (!dominio.length || /[^A-Za-z0-9àáâãéêíóôõúüç.-]/.test(dominio))
            throw new Error('O domínio não foi informado corretamente!');
        
        const response: any = await this.get(dominio);
        return response.data;
    }
}