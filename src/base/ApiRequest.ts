import axios, {
    AxiosInstance,
    AxiosBasicCredentials,
    AxiosProxyConfig,
    ResponseType,
    CancelToken
} from "axios";

export abstract class ApiRequest {
    private invoker: AxiosInstance = axios.create();
    
    public init(config: Config) {
        this.invoker = axios.create(config);
    }

    public async get(path?: string, options?: any) {
        const response = await this.invoker.get(path ?? "", options);
        return response;
    }

    public async post<T = any>(path?: string, data?: T, options?: any) {
        const response = await this.invoker.post(path ?? "", data, options);
        return response;
    }

    public async put<T = any>(path?: string, data?: T, options?: any) {
        const response = await this.invoker.put(path ?? "", data, options);
        return response;
    }

    public async delete(path?: string, options?: any) {
        const response = await this.invoker.delete(path ?? "", options);
        return response;
    }

    public async head(path?: string, options?: any) {
        const response = await this.invoker.head(path ?? "", options);
        return response;
    }

    public async options(path?: string, options?: any) {
        const response = await this.invoker.options(path ?? "", options);
        return response;
    }

    public async patch<T = any>(path?: string, data?: T, options?: any) {
        const response = await this.invoker.patch(path ?? "", data, options);
        return response.data;
    }
}

export type Config = {
    baseURL: string,
    url?: string,
    headers?: object,
    params?: object,
    data?: object,
    auth?: AxiosBasicCredentials,
    withCredentials?: boolean,
    transformRequest?: any,
    transformResponse?: any,
    paramsSerializer?: any,
    timeout?: number,
    adapter?: any,
    responseType?: ResponseType,
    responseEncoding?: string,
    xsrfCookieName?: string,
    xsrfHeaderName?: string,
    onUploadProgress?: any,
    onDownloadProgress?: any,
    maxContentLength?: number,
    maxBodyLength?: number,
    validateStatus?: any,
    maxRedirects?: number,
    socketPath?: any,
    httpAgent?: any,
    httpsAgent?: any,
    proxy?: AxiosProxyConfig,
    cancelToken?: CancelToken,
    decompress?: boolean
}