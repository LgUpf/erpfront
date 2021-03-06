import { createRouter, createWebHashHistory } from "vue-router";

import DashboardLayout from "../views/dashboard/layout/DashboardLayout.vue";
import AuthLayout from "../views/dashboard/pages/AuthLayout.vue";

// Page Headers
import DashboardHeader from "../views/dashboard/dashboard/DashboardHeader.vue";
import DefaultHeader from "../views/dashboard/headers/DefaultHeader";
import SweetAlertHeader from "../views/dashboard/headers/SweetAlertHeader";
import VectorMapsHeader from "../views/dashboard/headers/VectorMapsHeader";
import CalendarHeader from "../views/dashboard/headers/CalendarHeader";

// GeneralViews
import NotFound from "../views/generalViews/NotFoundPage.vue";

// Dashboard pages
import Dashboard from "../views/dashboard/dashboard/Vnud-Dashboard.vue";
import Widgets from "../views/dashboard/dashboard/Vnud-Widgets.vue";
import Charts from "../views/dashboard/dashboard/Vnud-Charts.vue";
import Calendar from "../views/dashboard/dashboard/Vnud-Calendar.vue";

// Pages
import Timeline from "../views/dashboard/pages/Vnud-Timeline.vue";
import UserProfile from "../views/dashboard/pages/UserProfile.vue";

let pagesMenu = {
  path: "/pages",
  component: DashboardLayout,
  name: "Pages",
  redirect: "/pages/user",
  children: [
    {
      path: "user",
      name: "User Page",
      components: { default: UserProfile, header: DefaultHeader },
    },
    {
      path: "timeline",
      name: "Timeline Page",
      components: { default: Timeline, header: DefaultHeader },
    },
  ],
};

// Components pages
import Buttons from "../views/dashboard/components/Vnud-Buttons.vue";
import GridSystem from "../views/dashboard/components/GridSystem.vue";
import Panels from "../views/dashboard/components/Vnud-Panels.vue";
import SweetAlert from "../views/dashboard/components/SweetAlert.vue";
import Notifications from "../views/dashboard/components/Vnud-Notifications.vue";
import Icons from "../views/dashboard/components/Vnud-Icons.vue";
import Typography from "../views/dashboard/components/Vnud-Typography.vue";

let componentsMenu = {
  path: "/components",
  component: DashboardLayout,
  redirect: "/components/buttons",
  name: "Components",
  children: [
    {
      path: "buttons",
      name: "Buttons",
      components: { default: Buttons, header: DefaultHeader },
    },
    {
      path: "grid-system",
      name: "Grid System",
      components: { default: GridSystem, header: DefaultHeader },
    },
    {
      path: "panels",
      name: "Panels",
      components: { default: Panels, header: DefaultHeader },
    },
    {
      path: "sweet-alert",
      name: "Sweet Alert",
      components: { default: SweetAlert, header: SweetAlertHeader },
    },
    {
      path: "notifications",
      name: "Notifications",
      components: { default: Notifications, header: DefaultHeader },
    },
    {
      path: "icons",
      name: "Icons",
      components: { default: Icons, header: DefaultHeader },
    },
    {
      path: "typography",
      name: "Typography",
      components: { default: Typography, header: DefaultHeader },
    },
  ],
};

// Form Pages
import RegularForms from "../views/dashboard/forms/RegularForms.vue";
import ExtendedForms from "../views/dashboard/forms/ExtendedForms.vue";
import ValidationForms from "../views/dashboard/forms/ValidationForms.vue";
import Wizard from "../views/dashboard/forms/Vnud-Wizard.vue";

let formsMenu = {
  path: "/forms",
  component: DashboardLayout,
  redirect: "/forms/regular",
  name: "Forms",
  children: [
    {
      path: "regular",
      name: "Regular Forms",
      components: { default: RegularForms, header: DefaultHeader },
    },
    {
      path: "extended",
      name: "Extended Forms",
      components: { default: ExtendedForms, header: DefaultHeader },
    },
    {
      path: "validation",
      name: "Validation Forms",
      components: { default: ValidationForms, header: DefaultHeader },
    },
    {
      path: "wizard",
      name: "Wizard",
      components: { default: Wizard, header: DefaultHeader },
    },
  ],
};

// Tables Pages
import RegularTables from "../views/dashboard/tables/RegularTables.vue";
import ExtendedTables from "../views/dashboard/tables/ExtendedTables.vue";
import PaginatedTables from "../views/dashboard/tables/PaginatedTables.vue";

let tablesMenu = {
  path: "/table-list",
  component: DashboardLayout,
  redirect: "/table-list/regular",
  name: "Tables",
  children: [
    {
      path: "regular",
      name: "Regular Tables",
      components: { default: RegularTables, header: DefaultHeader },
    },
    {
      path: "extended",
      name: "Extended Tables",
      components: { default: ExtendedTables, header: DefaultHeader },
    },
    {
      path: "paginated",
      name: "Paginated Tables",
      components: { default: PaginatedTables, header: DefaultHeader },
    },
  ],
};

