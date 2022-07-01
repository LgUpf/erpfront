import { createStore } from 'vuex'

import clientes from './modules/clientes/clientes'

const store = createStore({
    modules: {
        clientes
    }
})

export default store
