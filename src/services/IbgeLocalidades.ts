import { ApiRequest, Config } from "../base/ApiRequest.js";

export class IbgeLocalidades extends ApiRequest {
    
    private readonly _configLocalidades: Config = {
        baseURL: "https://servicodados.ibge.gov.br/api/v1/localidades",
    };

    public async distritos(codigo?: string | number): Promise<any> {
        this.init(this._configLocalidades);

        const response: any = await this.get("/distritos".concat(codigo ? `/${codigo}` : ""));
        return response.data;
    }

    public async distritosPorUf(uf: string): Promise<any> {
        this.init(this._configLocalidades);

        const response: any = await this.get(`/estados/${uf}/distritos`);
        return response.data;
    }

    public async distritosPorMesorregiao(mesorregiao: string): Promise<any> {
        this.init(this._configLocalidades);

        const response: any = await this.get(`/mesorregioes/${mesorregiao}/distritos`);
        return response.data;
    }

    public async distritosPorMicrorregiao(microrregiao: string): Promise<any> {
        this.init(this._configLocalidades);

        const response: any = await this.get(`/microrregioes/${microrregiao}/distritos`);
        return response.data;
    }

    public async distritosPorMunicipio(municipio: string): Promise<any> {
        this.init(this._configLocalidades);

        const response: any = await this.get(`/municipios/${municipio}/distritos`);
        return response.data;
    }

    public async distritosPorRegiaoImediata(regiaoImediata: string): Promise<any> {
        this.init(this._configLocalidades);

        const response: any = await this.get(`/regioes-imediatas/${regiaoImediata}/distritos`);
        return response.data;
    }

    public async distritosPorRegiaoIntermediaria(regiaoIntermediaria: string): Promise<any> {
        this.init(this._configLocalidades);

        const response: any = await this.get(`/regioes-intermediarias/${regiaoIntermediaria}/distritos`);
        return response.data;
    }

    public async distritosPorRegiao(regiao: string): Promise<any> {
        this.init(this._configLocalidades);

        const response: any = await this.get(`/regioes/${regiao}/distritos`);
        return response.data;
    }

    public async mesorregioes(codigo?: string | number): Promise<any> {
        this.init(this._configLocalidades);

        const response: any = await this.get("/mesorregioes".concat(codigo ? `/${codigo}` : ""));
        return response.data;
    }

    public async mesorregioesPorUf(uf: string): Promise<any> {
        this.init(this._configLocalidades);

        const response: any = await this.get(`/estados/${uf}/mesorregioes`);
        return response.data;
    }

    public async mesorregioesPorRegiao(regiao: string): Promise<any> {
        this.init(this._configLocalidades);

        const response: any = await this.get(`/regioes/${regiao}/mesorregioes`);
        return response.data;
    }

    public async microrregioes(codigo?: string | number): Promise<any> {
        this.init(this._configLocalidades);

        const response: any = await this.get("/microrregioes".concat(codigo ? `/${codigo}` : ""));
        return response.data;
    }

    public async microrregioesPorUf(uf: string): Promise<any> {
        this.init(this._configLocalidades);

        const response: any = await this.get(`/estados/${uf}/microrregioes`);
        return response.data;
    }

    public async microrregioesPorRegiao(regiao: string): Promise<any> {
        this.init(this._configLocalidades);

        const response: any = await this.get(`/regioes/${regiao}/microrregioes`);
        return response.data;
    }

    public async microrregioesPorMesorregiao(regiao: string): Promise<any> {
        this.init(this._configLocalidades);

        const response: any = await this.get(`/mesorregioes/${regiao}/microrregioes`);
        return response.data;
    }

    public async municipios(codigo?: string | number): Promise<any> {
        this.init(this._configLocalidades);

        const response: any = await this.get("/municipios".concat(codigo ? `/${codigo}` : ""));
        return response.data;
    }

    public async municipiosPorUf(uf: string): Promise<any> {
        this.init(this._configLocalidades);

        const response: any = await this.get(`/estados/${uf}/municipios`);
        return response.data;
    }

    public async municipiosPorMesorregiao(regiao: string): Promise<any> {
        this.init(this._configLocalidades);

        const response: any = await this.get(`/mesorregioes/${regiao}/municipios`);
        return response.data;
    }

    public async municipiosPorMicrorregiao(microrregiao: string): Promise<any> {
        this.init(this._configLocalidades);

        const response: any = await this.get(`/microrregioes/${microrregiao}/municipios`);
        return response.data;
    }

    public async municipiosPorRegiaoImediata(regiaoImediata: string): Promise<any> {
        this.init(this._configLocalidades);

        const response: any = await this.get(`/regioes-imediatas/${regiaoImediata}/municipios`);
        return response.data;
    }

    public async municipiosPorRegiaoIntermediaria(regiaoIntermediaria: string): Promise<any> {
        this.init(this._configLocalidades);

        const response: any = await this.get(`/regioes-intermediarias/${regiaoIntermediaria}/municipios`);
        return response.data;
    }

    public async municipiosPorRegiao(regiao: string): Promise<any> {
        this.init(this._configLocalidades);

        const response: any = await this.get(`/regioes/${regiao}/municipios`);
        return response.data;
    }

