import { ApiRequest } from "../base/ApiRequest.js";
export class MercadoEditoral extends ApiRequest {
    _configLivros = {
        baseURL: "https://api.mercadoeditorial.org/api/v1.2",
    };
    async livros(isbn) {
        this.init(this._configLivros);
        const response = await this.get(`/book`, {
            params: { isbn },
            headers: { Accept: 'application/json' }
        });
        if (!response.data.books)
            return null;
        return !response.data.books;
    }
}
