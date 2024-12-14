import { ApiRequest } from "../base/ApiRequest.js";
export type TrandingViewFormData = {
    filter?: [
        {
            left?: string;
            operation?: string;
            right?: string;
        }?
    ];
    options?: {
        lang?: "pt";
        active_symbols_only?: boolean;
    };
    symbols?: {
        tickers?: string[];
        query?: object;
    };
    columns?: string[];
    sort?: {
        sortBy?: string;
        sortOrder?: string;
    };
    range?: [number, number];
};
export interface IAcoesDisponiveis {
    pesquisa?: string;
    ordernarPor?: "name" | "close" | "change" | "change_abs" | "volume" | "market_cap_basic" | "setor";
    ordernarEm?: "desc" | "asc";
    limite?: number;
}
export type IntervaloHist_Acao = "1m" | "2m" | "5m" | "15m" | "30m" | "60m" | "90m" | "1h" | "1d" | "5d" | "1wk" | "1mo" | "3mo";
export type RangeHist_Acao = "1d" | "5d" | "1mo" | "3mo" | "6mo" | "1y" | "2y" | "5y" | "10y" | "ytd" | "max";
export interface IAcao {
    range?: RangeHist_Acao;
    intervalo?: IntervaloHist_Acao;
    dadosFundamentais?: boolean;
    dividendos?: boolean;
}
export declare class MercadoFinanceiro extends ApiRequest {
    private readonly _configBcb;
    private readonly _configCetip;
    private readonly _configTrandingView;
    private readonly _configYahooFinance;
    private readonly _configSistemasListadosB3;
    selic(): Promise<any>;
    ipca(): Promise<any>;
    cdi(): Promise<any>;
    acoesDisponiveis(filtros: IAcoesDisponiveis): Promise<any>;
    acao(filtro: IAcao, ...acoes: string[]): Promise<void>;
    private infoAcao;
    private dadosFundamentaisAcao;
    private dividendosAcoes;
    private historicoAcao;
    private gerarFiltro;
    private acoesDisponiveis_ParseResult;
    private infoAcao_ParseResult;
    private historicoAcao_ParseResult;
    private dadosFundamentaisAcao_ParseResult;
    private dividendosAcoes_ParseResult;
    private dividendo_ParseResult;
    private criarJwtServicosListadosB3;
}
