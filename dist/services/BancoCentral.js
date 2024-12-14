import { DateFormat, DataSet } from "ts-devutils/object";
import { ApiRequest } from "../base/ApiRequest.js";
export class BancoCentral extends ApiRequest {
    _configParticipantesPix = {
        baseURL: "https://www.bcb.gov.br/content/estabilidadefinanceira/spi",
    };
    _configBancos = {
        baseURL: "https://www.bcb.gov.br/pom/spb/estatistica/port/ParticipantesSTRport.csv",
    };
    async participantesPix(data) {
        this.init(this._configParticipantesPix);
        const response = await this.get(`/participantes-spi-${new DateFormat(data).dateString()}.csv`);
        const ds = new DataSet();
        ds.csvToTable("participantes-pix", response.data);
        return ds.tables["participantes-pix"];
    }
    async bancos() {
        this.init(this._configBancos);
        const response = await this.get("");
        const ds = new DataSet();
        ds.csvToTable("bancos", response.data);
        return ds.tables["bancos"];
    }
}
