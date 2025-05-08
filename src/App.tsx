import React from "react";
// import { Link, useLocation, useNavigate } from "react-router";
import AppRoutes from "./routes/routes";
import MainLayout from "./layouts/MainLayout";
import { ToastContainer } from "react-toastify";
import Loader from "./components/widgets/Loader";

const App: React.FC = () => {

  // const navigate = useNavigate();
  // const location = useLocation();

  // const getSelectedKey = () => {
  //   switch (location.pathname) {
  //     case "/":
  //       return ["1"];
  //     case "/orders":
  //       return ["2"];
  //     case "/delivery":
  //       return ["3"];
  //     default:
  //       // return ["1"]; // всегда горит главная
  //       return [];
  //   }
  // };

  return (
    <>
    <MainLayout>
        <AppRoutes />
        <Loader /> {/* Componente de Loader */}
        <ToastContainer /> {/* Librería de alertas */}
    </MainLayout>
    </>
  );
};

export default App;
