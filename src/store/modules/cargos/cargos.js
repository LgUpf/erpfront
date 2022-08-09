import axios from "axios"
import{API_VERSION, TOKEN_NAME} from "@/config"

const state = {
    cargos: []
}
const mutations = {
    ADD_CARGOS(state,cargo){
      state.cargos=cargo
    }
}
const actions = {
    getCargos({commit}){
        const token=localStorage.getItem(TOKEN_NAME)
        return axios.get(`${API_VERSION}/cargos`, {
            headers:{
            'Authorization': `Bearer ${token}`
            }
        })
        .then(response=>{
            console.log(response.data)
            commit('ADD_CARGOS', response.data)
        })
    },
       saveCargos({commit},parameters){
        const token=localStorage.getItem(TOKEN_NAME)
        return axios.post(`${API_VERSION}/cargos`,parameters, {
            headers:{
            'Authorization': `Bearer ${token}`
            }
        },  )
        .then(response=>{
            console.log(response.data)
            commit('ADD_CARGOS', response.data)
        })
    }
}

export default {
    state,
    mutations,
    actions
}
