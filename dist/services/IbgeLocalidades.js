import { ApiRequest } from "../base/ApiRequest.js";
export class IbgeLocalidades extends ApiRequest {
    _configLocalidades = {
        baseURL: "https://servicodados.ibge.gov.br/api/v1/localidades",
    };
    async distritos(codigo) {
        this.init(this._configLocalidades);
        const response = await this.get("/distritos".concat(codigo ? `/${codigo}` : ""));
        return response.data;
    }
    async distritosPorUf(uf) {
        this.init(this._configLocalidades);
        const response = await this.get(`/estados/${uf}/distritos`);
        return response.data;
    }
    async distritosPorMesorregiao(mesorregiao) {
        this.init(this._configLocalidades);
        const response = await this.get(`/mesorregioes/${mesorregiao}/distritos`);
        return response.data;
    }
    async distritosPorMicrorregiao(microrregiao) {
        this.init(this._configLocalidades);
        const response = await this.get(`/microrregioes/${microrregiao}/distritos`);
        return response.data;
    }
    async distritosPorMunicipio(municipio) {
        this.init(this._configLocalidades);
        const response = await this.get(`/municipios/${municipio}/distritos`);
        return response.data;
    }
    async distritosPorRegiaoImediata(regiaoImediata) {
        this.init(this._configLocalidades);
        const response = await this.get(`/regioes-imediatas/${regiaoImediata}/distritos`);
        return response.data;
    }
    async distritosPorRegiaoIntermediaria(regiaoIntermediaria) {
        this.init(this._configLocalidades);
        const response = await this.get(`/regioes-intermediarias/${regiaoIntermediaria}/distritos`);
        return response.data;
    }
    async distritosPorRegiao(regiao) {
        this.init(this._configLocalidades);
        const response = await this.get(`/regioes/${regiao}/distritos`);
        return response.data;
    }
    async mesorregioes(codigo) {
        this.init(this._configLocalidades);
        const response = await this.get("/mesorregioes".concat(codigo ? `/${codigo}` : ""));
        return response.data;
    }
    async mesorregioesPorUf(uf) {
        this.init(this._configLocalidades);
        const response = await this.get(`/estados/${uf}/mesorregioes`);
        return response.data;
    }
    async mesorregioesPorRegiao(regiao) {
        this.init(this._configLocalidades);
        const response = await this.get(`/regioes/${regiao}/mesorregioes`);
        return response.data;
    }
    async microrregioes(codigo) {
        this.init(this._configLocalidades);
        const response = await this.get("/microrregioes".concat(codigo ? `/${codigo}` : ""));
        return response.data;
    }
    async microrregioesPorUf(uf) {
        this.init(this._configLocalidades);
        const response = await this.get(`/estados/${uf}/microrregioes`);
        return response.data;
    }
    async microrregioesPorRegiao(regiao) {
        this.init(this._configLocalidades);
        const response = await this.get(`/regioes/${regiao}/microrregioes`);
        return response.data;
    }
    async microrregioesPorMesorregiao(regiao) {
        this.init(this._configLocalidades);
        const response = await this.get(`/mesorregioes/${regiao}/microrregioes`);
        return response.data;
    }
    async municipios(codigo) {
        this.init(this._configLocalidades);
        const response = await this.get("/municipios".concat(codigo ? `/${codigo}` : ""));
        return response.data;
    }
    async municipiosPorUf(uf) {
        this.init(this._configLocalidades);
        const response = await this.get(`/estados/${uf}/municipios`);
        return response.data;
    }
    async municipiosPorMesorregiao(regiao) {
        this.init(this._configLocalidades);
        const response = await this.get(`/mesorregioes/${regiao}/municipios`);
        return response.data;
    }
    async municipiosPorMicrorregiao(microrregiao) {
        this.init(this._configLocalidades);
        const response = await this.get(`/microrregioes/${microrregiao}/municipios`);
        return response.data;
    }
    async municipiosPorRegiaoImediata(regiaoImediata) {
        this.init(this._configLocalidades);
        const response = await this.get(`/regioes-imediatas/${regiaoImediata}/municipios`);
        return response.data;
    }
    async municipiosPorRegiaoIntermediaria(regiaoIntermediaria) {
        this.init(this._configLocalidades);
        const response = await this.get(`/regioes-intermediarias/${regiaoIntermediaria}/municipios`);
        return response.data;
    }
    async municipiosPorRegiao(regiao) {
        this.init(this._configLocalidades);
        const response = await this.get(`/regioes/${regiao}/municipios`);
        return response.data;
    }
    async paises(codigo) {
        this.init(this._configLocalidades);
        const response = await this.get("/paises".concat(codigo ? `/${codigo}` : ""));
        return response.data;
    }
    async regioes(codigo) {
        this.init(this._configLocalidades);
        const response = await this.get("/regioes".concat(codigo ? `/${codigo}` : ""));
        return response.data;
    }
    async regioesImediatas(codigo) {
        this.init(this._configLocalidades);
        const response = await this.get("/regioes-imediatas".concat(codigo ? `/${codigo}` : ""));
        return response.data;
    }
    async regioesImediatasPorUf(uf) {
        this.init(this._configLocalidades);
        const response = await this.get(`/estados/${uf}/regioes-imediatas`);
        return response.data;
    }
    async regioesImediatasPorRegiaoIntermediaria(regiaoIntermediaria) {
        this.init(this._configLocalidades);
        const response = await this.get(`/regioes-intermediarias/${regiaoIntermediaria}/regioes-imediatas`);
        return response.data;
    }
    async regioesImediatasPorRegiao(regiao) {
        this.init(this._configLocalidades);
        const response = await this.get(`/regioes/${regiao}/regioes-imediatas`);
        return response.data;
    }
    async regioesIntegradasDeDesenvolvimento(codigo) {
        this.init(this._configLocalidades);
        const response = await this.get("/regioes-integradas-de-desenvolvimento".concat(codigo ? `/${codigo}` : ""));
        return response.data;
    }
    async regioesIntermediarias(codigo) {
        this.init(this._configLocalidades);
        const response = await this.get("/regioes-intermediarias".concat(codigo ? `/${codigo}` : ""));
        return response.data;
    }
    async regioesIntermediariasPorUf(uf) {
        this.init(this._configLocalidades);
        const response = await this.get(`/estados/${uf}/regioes-intermediarias`);
        return response.data;
    }
    async regioesIntermediariasPorRegiao(regiao) {
        this.init(this._configLocalidades);
        const response = await this.get(`/regioes/${regiao}/regioes-intermediarias`);
        return response.data;
    }
    async regioesMetropolitanas(codigo) {
        this.init(this._configLocalidades);
        const response = await this.get("/regioes-metropolitanas".concat(codigo ? `/${codigo}` : ""));
        return response.data;
    }
    async regioesMetropolitanasPorUf(uf) {
        this.init(this._configLocalidades);
        const response = await this.get(`/estados/${uf}/regioes-metropolitanas`);
        return response.data;
    }
    async regioesMetropolitanasPorRegiao(regiao) {
        this.init(this._configLocalidades);
        const response = await this.get(`/regioes/${regiao}/regioes-metropolitanas`);
        return response.data;
    }
    async subdistritos(codigo) {
        this.init(this._configLocalidades);
        const response = await this.get("/subdistritos".concat(codigo ? `/${codigo}` : ""));
        return response.data;
    }
    async subdistritosPorUf(uf) {
        this.init(this._configLocalidades);
        const response = await this.get(`/estados/${uf}/subdistritos`);
        return response.data;
    }
    async subdistritosPorDistrito(distrito) {
        this.init(this._configLocalidades);
        const response = await this.get(`/distritos/${distrito}/subdistritos`);
        return response.data;
    }
    async subdistritosMunicipio(municipio) {
        this.init(this._configLocalidades);
        const response = await this.get(`/municipios/${municipio}/subdistritos`);
        return response.data;
    }
    async subdistritosPorMicrorregiao(microrregiao) {
        this.init(this._configLocalidades);
        const response = await this.get(`/microrregioes/${microrregiao}/subdistritos`);
        return response.data;
    }
    async subdistritosPorMesorregiao(mesorregiao) {
        this.init(this._configLocalidades);
        const response = await this.get(`/mesorregioes/${mesorregiao}/subdistritos`);
        return response.data;
    }
    async subdistritosPorRegiaoImediata(regiaoImediata) {
        this.init(this._configLocalidades);
        const response = await this.get(`/regioes-imediatas/${regiaoImediata}/subdistritos`);
        return response.data;
    }
    async subdistritosPorRegiao(regiao) {
        this.init(this._configLocalidades);
        const response = await this.get(`/regioes/${regiao}/subdistritos`);
        return response.data;
    }
    async uf(codigo) {
        this.init(this._configLocalidades);
        const response = await this.get("/estados".concat(codigo ? `/${codigo}` : ""));
        return response.data;
    }
    async ufPorRegiao(regiao) {
        this.init(this._configLocalidades);
        const response = await this.get(`/regioes/${regiao}/estados`);
        return response.data;
    }
}
