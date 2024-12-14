import { ApiRequest } from "../base/ApiRequest.js";
export class Google extends ApiRequest {
    _configLivros = {
        baseURL: "https://www.googleapis.com/books/v1/volumes",
    };
    async livros(options) {
        this.init(this._configLivros);
        const query = options.isbn
            ? this.gerarParametro("isbn", options.isbn)
            : "".concat(options.keywords ?? "", this.gerarParametro("intitle", options.title), this.gerarParametro("inauthor", options.author));
        const response = await this.get("", {
            params: {
                q: query,
                country: options.country ?? "BR"
            }
        });
        return response.data;
    }
    gerarParametro(field, str) {
        if (str)
            return `${field}:${str}`;
        return "";
    }
}
