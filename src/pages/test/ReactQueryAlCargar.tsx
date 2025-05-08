import React from 'react';
// import type { Route } from '../../+types/root';
import { useQuery } from "@tanstack/react-query";
import jwtInterceptor from '../../services/jwt.interceptor';


// export function meta({ }: Route.MetaArgs) {
//     return [
//         { title: "Prueba de React Query" },
//         { name: "description", content: "Welcome to React Router!" },
//     ];
// }

const fetchData = async () => {
    const { data } = await jwtInterceptor.get("api_herramientas/MenuFuncionalidades/Herramientas"); // Ajusta el endpoint según tu API
    return data;
};

const useDataQuery = () => {
    return useQuery({
        queryKey: ["data"],
        queryFn: fetchData,
        staleTime: 60000, // Evita refetch inmediato
        // cacheTime: 300000, // Guarda datos en caché por 5 minutos
    });
};

const ReactQueryAlCargar: React.FC = () => {
    const { data, error, isLoading } = useDataQuery();

    if (isLoading) return <p>Cargando...</p>;
    if (error) return <p>Ocurrió un error: {error.message}</p>;

    return (
        <div>
            <h1>Herramientas</h1>
            <p>{JSON.stringify(data, null, 2)}</p>
        </div>
    );
};

export default ReactQueryAlCargar;

// https://adictosaltrabajo.com/2024/04/11/introduccion-a-react-query/