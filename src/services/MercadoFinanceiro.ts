import { Nullable } from "ts-devutils/types";
import { ApiRequest, Config } from "../base/ApiRequest.js";

export type TrandingViewFormData = {
    filter?: [
        {
            left?: string,
            operation?: string,
            right?: string
        }?
    ]
    options?: {
        lang?: "pt",
        active_symbols_only?: boolean
    },
    symbols?: {
        tickers?: string[],
        query?: object
    },
    columns?: string[],
    sort?: {
        sortBy?: string,
        sortOrder?: string
    }
    range?: [number, number]
}

export interface IAcoesDisponiveis {
    pesquisa?: string,
    ordernarPor?: "name" | "close" | "change" | "change_abs" | "volume" | "market_cap_basic" | "setor",
    ordernarEm?: "desc" | "asc",
    limite?: number
}

export type IntervaloHist_Acao = "1m" | "2m" | "5m" | "15m" | "30m" | "60m" | "90m" | "1h" | "1d" | "5d" | "1wk" | "1mo" | "3mo";

export type RangeHist_Acao = "1d" | "5d" | "1mo" | "3mo" | "6mo" | "1y" | "2y" | "5y" | "10y" | "ytd" | "max";

export interface IAcao {
    range?: RangeHist_Acao,
    intervalo?: IntervaloHist_Acao,
    dadosFundamentais?: boolean,
    dividendos?: boolean
}

const indicadoresDisponiveis = [
    {
        stock: "IFIX.SA",
        name: "IND FDO IMOB",
    },
    {
        stock: "^TWII",
        name: "TSEC weighted index",
    },
    {
        stock: "^JN0U.JO",
        name: "Top 40 USD Net TRI Index",
    },
    {
        stock: "^TA125.TA",
        name: "TA-125",
    },
    {
        stock: "^STI",
        name: "STI Index",
    },
    {
        stock: "^GSPTSE",
        name: "S&P/TSX Composite index",
    },
    {
        stock: "^NZ50",
        name: "S&P/NZX 50 INDEX GROSS ( GROSS",
    },
    {
        stock: "^IPSA",
        name: "S&P/CLX IPSA",
    },
    {
        stock: "^AXJO",
        name: "S&P/ASX 200",
    },
    {
        stock: "^BSESN",
        name: "S&P BSE SENSEX",
    },
    {
        stock: "^GSPC",
        name: "S&P 500",
    },
    {
        stock: "^RUT",
        name: "Russell 2000",
    },
    {
        stock: "^NYA",
        name: "NYSE COMPOSITE (DJ)",
    },
    {
        stock: "^XAX",
        name: "NYSE AMEX COMPOSITE INDEX",
    },
    {
        stock: "^N225",
        name: "Nikkei 225",
    },
    {
        stock: "^IXIC",
        name: "NASDAQ Composite",
    },
    {
        stock: "^MERV",
        name: "MERVAL",
    },
    {
        stock: "^KS11",
        name: "KOSPI Composite Index",
    },
    {
        stock: "^MXX",
        name: "IPC MEXICO",
    },
    {
        stock: "^JKSE",
        name: "IDX COMPOSITE",
    },
    {
        stock: "^BVSP",
        name: "IBOVESPA",
    },
    {
        stock: "^HSI",
        name: "HANG SENG INDEX",
    },
    {
        stock: "^KLSE",
        name: "FTSE Bursa Malaysia KLCI",
    },
    {
        stock: "^FTSE",
        name: "FTSE 100",
    },
    {
        stock: "^N100",
        name: "Euronext 100 Index",
    },
    {
        stock: "^STOXX50E",
        name: "ESTX 50 PR.EUR",
    },
    {
        stock: "^CASE30",
        name: "EGX 30 Price Return Index",
    },
    {
        stock: "^DJI",
        name: "Dow Jones Industrial Average",
    },
    {
        stock: "^GDAXI",
        name: "DAX PERFORMANCE-INDEX",
    },
    {
        stock: "^VIX",
        name: "CBOE Volatility Index",
    },
    {
        stock: "^BUK100P",
        name: "Cboe UK 100",
    },
    {
        stock: "^FCHI",
        name: "CAC 40",
    },
    {
        stock: "^BFX",
        name: "BEL 20",
    },
    {
        stock: "^AORD",
        name: "ALL ORDINARIES",
    },
];

export class MercadoFinanceiro extends ApiRequest {

    private readonly _configBcb: Config = {
        baseURL: "https://www.bcb.gov.br/api/servico/",
    };

    private readonly _configCetip: Config = {
        baseURL: "https://www2.cetip.com.br/",
    };

