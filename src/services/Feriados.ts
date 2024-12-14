import { DateFormat } from "ts-devutils/object";

/* 
 * Fonte: https://en.wikipedia.org/wiki/Computus
*/ 

interface MesDia {
    mes: number,
    dia: number
}

interface MesDiaFeriado extends MesDia {
    nome: string
}

interface Feriado {
    data: string,
    nome: string,
    tipo: string
}

export class Feriados {

    private readonly _luaCheia: MesDia[] = [
        { mes: 3, dia: 14 },
        { mes: 3, dia: 3 },
        { mes: 2, dia: 23 },
        { mes: 3, dia: 11 },
        { mes: 2, dia: 31 },
        { mes: 3, dia: 18 },
        { mes: 3, dia: 8 },
        { mes: 2, dia: 28 },
        { mes: 3, dia: 16 },
        { mes: 3, dia: 5 },
        { mes: 2, dia: 25 },
        { mes: 3, dia: 13 },
        { mes: 3, dia: 2 },
        { mes: 2, dia: 22 },
        { mes: 3, dia: 10 },
        { mes: 2, dia: 30 },
        { mes: 3, dia: 17 },
        { mes: 3, dia: 7 },
        { mes: 2, dia: 27 }
    ];

    private readonly _feriadosFixos: MesDiaFeriado[] = [
        { mes: 1, dia: 1, nome: 'Confraternização Mundial' },
        { mes: 4, dia: 21, nome: 'Tiradentes' },
        { mes: 5, dia: 1, nome: 'Dia do trabalho' },
        { mes: 9, dia: 7, nome: 'Independência do Brasil' },
        { mes: 10, dia: 12, nome: 'Nossa Senhora Aparecida' },
        { mes: 11, dia: 2, nome: 'Finados' },
        { mes: 11, dia: 15, nome: 'Proclamação da República' },
        { mes: 12, dia: 25, nome: 'Natal' },
    ];

    public consultar(ano: number) {
        return [
            this.pascoa(ano),
            this.sextaFeiraSanta(ano),
            this.carnaval(ano),
            this.corpusChristi(ano),
            ...this.feriadosFixos(ano)
        ].sort((a, b) => {
            if (a.data > b.data) return 1;
            if (a.data < b.data)  return -1;
            return 0;
        });
    }

    private pascoa(ano: number): Feriado {
        const data = this.obterReferencia(ano);
        data.setDate(data.getDate() + 7 - data.getDay());
        return {
            data: new DateFormat(data).dateString(),
            nome: "Páscoa",
            tipo: "Nacional"
        }
    }

    private sextaFeiraSanta(ano: number): Feriado {
        const data = this.obterReferencia(ano);
        data.setDate(data.getDate() + 5 - data.getDay());
        return {
            data: new DateFormat(data).dateString(),
            nome: "Sexta-feira Santa",
            tipo: "Nacional"
        }
    }

    private carnaval(ano: number): Feriado {
        const data = this.obterReferencia(ano);
        data.setDate(data.getDate() - 40 - data.getDay());
        return {
            data: new DateFormat(data).dateString(),
            nome: "Carnaval",
            tipo: "Nacional"
        }
    }

    private corpusChristi(ano: number): Feriado {
        const data = this.obterReferencia(ano);
        data.setDate(data.getDate() + 67 - data.getDay());
        return {
            data: new DateFormat(data).dateString(),
            nome: "Corpus Christi",
            tipo: "Nacional"
        }
    }

    private obterReferencia(ano: number) {
        const { mes, dia } = this._luaCheia[ano % 19];
        return new Date(ano, mes, dia);
    }

    private feriadosFixos(ano: number): Feriado[] {
        return this._feriadosFixos.map((f) => ({
            data: new DateFormat(new Date(ano, f.mes, f.dia)).dateString(),
            nome: f.nome,
            tipo: 'Nacional',
        }));
    }
}