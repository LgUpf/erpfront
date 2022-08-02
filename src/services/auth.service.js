import { TOKEN_NAME } from "@/config"
import BaseService from "./BaseService"

export default class AuthService extends BaseService {

    static async login(params) {
        return new Promise((resolve, reject) => {
            this.request()
                .post('/auth/token', params)
                .then(response => {
                    localStorage.setItem(TOKEN_NAME, response.data.token)
                    resolve(response)
                })
                .catch(error => reject(error.response))
        })
    }

}