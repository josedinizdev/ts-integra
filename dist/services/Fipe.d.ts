import { ApiRequest } from "../base/ApiRequest.js";
export interface TabelaReferencia {
    codigo: number;
    mes: string;
}
export interface Montadora {
    nome: string;
    valor: string;
}
export declare enum VEHICLE_TYPE {
    CAR = 1,
    MOTORCYCLE = 2,
    TRUCK = 3
}
export declare class Fipe extends ApiRequest {
    private readonly _configFipe;
    montadoras(veiculo: VEHICLE_TYPE | string | number): Promise<any>;
    tabelasReferencia(): Promise<TabelaReferencia[]>;
}
