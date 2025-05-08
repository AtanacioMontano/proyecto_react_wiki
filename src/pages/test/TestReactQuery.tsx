import React, { useState } from 'react';
import { useQuery, useQueryClient } from "@tanstack/react-query";
import jwtInterceptor from '../../services/jwt.interceptor';
import { useNavigate } from 'react-router';


export function meta() {
    return [
        { title: "Prueba de React Query" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

const fetchData = async () => {
    const { data } = await jwtInterceptor.get("https://jsonplaceholder.typicode.com/photos"); // Ajusta el endpoint según tu API
    return data;
};

const TestReactQuery: React.FC = () => {
    const [enabled, setEnabled] = useState(false); // Controla si la consulta está habilitada
    const [normalData, setNormalData] = useState(null);
    const [normalLoading, setNormalLoading] = useState(false);
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    // useEffect(() => {
    //     // Elimina los datos de la consulta (Solo para testeo, no es necesario hacerlo si se quiere guardar en caché)
    //     // queryClient.removeQueries({ queryKey: ["data"] });
    // }, []);

    const { data, error, isLoading, refetch } = useQuery({
        queryKey: ["data"],
        queryFn: fetchData,
        enabled: enabled,
        staleTime: 60000, // Evita refetch inmediato
        // cacheTime: 300000, // Guarda datos en caché por 5 minutos
    });

    const handleFetchData = () => {
        setEnabled(true); // Habilita la consulta
        refetch(); // Fuerza la consulta
        setNormalData(null);
    };

    const handleNormalFetch = async () => {
        queryClient.removeQueries({ queryKey: ["data"] });
        setNormalData(null);
        setNormalLoading(true);
        try {
            const response = await jwtInterceptor.get("https://jsonplaceholder.typicode.com/photos");
            if (response && response.data) {
                setNormalData(response.data);
                setNormalLoading(false);
            }
        } catch (err) {
            console.error("Error fetching data:", err);
        }
    }

    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div>
                <h1>Probando consultas</h1>
                <table style={{ tableLayout: "fixed", width: "50%" }}>
                    <tbody>
                        <tr className="table-row">
                            <td>
                                <button onClick={handleFetchData} className="rounded bg-blue-500 text-white px-4 py-2">
                                    Consulta React Query
                                </button>
                            </td>
                            <td>
                                <button onClick={handleNormalFetch} className="rounded bg-blue-500 text-white px-4 py-2">
                                    Consulta Normal
                                </button>
                            </td>
                            <td>
                                <button type="button" className="bg-orange-500 text-white p-2 rounded" onClick={() => navigate("/")}>
                                    Volver
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    {isLoading && <p>Cargando...</p>}
                    {error && <p>Ocurrió un error: {(error as Error).message}</p>}
                    {/* {data && <pre>{JSON.stringify(data, null, 2)}</pre>} */}
                    {data && !normalData ? (
                        <pre>{JSON.stringify(data, null, 2)}</pre>
                    ) : (
                        <div>
                            {normalLoading &&
                                <p>Cargando datos normales...</p>}
                            <pre>{JSON.stringify(normalData, null, 2)}</pre>
                        </div>

                    )
                    }
                </div>
            </div>
        </main>
    );
};

export default TestReactQuery;

// https://adictosaltrabajo.com/2024/04/11/introduccion-a-react-query/