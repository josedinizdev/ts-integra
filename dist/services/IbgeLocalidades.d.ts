import { ApiRequest } from "../base/ApiRequest.js";
export declare class IbgeLocalidades extends ApiRequest {
    private readonly _configLocalidades;
    distritos(codigo?: string | number): Promise<any>;
    distritosPorUf(uf: string): Promise<any>;
    distritosPorMesorregiao(mesorregiao: string): Promise<any>;
    distritosPorMicrorregiao(microrregiao: string): Promise<any>;
    distritosPorMunicipio(municipio: string): Promise<any>;
    distritosPorRegiaoImediata(regiaoImediata: string): Promise<any>;
    distritosPorRegiaoIntermediaria(regiaoIntermediaria: string): Promise<any>;
    distritosPorRegiao(regiao: string): Promise<any>;
    mesorregioes(codigo?: string | number): Promise<any>;
    mesorregioesPorUf(uf: string): Promise<any>;
    mesorregioesPorRegiao(regiao: string): Promise<any>;
    microrregioes(codigo?: string | number): Promise<any>;
    microrregioesPorUf(uf: string): Promise<any>;
    microrregioesPorRegiao(regiao: string): Promise<any>;
    microrregioesPorMesorregiao(regiao: string): Promise<any>;
    municipios(codigo?: string | number): Promise<any>;
    municipiosPorUf(uf: string): Promise<any>;
    municipiosPorMesorregiao(regiao: string): Promise<any>;
    municipiosPorMicrorregiao(microrregiao: string): Promise<any>;
    municipiosPorRegiaoImediata(regiaoImediata: string): Promise<any>;
    municipiosPorRegiaoIntermediaria(regiaoIntermediaria: string): Promise<any>;
    municipiosPorRegiao(regiao: string): Promise<any>;
    paises(codigo?: string | number): Promise<any>;
    regioes(codigo?: string | number): Promise<any>;
    regioesImediatas(codigo?: string | number): Promise<any>;
    regioesImediatasPorUf(uf: string): Promise<any>;
    regioesImediatasPorRegiaoIntermediaria(regiaoIntermediaria: string): Promise<any>;
    regioesImediatasPorRegiao(regiao: string): Promise<any>;
    regioesIntegradasDeDesenvolvimento(codigo?: string | number): Promise<any>;
    regioesIntermediarias(codigo?: string | number): Promise<any>;
    regioesIntermediariasPorUf(uf: string): Promise<any>;
    regioesIntermediariasPorRegiao(regiao: string): Promise<any>;
    regioesMetropolitanas(codigo?: string | number): Promise<any>;
    regioesMetropolitanasPorUf(uf: string): Promise<any>;
    regioesMetropolitanasPorRegiao(regiao: string): Promise<any>;
    subdistritos(codigo?: string | number): Promise<any>;
    subdistritosPorUf(uf: string): Promise<any>;
    subdistritosPorDistrito(distrito: string): Promise<any>;
    subdistritosMunicipio(municipio: string): Promise<any>;
    subdistritosPorMicrorregiao(microrregiao: string): Promise<any>;
    subdistritosPorMesorregiao(mesorregiao: string): Promise<any>;
    subdistritosPorRegiaoImediata(regiaoImediata: string): Promise<any>;
    subdistritosPorRegiao(regiao: string): Promise<any>;
    uf(codigo?: string | number): Promise<any>;
    ufPorRegiao(regiao: string): Promise<any>;
}