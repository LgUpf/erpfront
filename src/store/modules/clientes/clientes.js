import axios from "axios"
import{API_VERSION, TOKEN_NAME} from "@/config"

const state = {
    clientes: []
}
const mutations = {
    ADD_CLIENTES(state,cliente){
      state.clientes=cliente
    }
}
const actions = {
    getClientes({commit}){
        const token=localStorage.getItem(TOKEN_NAME)
        return axios.get(`${API_VERSION}/cargos`, {
            headers:{
            'Authorization': `Bearer ${token}`
            }
        })
        .then(response=>{
            console.log(response.data)
            commit('ADD_CLIENTES', response.data)
        })
    },
       saveClientes({commit},parameters){
        const token=localStorage.getItem(TOKEN_NAME)
        return axios.post(`${API_VERSION}/clientes`,parameters, {
            headers:{
            'Authorization': `Bearer ${token}`
            }
        },  )
        .then(response=>{
            console.log(response.data)
            commit('ADD_CLIENTES', response.data)
        })
    }
}

export default {
    state,
    mutations,
    actions
}
