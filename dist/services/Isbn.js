import { ApiRequest } from "../base/ApiRequest.js";
export class Isbn extends ApiRequest {
    ISBN_PATTERN = /^978[68]5\d{8}$|^[68]5\d{7}[0-9xX]{1}$/;
    API_BASE64_KEY = 'MTAwMjE2QTIzQzVBRUUzOTAzMzhCQkQxOUVBODZEMjk=';
    API_KEY = Buffer.from(this.API_BASE64_KEY, 'base64').toString('utf-8');
    _configEncontrar = {
        baseURL: "https://isbn-search-br.search.windows.net/indexes/isbn-index/docs/search",
    };
    async encontrar(isbn) {
        this.init(this._configEncontrar);
        const isbn13 = isbn.length === 10 ? this.isbn10ToIsbn13(isbn) : isbn;
        const isbn10 = isbn.length === 13 ? this.isbn13ToIsbn10(isbn) : isbn;
        const body = {
            count: true,
            facets: ['Imprint,count:50', 'Authors,count:50'],
            filter: '',
            orderby: null,
            queryType: 'full',
            search: `${isbn13} OR ${isbn10}`,
            searchFields: 'FormattedKey,RowKey',
            searchMode: 'any',
            select: '*',
            skip: 0,
            top: 12,
        };
        const params = {
            "api-version": "2016-09-01"
        };
        const headers = {
            Accept: 'application/json',
            'Api-Key': this.API_KEY,
        };
        const response = await this.post("", body, {
            params,
            headers
        });
        if (!response.data.value)
            return null;
        return response.data.value;
    }
    isValidIsbn(isbn) {
        const isbnDigits = isbn.toUpperCase();
        if (isbnDigits.length !== 10 && isbnDigits.length !== 13) {
            return false;
        }
        if (!isbnDigits.match(this.ISBN_PATTERN)) {
            return false;
        }
        if (isbnDigits.length === 10) {
            const checkSum = isbnDigits.split('')
                .map((d, i) => (10 - i) * (d === 'X' ? 10 : parseInt(d, 10)))
                .reduce((sum, parcel) => sum + parcel, 0);
            return checkSum % 11 === 0;
        }
        const checkSum = isbnDigits.split('')
            .map((d, i) => ((i + 1) % 2 === 0 ? 3 : 1) * parseInt(d, 10))
            .reduce((sum, parcel) => sum + parcel, 0);
        return checkSum % 10 === 0;
    }
    isbn13ToIsbn10(isbn13) {
        if (!this.isValidIsbn(isbn13)) {
            return null;
        }
        if (isbn13.length === 10) {
            return isbn13;
        }
        const equalPart = isbn13.slice(3, -1);
        const checkSum = equalPart.split('')
            .map((d, i) => parseInt(d, 10) * (i + 1))
            .reduce((sum, parcel) => sum + parcel, 0);
        const lastDigit = checkSum % 11;
        return equalPart + (lastDigit === 10 ? 'X' : lastDigit);
    }
    isbn10ToIsbn13(isbn10) {
        if (!this.isValidIsbn(isbn10)) {
            return null;
        }
        if (isbn10.length === 13) {
            return isbn10;
        }
        const newIsbn = `978${isbn10.slice(0, -1)}`;
        const checkSum = newIsbn.split('')
            .map((d, i) => ((i + 1) % 2 === 0 ? 3 : 1) * parseInt(d, 10))
            .reduce((sum, parcel) => sum + parcel, 0);
        const lastDigit = checkSum % 10;
        return newIsbn + (lastDigit !== 0 ? 10 - lastDigit : 0);
    }
}
