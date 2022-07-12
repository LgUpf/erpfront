import { createStore } from 'vuex'

import clientes from './modules/clientes/clientes'
import cargos from './modules/cargos/cargos'
import perfils from './modules/perfils/perfils'
import categorias from './modules/categorias/categorias'
import permissoes from './modules/permissoes/permissoes'
import empresas from './modules/empresas/empresas'
import usuarios from './modules/usuarios/usuarios'


const store = createStore({
    modules: {
        clientes,
        cargos,
        perfils,
        categorias,
        permissoes,
        empresas,
        usuarios,
    }
})

export default store
