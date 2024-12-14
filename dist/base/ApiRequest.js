import axios from "axios";
export class ApiRequest {
    invoker = axios.create();
    init(config) {
        this.invoker = axios.create(config);
    }
    async get(path, options) {
        const response = await this.invoker.get(path ?? "", options);
        return response;
    }
    async post(path, data, options) {
        const response = await this.invoker.post(path ?? "", data, options);
        return response;
    }
    async put(path, data, options) {
        const response = await this.invoker.put(path ?? "", data, options);
        return response;
    }
    async delete(path, options) {
        const response = await this.invoker.delete(path ?? "", options);
        return response;
    }
    async head(path, options) {
        const response = await this.invoker.head(path ?? "", options);
        return response;
    }
    async options(path, options) {
        const response = await this.invoker.options(path ?? "", options);
        return response;
    }
    async patch(path, data, options) {
        const response = await this.invoker.patch(path ?? "", data, options);
        return response.data;
    }
}
