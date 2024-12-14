import { ApiRequest, Config } from "../base/ApiRequest.js";

export class Correios extends ApiRequest {
    
    private readonly _configCep: Config = {
        baseURL: "https://buscacepinter.correios.com.br/app/cep/carrega-cep.php",
    };

    private readonly _configCepAlt: Config = {
        baseURL: "https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente"
    }

    public async cep(cep: string): Promise<any> {
        this.init(this._configCep);

        const response: any = await this.post("", `cep=${cep}`, {
            headers: {
                "content-type": "application/x-www-form-urlencoded"
            }
        });

        return response.data;
    }

    public async cepAlt(cep: string): Promise<any> {
        this.init(this._configCepAlt);

        const response: any = await this.post("", this.gerarXMlCepAlt(cep), {
            headers: {
                "Content-Type": "text/xml"
            }
        });

        return response.data;
    }

    private gerarXMlCepAlt(cep: string): string {
        return `<?xml version="1.0"?>\n<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:cli="http://cliente.bean.master.sigep.bsb.correios.com.br/">\n  <soapenv:Header />\n  <soapenv:Body>\n    <cli:consultaCEP>\n      <cep>${cep}</cep>\n    </cli:consultaCEP>\n  </soapenv:Body>\n</soapenv:Envelope>`
    }
}