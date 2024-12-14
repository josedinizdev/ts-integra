import { DateFormat } from "ts-devutils/object";
import { ApiRequest } from "../base/ApiRequest.js";
export class Sefaz extends ApiRequest {
    _configNcm = {
        baseURL: "https://portalunico.siscomex.gov.br/classif/api/publico/nomenclatura/download/json",
    };
    async ncm() {
        this.init(this._configNcm);
        const response = await this.get();
        return response.data.Nomenclaturas?.map((o) => {
            return this.normalizeNcm(o);
        });
    }
    normalizeNcm(obj) {
        const resp = Object.fromEntries(Object.entries(obj).map(([k, v]) => [k.toLowerCase(), v]));
        resp.data_fim = new DateFormat(resp.data_fim, "DD/MM/YYYY").date();
        resp.data_inicio = new DateFormat(resp.data_inicio, "DD/MM/YYYY").date();
        return resp;
    }
}
