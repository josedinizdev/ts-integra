import { ApiRequest, Config } from "../base/ApiRequest.js";

export class MercadoEditoral extends ApiRequest {

    private readonly _configLivros: Config = {
        baseURL: "https://api.mercadoeditorial.org/api/v1.2",
    };

    public async livros(isbn: string): Promise<any> {
        this.init(this._configLivros);   
        const response: any = await this.get(`/book`, {
            params: { isbn },
            headers: { Accept: 'application/json' }
        });

        if (!response.data.books ) return null;

        return !response.data.books;
    }
}