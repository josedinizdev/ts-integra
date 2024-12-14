interface Feriado {
    data: string;
    nome: string;
    tipo: string;
}
export declare class Feriados {
    private readonly _luaCheia;
    private readonly _feriadosFixos;
    consultar(ano: number): Feriado[];
    private pascoa;
    private sextaFeiraSanta;
    private carnaval;
    private corpusChristi;
    private obterReferencia;
    private feriadosFixos;
}
export {};
