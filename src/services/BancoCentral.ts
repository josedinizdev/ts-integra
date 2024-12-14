import { DateFormat, DataSet } from "ts-devutils/object";
import { ApiRequest, Config } from "../base/ApiRequest.js";

export class BancoCentral extends ApiRequest {
    
    private readonly _configParticipantesPix: Config = {
        baseURL: "https://www.bcb.gov.br/content/estabilidadefinanceira/spi",
    };

    private readonly _configBancos: Config = {
        baseURL: "https://www.bcb.gov.br/pom/spb/estatistica/port/ParticipantesSTRport.csv",
    };

    public async participantesPix(data?: Date): Promise<any> {
        this.init(this._configParticipantesPix);

        const response: any = await this.get(`/participantes-spi-${new DateFormat(data).dateString()}.csv`);

        const ds: DataSet = new DataSet();
        ds.csvToTable("participantes-pix", response.data);

        return ds.tables["participantes-pix"];
    }

    public async bancos(): Promise<any> {
        this.init(this._configBancos);

        const response: any = await this.get("");

        const ds: DataSet = new DataSet();
        ds.csvToTable("bancos", response.data);

        return ds.tables["bancos"];
    }
}