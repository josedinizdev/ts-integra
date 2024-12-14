import { ApiRequest, Config } from "../base/ApiRequest.js";

export interface IPesquisarLivros {
    isbn?: string,
    country?: string,
    keywords?: string,
    title?: string,
    author?: string
}

export class Google extends ApiRequest {

    private readonly _configLivros: Config = {
        baseURL: "https://www.googleapis.com/books/v1/volumes",
    };

    public async livros(options: IPesquisarLivros): Promise<any> {
        this.init(this._configLivros);

        const query = options.isbn
            ? this.gerarParametro("isbn", options.isbn)
            : "".concat(
                options.keywords ?? "" ,
                this.gerarParametro("intitle", options.title),
                this.gerarParametro("inauthor", options.author),
            );

        const response: any = await this.get("", {
            params: {
                q: query,
                country: options.country ?? "BR"
            }
        });

        return response.data;
    }

    private gerarParametro(field: string, str?: string): string {
        if (str) return `${field}:${str}`;
        return "";
    }
}