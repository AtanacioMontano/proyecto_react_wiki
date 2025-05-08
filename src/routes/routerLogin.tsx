import { Route, Routes } from "react-router";
import PaginaNoEncontrada from "../pages/PaginaNoEncontrada";
import PrivateRoute from "./private.route";
import Login from "../pages/Login";

const AppRouteslogin = () => {
  const navigationRoutes = [
    { path: "/login", element: <Login /> },
    { path: "*", element: <PrivateRoute><PaginaNoEncontrada /></PrivateRoute>}
  ];

  return (
    <Routes>
      {navigationRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default AppRouteslogin;
