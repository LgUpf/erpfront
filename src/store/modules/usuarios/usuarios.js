import AuthService from "@/services/auth.service"

const state = {
    usuarios: {
        user: {
            name: '',
            email: '',
        },
        logado: false
    }
}
const mutations = {
    SET_USUARIO(state, usuario) {
        state.usuarios = usuario
        state.logado = true
    }
}
const actions = {
    login({ state }, params) {
        console.log(params);
        state.logado
        return AuthService.login(params)
    }
}

export default {
    state,
    mutations,
    actions
}
