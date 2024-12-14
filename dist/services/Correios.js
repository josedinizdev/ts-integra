import { ApiRequest } from "../base/ApiRequest.js";
export class Correios extends ApiRequest {
    _configCep = {
        baseURL: "https://buscacepinter.correios.com.br/app/cep/carrega-cep.php",
    };
    _configCepAlt = {
        baseURL: "https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente"
    };
    async cep(cep) {
        this.init(this._configCep);
        const response = await this.post("", `cep=${cep}`, {
            headers: {
                "content-type": "application/x-www-form-urlencoded"
            }
        });
        return response.data;
    }
    async cepAlt(cep) {
        this.init(this._configCepAlt);
        const response = await this.post("", this.gerarXMlCepAlt(cep), {
            headers: {
                "Content-Type": "text/xml"
            }
        });
        return response.data;
    }
    gerarXMlCepAlt(cep) {
        return `<?xml version="1.0"?>\n<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:cli="http://cliente.bean.master.sigep.bsb.correios.com.br/">\n  <soapenv:Header />\n  <soapenv:Body>\n    <cli:consultaCEP>\n      <cep>${cep}</cep>\n    </cli:consultaCEP>\n  </soapenv:Body>\n</soapenv:Envelope>`;
    }
}