    private readonly _configTrandingView: Config = {
        baseURL: "https://scanner.tradingview.com/",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": "scanner.tradingview.com"
        }
    }

    private readonly _configYahooFinance: Config = {
        baseURL: "https://query1.finance.yahoo.com/"
    }

    private readonly _configSistemasListadosB3: Config = {
        baseURL: "https://sistemaswebb3-listados.b3.com.br/"
    }

    public async selic(): Promise<any> {
        this.init(this._configBcb);
        const response: any = await this.get("sitebcb/historicotaxasjuros");

        return response.data;
    }

    public async ipca(): Promise<any> {
        this.init(this._configBcb);
        const response: any = await this.get("sitebcb/indicadorinflacao");
        return response.data;
    }

    public async cdi(): Promise<any> {
        this.init(this._configCetip);
        const response: any = await this.get("ConsultarTaxaDi/ConsultarTaxaDICetip.aspx");
        return response.data;
    }

    public async acoesDisponiveis(filtros: IAcoesDisponiveis): Promise<any> {
        this.init(this._configTrandingView);

        let formData: TrandingViewFormData = { filter: [] };

        if (filtros.pesquisa)
            formData.filter?.push({ left: "name", operation: "match", right: filtros.pesquisa });
        if (filtros.ordernarPor)
            formData.filter?.push({ left: "volume", operation: "nempty", right: filtros.ordernarPor });
        if (filtros.limite)
            formData.range = [0, filtros.limite];

        formData = this.gerarFiltro(formData);

        const response: any = await this.post("brazil/scan", formData);
        return this.acoesDisponiveis_ParseResult(response.data, filtros.pesquisa);
    }

    public async acao(filtro: IAcao, ...acoes: string[]) {
        const resposta: { [key: string]: any } = {};
        for (let acao in acoes) {
            const isAcaoBrasileira = /\d/.test(acao);
            const filtroAcao = isAcaoBrasileira ? `${acao}.SA` : acao;
            const rq = [];

            rq.push(this.infoAcao(filtroAcao));

            if (filtro.dadosFundamentais) rq.push(this.dadosFundamentaisAcao(acao));
            else rq.push(Promise.resolve())

            if (filtro.dividendos) rq.push(this.dividendosAcoes(acao));
            else rq.push(Promise.resolve())

            if (filtro.intervalo && filtro.dividendos) rq.push(this.historicoAcao(filtroAcao, filtro.intervalo, filtro.range));
            else rq.push(Promise.resolve())

            const [
                dadosAcao,
                dadosFundamentais,
                dividendos,
                historicoAcao,
            ] = (await Promise.all(rq));

            const result: any = {
                symbol: acao.toString().toUpperCase(),
                ...dadosAcao,
                ...((filtro.intervalo && filtro.dividendos) && { ...historicoAcao }),
                ...(filtro.dadosFundamentais && { ...dadosFundamentais }),
                ...(filtro.dividendos && { dividendos }),
            };

            result.regularMarketTime = new Date(result.regularMarketTime * 1000).toISOString();
            
            if (Object.keys(result).length > 0)
                resposta[acao] = result;
        }

    }

    private async infoAcao(acao: string): Promise<any> {
        this.init(this._configYahooFinance);
        const response: any = await this.get(`v7/finance/options/${acao}`);
        return this.infoAcao_ParseResult(response?.data);
    }

    private async dadosFundamentaisAcao(acao: string): Promise<any> {
        this.init(this._configTrandingView);

        let formData: TrandingViewFormData = {
            symbols: {
                tickers: [`BMFBOVESPA:${acao.toUpperCase()}`],
                query: {
                    types: [],
                },
            },
            columns: ['price_earnings_ttm', 'earnings_per_share_basic_ttm', 'logoid']
        };
        formData = this.gerarFiltro(formData);

        const response: any = await this.post("brazil/scan", formData);
        return this.dadosFundamentaisAcao_ParseResult(response?.data);
    }

    private async dividendosAcoes(acao: string): Promise<any> {
        this.init(this._configSistemasListadosB3);
        const response: any = await this.get(`fundsProxy/fundsCall/GetListedSupplementFunds/${this.criarJwtServicosListadosB3(acao)}`);
        return this.dividendosAcoes_ParseResult(response.data, acao);
    }

    private async historicoAcao(acao: string, intervalo?: IntervaloHist_Acao, range?: RangeHist_Acao): Promise<any> {
        this.init(this._configYahooFinance);
        const response: any = await this.get(`v8/finance/chart/${acao}${intervalo && range
            ? `?includePrePost=false&interval=${intervalo}&useYfid=true&range=${range}`
            : '?includePrePost=false&interval=1d&useYfid=true&range=1mo'
            }`
        );
        return this.historicoAcao_ParseResult(response?.data);
    }

    private gerarFiltro(formData: TrandingViewFormData): TrandingViewFormData {
        return {
            filter: (formData.filter ?? []),
            options: (formData.options ?? {
                lang: "pt",
                active_symbols_only: true,
            }),
            symbols: (formData.symbols ?? {}),
            columns: (formData.columns ?? []),
            sort: (formData.sort ?? {
                sortBy: "volume",
                sortOrder: "desc",
            }),
        };
    }

    private acoesDisponiveis_ParseResult(data: any, pesquisa: string = ""): object {
        const acoes = data.data.map((stock: any) => {
            const ativo = stock.s.replace("BMFBOVESPA:", "");
            return ativo;
        });

        const acoesSet = [...new Set(acoes)];

        const indicadores = Object
            .values(indicadoresDisponiveis)
            .map((index: any) => index.stock)
            .sort((a, b) => a.localeCompare(b))
            .filter((index) => index.toLowerCase().includes(pesquisa));

        return {
            indicadores,
            acoes: acoesSet,
        }
    }

    private infoAcao_ParseResult(data: any): object {
        return data?.optionChain?.result?.[0]?.quote;
    }

    private historicoAcao_ParseResult(data: any): object[] {
        const result = data.chart.result?.[0];

        const { timestamp, indicators } = result || {};
        const { quote, adjclose } = indicators || {};
        const { low, high, open, close, volume } = quote[0];

        const { adjclose: adjustedClose } = adjclose?.[0] || {};

        const prices = timestamp?.map((date: any, index: number) => ({
            date,
            open: open?.[index] ?? null,
            high: high?.[index] ?? null,
            low: low?.[index] ?? null,
            close: close?.[index] ?? null,
            volume: volume?.[index] ?? null,
            adjustedClose: adjustedClose?.[index] ?? null,
        }));

        return prices ?? [];
    }

    private dadosFundamentaisAcao_ParseResult(data: any) {
        const [priceEarnings, earningsPerShare, logoSlug] = data.data?.[0]?.d;

        return {
            priceEarnings,
            earningsPerShare,
            logoSlug,
        };
    }

    private dividendosAcoes_ParseResult(data: any, acao: string) {
        const { cashDividends, stockDividends, subscriptions } = data || {};

        return {
            cashDividends: cashDividends?.map((d: any) => this.dividendo_ParseResult(d, acao)),
            stockDividends: stockDividends?.map((d: any) => this.dividendo_ParseResult(d, acao)),
            subscriptions: subscriptions?.map((d: any) => this.dividendo_ParseResult(d, acao)),
        }
    }

    private dividendo_ParseResult(data: any, acao: string) {
        if (!data) return null;

        const dividend: any = (() => {
            const slugEndingRegex = /^(?=.*[34]$)(?!.*34$).*$/;
            const match = acao.match(slugEndingRegex);

            if (!match) {
                return data;
            }

            const expectedDividendType = acao[acao.length - 1] as '3' | '4';

            const isinRegex = /(OR|PR)(\d+)$/;

            const isinMatch = data?.isinCode?.match(isinRegex);

            if (!isinMatch) {
                return data;
            }

            const dividendType = isinMatch[1];

            const isinToTypeMap = {
                '3': 'OR',
                '4': 'PR',
            };

            return isinToTypeMap[expectedDividendType] === dividendType ? data : null;
        })();

        if (!dividend) return null;

        const parseMoney = (v: Nullable<string>): Nullable<number> => v ? parseFloat(dividend?.priceUnit.replace(',', '.')) : undefined
        const parseDate = (v: Nullable<string>): Nullable<Date> => {
            if (!v) return null;
            let [d, m, y] = v.split(/\D/);
            return new Date([y, m, d].join('-'));
        };

        const paymentDate = parseDate(dividend?.paymentDate);
        const approvedOn = parseDate(dividend?.approvedOn);
        const lastDatePrior = parseDate(dividend?.lastDatePrior);
        const rate = parseMoney(dividend?.rate);
        const factor = parseMoney(dividend?.factor);
        const percentage = parseMoney(dividend?.percentage);
        const priceUnit = parseMoney(dividend?.priceUnit);
        const subscriptionDate = parseDate(dividend?.subscriptionDate);

        return {
            ...dividend,
            paymentDate,
            approvedOn,
            lastDatePrior,
            rate,
            factor,
            percentage,
            priceUnit,
            subscriptionDate,
        };
    }

    private criarJwtServicosListadosB3(id: string): string {
        return Buffer.from(JSON.stringify({ id })).toString('base64');
    }
}