    public async paises(codigo?: string | number): Promise<any> {
        this.init(this._configLocalidades);

        const response: any = await this.get("/paises".concat(codigo ? `/${codigo}` : ""));
        return response.data;
    }

    public async regioes(codigo?: string | number): Promise<any> {
        this.init(this._configLocalidades);

        const response: any = await this.get("/regioes".concat(codigo ? `/${codigo}` : ""));
        return response.data;
    }

    public async regioesImediatas(codigo?: string | number): Promise<any> {
        this.init(this._configLocalidades);

        const response: any = await this.get("/regioes-imediatas".concat(codigo ? `/${codigo}` : ""));
        return response.data;
    }

    public async regioesImediatasPorUf(uf: string): Promise<any> {
        this.init(this._configLocalidades);

        const response: any = await this.get(`/estados/${uf}/regioes-imediatas`);
        return response.data;
    }

    public async regioesImediatasPorRegiaoIntermediaria(regiaoIntermediaria: string): Promise<any> {
        this.init(this._configLocalidades);

        const response: any = await this.get(`/regioes-intermediarias/${regiaoIntermediaria}/regioes-imediatas`);
        return response.data;
    }

    public async regioesImediatasPorRegiao(regiao: string): Promise<any> {
        this.init(this._configLocalidades);

        const response: any = await this.get(`/regioes/${regiao}/regioes-imediatas`);
        return response.data;
    }

    public async regioesIntegradasDeDesenvolvimento(codigo?: string | number): Promise<any> {
        this.init(this._configLocalidades);

        const response: any = await this.get("/regioes-integradas-de-desenvolvimento".concat(codigo ? `/${codigo}` : ""));
        return response.data;
    }

    public async regioesIntermediarias(codigo?: string | number): Promise<any> {
        this.init(this._configLocalidades);

        const response: any = await this.get("/regioes-intermediarias".concat(codigo ? `/${codigo}` : ""));
        return response.data;
    }

    public async regioesIntermediariasPorUf(uf: string): Promise<any> {
        this.init(this._configLocalidades);

        const response: any = await this.get(`/estados/${uf}/regioes-intermediarias`);
        return response.data;
    }

    public async regioesIntermediariasPorRegiao(regiao: string): Promise<any> {
        this.init(this._configLocalidades);

        const response: any = await this.get(`/regioes/${regiao}/regioes-intermediarias`);
        return response.data;
    }

    public async regioesMetropolitanas(codigo?: string | number): Promise<any> {
        this.init(this._configLocalidades);

        const response: any = await this.get("/regioes-metropolitanas".concat(codigo ? `/${codigo}` : ""));
        return response.data;
    }

    public async regioesMetropolitanasPorUf(uf: string): Promise<any> {
        this.init(this._configLocalidades);

        const response: any = await this.get(`/estados/${uf}/regioes-metropolitanas`);
        return response.data;
    }

    public async regioesMetropolitanasPorRegiao(regiao: string): Promise<any> {
        this.init(this._configLocalidades);

        const response: any = await this.get(`/regioes/${regiao}/regioes-metropolitanas`);
        return response.data;
    }

    public async subdistritos(codigo?: string | number): Promise<any> {
        this.init(this._configLocalidades);

        const response: any = await this.get("/subdistritos".concat(codigo ? `/${codigo}` : ""));
        return response.data;
    }

    public async subdistritosPorUf(uf: string): Promise<any> {
        this.init(this._configLocalidades);

        const response: any = await this.get(`/estados/${uf}/subdistritos`);
        return response.data;
    }

    public async subdistritosPorDistrito(distrito: string): Promise<any> {
        this.init(this._configLocalidades);

        const response: any = await this.get(`/distritos/${distrito}/subdistritos`);
        return response.data;
    }

    public async subdistritosMunicipio(municipio: string): Promise<any> {
        this.init(this._configLocalidades);

        const response: any = await this.get(`/municipios/${municipio}/subdistritos`);
        return response.data;
    }

    public async subdistritosPorMicrorregiao(microrregiao: string): Promise<any> {
        this.init(this._configLocalidades);

        const response: any = await this.get(`/microrregioes/${microrregiao}/subdistritos`);
        return response.data;
    }

    public async subdistritosPorMesorregiao(mesorregiao: string): Promise<any> {
        this.init(this._configLocalidades);

        const response: any = await this.get(`/mesorregioes/${mesorregiao}/subdistritos`);
        return response.data;
    }

    public async subdistritosPorRegiaoImediata(regiaoImediata: string): Promise<any> {
        this.init(this._configLocalidades);

        const response: any = await this.get(`/regioes-imediatas/${regiaoImediata}/subdistritos`);
        return response.data;
    }

    public async subdistritosPorRegiao(regiao: string): Promise<any> {
        this.init(this._configLocalidades);

        const response: any = await this.get(`/regioes/${regiao}/subdistritos`);
        return response.data;
    }

    public async uf(codigo?: string | number): Promise<any> {
        this.init(this._configLocalidades);

        const response: any = await this.get("/estados".concat(codigo ? `/${codigo}` : ""));
        return response.data;
    }

    public async ufPorRegiao(regiao: string): Promise<any> {
        this.init(this._configLocalidades);

        const response: any = await this.get(`/regioes/${regiao}/estados`);
        return response.data;
    }
}