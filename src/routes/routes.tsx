import { Route, Routes } from "react-router";
import MainPage from "../pages/test/main-page";
import Settings from "../pages/test/settings";
import PaginaNoEncontrada from "../pages/PaginaNoEncontrada";
import PrivateRoute from "./private.route";
import UserForm from "../pages/test/Formulario";
import UtilsPlayground from "../pages/test/UtilsPlayground";
import MenuHerramientas from "../pages/test/MenuHerramientas";
import HooksTest from "../pages/test/HooksTest";
import Perfil from "../pages/Perfil";
import Usuarios from "../components/features/herramientas/Usuarios";
import Permisos from "../components/features/herramientas/Permisos";
import ConsultasDinamicas from "../components/features/herramientas/ConsultasDinamicas";
import Alertas from "../pages/test/Alertas";
import Componentes from "../pages/test/Componentes";

const AppRoutes = () => {
  const navigationRoutes = [
    { path: "/", element:   <PrivateRoute><MainPage /></PrivateRoute> },
    { path: "/formulario", element: <PrivateRoute><UserForm /></PrivateRoute> },
    { path: "/playground", element: <PrivateRoute><UtilsPlayground /></PrivateRoute> },
    { path: "/herramientas", element: <PrivateRoute><MenuHerramientas /></PrivateRoute> },
    { path: "/hooks", element: <PrivateRoute><HooksTest /></PrivateRoute> },
    { path: "/perfil", element: <PrivateRoute><Perfil /></PrivateRoute> },
    { path: "/usuarios", element: <PrivateRoute><Usuarios /></PrivateRoute> },
    { path: "/permisos", element: <PrivateRoute><Permisos /></PrivateRoute> },
    { path: "/consultas", element: <PrivateRoute><ConsultasDinamicas /></PrivateRoute> },
    { path: "/alertas", element: <PrivateRoute><Alertas /></PrivateRoute> },
    { path: "/componentes", element: <PrivateRoute><Componentes /></PrivateRoute> },
    {
      path: "/settings",
      element: (
        <PrivateRoute>
          <Settings />
        </PrivateRoute>
      )
    },
    { path: "*", element:  <PrivateRoute><PaginaNoEncontrada /></PrivateRoute> }
  ];

  return (
    <Routes>
      {navigationRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
