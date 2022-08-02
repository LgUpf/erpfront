import { TOKEN_NAME, URI_BASE_API } from "@/config";
import axios from "axios";

export default class Http {

    constructor(status) {
        const token = localStorage.getItem(TOKEN_NAME)

        const headers = status.auth ? {
            Authorization: `Bearer ${token}`
        } : {}

        this.instance = axios.create({
            baseURL: URI_BASE_API,
            headers: headers
        })

        return this.instance
    }
}