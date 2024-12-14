import { ApiRequest, Config } from "../base/ApiRequest.js";

export interface TabelaReferencia {
    codigo: number,
    mes: string
}

export interface Montadora {
    nome: string, 
    valor: string
}

export enum VEHICLE_TYPE {
    CAR = 1,
    MOTORCYCLE = 2,
    TRUCK = 3,
};

export class Fipe extends ApiRequest {

    private readonly _configFipe: Config = {
        baseURL: "https://veiculos.fipe.org.br/api",
    };

    public async montadoras(veiculo: VEHICLE_TYPE | string | number): Promise<any> {
        this.init(this._configFipe);
        const tabelasReferencia: TabelaReferencia[] = await this.tabelasReferencia();

        const response: any = await this.post("/veiculos/ConsultarMarcas", {
            codigoTabelaReferencia: tabelasReferencia[0].codigo,
            codigoTipoVeiculo: typeof veiculo === "number"
                ? veiculo
                : VEHICLE_TYPE[veiculo.toUpperCase() as keyof typeof VEHICLE_TYPE]
        });

        return response.data
            .map((item: any) => ({ nome: item.Label, valor: item.Value }))
            .sort((a: Montadora, b: Montadora) => parseInt(a.valor, 10) - parseInt(b.valor, 10));
    }

    public async tabelasReferencia(): Promise<TabelaReferencia[]> {
        this.init(this._configFipe);
        const response = await this.post("/veiculos/ConsultarTabelaDeReferencia", {}, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        return response.data
            .map((item: any) => ({ codigo: item.Codigo, mes: item.Mes }))
            .sort((a: TabelaReferencia, b: TabelaReferencia) => b.codigo - a.codigo);
    }
}