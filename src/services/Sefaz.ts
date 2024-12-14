import { DateFormat } from "ts-devutils/object";
import { ApiRequest, Config } from "../base/ApiRequest.js";

export class Sefaz extends ApiRequest {
    
    private readonly _configNcm: Config = {
        baseURL: "https://portalunico.siscomex.gov.br/classif/api/publico/nomenclatura/download/json",
    };

    public async ncm(): Promise<any> {
        this.init(this._configNcm);

        const response: any = await this.get();
        return response.data.Nomenclaturas?.map((o: object) => {
            return this.normalizeNcm(o);
        });
    }

    private normalizeNcm(obj: object): object {
        const resp = Object.fromEntries(
            Object.entries(obj).map(([k, v]) => [k.toLowerCase(), v])
        );

        resp.data_fim = new DateFormat(resp.data_fim, "DD/MM/YYYY").date();
        resp.data_inicio = new DateFormat(resp.data_inicio, "DD/MM/YYYY").date();
        return resp;
    }
}