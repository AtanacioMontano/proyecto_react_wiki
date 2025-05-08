// import React from "react";
import { Link } from "react-router";

const PaginaNoEncontrada = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-135 bg-gray-100">
            <h1 className="text-6xl font-bold text-blue-500">404</h1>
            <h2 className="text-2xl font-semibold text-gray-700 mt-4">Página no encontrada</h2>
            <p className="text-gray-500 mt-2">
                Lo sentimos, la página que estás buscando no existe o ha sido movida.
            </p>
            <Link
                to="/"
                className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
                Volver al inicio
            </Link>
        </div>
    );
};

export default PaginaNoEncontrada;
