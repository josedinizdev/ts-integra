import { ApiRequest } from "../base/ApiRequest.js";
export declare class BancoCentral extends ApiRequest {
    private readonly _configParticipantesPix;
    private readonly _configBancos;
    participantesPix(data?: Date): Promise<any>;
    bancos(): Promise<any>;
}
