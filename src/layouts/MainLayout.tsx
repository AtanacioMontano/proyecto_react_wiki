import React, { ReactNode } from "react";
import Header from "../components/features/home/Header";
import Home from "../pages/Home";
import { Companias, TemasTailwind } from "../config/companiasConfig";

interface MainLayoutProps {
    children: ReactNode; // Define el tipo de los hijos
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const compania = import.meta.env.VITE_COMPANIA;
    const temaActual: string = TemasTailwind[compania as Companias] || TemasTailwind[Companias.BENLAR];

    return (
        <div className={`flex flex-col min-h-screen theme-${temaActual}`}>
            {/* Encabezado */}
            <Header/>

            {/* Contenido Principal */}
            <Home children={children} />

            {/* Pie de Página */}
            <footer className="bg-gray-800 text-white p-4 text-center">
                <p>© 2025 Benlar Ltda. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default MainLayout;