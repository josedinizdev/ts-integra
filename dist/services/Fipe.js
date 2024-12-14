import { ApiRequest } from "../base/ApiRequest.js";
export var VEHICLE_TYPE;
(function (VEHICLE_TYPE) {
    VEHICLE_TYPE[VEHICLE_TYPE["CAR"] = 1] = "CAR";
    VEHICLE_TYPE[VEHICLE_TYPE["MOTORCYCLE"] = 2] = "MOTORCYCLE";
    VEHICLE_TYPE[VEHICLE_TYPE["TRUCK"] = 3] = "TRUCK";
})(VEHICLE_TYPE || (VEHICLE_TYPE = {}));
;
export class Fipe extends ApiRequest {
    _configFipe = {
        baseURL: "https://veiculos.fipe.org.br/api",
    };
    async montadoras(veiculo) {
        this.init(this._configFipe);
        const tabelasReferencia = await this.tabelasReferencia();
        const response = await this.post("/veiculos/ConsultarMarcas", {
            codigoTabelaReferencia: tabelasReferencia[0].codigo,
            codigoTipoVeiculo: typeof veiculo === "number"
                ? veiculo
                : VEHICLE_TYPE[veiculo.toUpperCase()]
        });
        return response.data
            .map((item) => ({ nome: item.Label, valor: item.Value }))
            .sort((a, b) => parseInt(a.valor, 10) - parseInt(b.valor, 10));
    }
    async tabelasReferencia() {
        this.init(this._configFipe);
        const response = await this.post("/veiculos/ConsultarTabelaDeReferencia", {}, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        return response.data
            .map((item) => ({ codigo: item.Codigo, mes: item.Mes }))
            .sort((a, b) => b.codigo - a.codigo);
    }
}