// Maps Pages
import GoogleMaps from "../views/dashboard/maps/GoogleMaps.vue";
import FullScreenMap from "../views/dashboard/maps/FullScreenMap.vue";
import VectorMaps from "../views/dashboard/maps/VectorMaps.vue";

let mapsMenu = {
  path: "/maps",
  component: DashboardLayout,
  name: "Maps",
  redirect: "/maps/google",
  children: [
    {
      path: "google",
      name: "Google Maps",
      components: { default: GoogleMaps, header: DefaultHeader },
    },
    {
      path: "full-screen",
      name: "Full Screen Map",
      meta: {
        hideContent: true,
        hideFooter: true,
      },
      components: { default: FullScreenMap },
    },
    {
      path: "vector-map",
      name: "Vector Map",
      components: { default: VectorMaps, header: VectorMapsHeader },
    },
  ],
};

// Auth Pages
import Lock from "../views/auth/Vnud-Lock.vue";
import Login from "../views/auth/Vnud-Login.vue";
import Register from "../views/auth/Vnud-Register.vue";


let authPages = {
  path: "/",
  component: AuthLayout,
  name: "Authentication",
  children: [
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
    },
    {
      path: "/lock",
      name: "Lock",
      component: Lock,
    },
  ],
};

// Cliente Pagina
import Cliente from "../views/dashboard/clientes/RegistroCliente.vue";

let clientePagina = {
  path: "/cliente",
  component: DashboardLayout,
  redirect: "/cliente/registro",
  name: "cliente",
  children: [
    {
      path: "registro",
      name: "Cliente Registro",
      components: { default: Cliente, header: DefaultHeader },
    },
  ]
};
// Cargos pagina
import Cargo from "../views/dashboard/cargos/RegistroCargo.vue";

let cargoPagina = {
  path: "/cargo",
  component: DashboardLayout,
  redirect: "/cargo/registro",
  name: "cargo",
  children: [
    {
      path: "registro",
      name: "Cargo Registro",
      components: { default: Cargo, header: DefaultHeader },
    },
  ]
};
// Perfil pagina
import Perfil from "../views/dashboard/perfils/RegistroPerfil.vue";

let perfilPagina = {
  path: "/perfil",
  component: DashboardLayout,
  redirect: "/perfil/registro",
  name: "perfil",
  children: [
    {
      path: "registro",
      name: "Perfil Registro",
      components: { default: Perfil, header: DefaultHeader },
    },
  ]
};
// Categoria pagina
import Categoria from "../views/dashboard/categorias/RegistroCategoria.vue";

let categoriaPagina = {
  path: "/categoria",
  component: DashboardLayout,
  redirect: "/categoria/registro",
  name: "categoria",
  children: [
    {
      path: "registro",
      name: "Categoria Registro",
      components: { default: Categoria, header: DefaultHeader },
    },
  ]
};
// Permissao pagina
import Permissao from "../views/dashboard/permissoes/RegistroPermissao.vue";

let permissaoPagina = {
  path: "/permissao",
  component: DashboardLayout,
  redirect: "/permissao/registro",
  name: "permissao",
  children: [
    {
      path: "registro",
      name: "Permissao Registro",
      components: { default: Permissao, header: DefaultHeader },
    },
  ]
};
// Empresa pagina
import Empresa from "../views/dashboard/empresas/RegistroEmpresa.vue";

let empresaPagina = {
  path: "/empresa",
  component: DashboardLayout,
  redirect: "/empresa/registro",
  name: "empresa",
  children: [
    {
      path: "registro",
      name: "Empresa Registro",
      components: { default: Empresa, header: DefaultHeader },
    },
  ]
};
// Usuario pagina
import Usuario from "../views/dashboard/usuarios/RegistroUsuario.vue";
import { assign } from "core-js/core/object";

let usuarioPagina = {
  path: "/usuario",
  component: DashboardLayout,
  redirect: "/usuario/registro",
  name: "usuario",
  children: [
    {
      path: "registro",
      name: "Usuario Registro",
      components: { default: Usuario, header: DefaultHeader },
    },
  ]
};
const routes = [
  {
    path: "/",
    redirect: "/dashboard",
    name: "Home",
  },
  clientePagina,
  cargoPagina,
  perfilPagina,
  categoriaPagina,
  permissaoPagina,
  empresaPagina,
  usuarioPagina,
  authPages,
  pagesMenu,
  componentsMenu,
  formsMenu,
  tablesMenu,
  mapsMenu,
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    name: "Dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        components: { default: Dashboard, header: DashboardHeader },
      },
      {
        path: "calendar",
        name: "Calendar",
        components: { default: Calendar, header: CalendarHeader },
      },
      {
        path: "charts",
        name: "Charts",
        components: { default: Charts, header: DefaultHeader },
      },
      {
        path: "widgets",
        name: "Widgets",
        components: { default: Widgets, header: DefaultHeader },
      },
    ],
  },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: "active",
  routes,
});
router.beforeEach(async (to,from, next)=>{
  return router.push({name:'Login'})
  });
export default router;
