import { useEffect } from 'react';
import jwtInterceptor from '../../services/jwt.interceptor';
import funcionalidadesStore from '../../store/funcionalidadesStore';
// import type { Route } from '../+types/root';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

export function meta() {
    return [
        { title: "Prueba de Estado Global" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

// Llama las funcionalidades de la API, las muestra y las guarda en el estado global

const MenuHerramientas = () => {
    const herramientas = funcionalidadesStore((state) => state.RespuestaHerramientas);
    const setRespuestaHerramientas = funcionalidadesStore((state) => state.setRespuestaHerramientas);
    const navigate = useNavigate();
    const fetchData = async () => {
        try {
            const response = await jwtInterceptor.get("api_herramientas/MenuFuncionalidades/Herramientas");
            if (response && response.data) {
                console.log("Response Data:", response.data);
                setRespuestaHerramientas(response.data); // Guarda los datos en el estado global
            }
        } catch (err) {
            console.error("Error fetching data:", err);
        }
    };

    const { data, error, isLoading, refetch } = useQuery({
        queryKey: ["data"],
        queryFn: fetchData,
        staleTime: 60000, // Evita refetch inmediato
        // cacheTime: 300000, // Guarda datos en caché por 5 minutos
    });

    // Llama a la api al cargar la página
    useEffect(() => {
        setRespuestaHerramientas(null);
        fetchData(); // Llama a la API al cargar la página
    }, []);

    // Para llamar desde un botón o evento
    const onServiceHandler = async () => {
        try {
            const response = await jwtInterceptor.get("api_herramientas/MenuFuncionalidades/Herramientas");
            if (response && response.data) {
                console.log("Response Data:", response.data);
                setRespuestaHerramientas(response.data); // Guarda los datos en el estado global
            }
        } catch (err) {
            console.error("Error fetching data:", err);
        }
    }

    // if (!herramientas) {
    //   return <div style={{ textAlign: 'center' }}>Cargando datos...</div>;
    // }

    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div>
            <button type="button" className="bg-orange-500 text-white p-2 rounded" onClick={() => navigate("/")}>
                Volver
            </button>
            <br />
            <br />
                {herramientas && herramientas.Funcionalidades ? (
                    <div>
                        <strong>Funcionalidades</strong>
                        <ul style={{ textAlign: 'left' }}>
                            {herramientas.Funcionalidades.map((funcionalidad: any, index: number) => (
                                <li key={index}>{funcionalidad.TITULO}</li>
                            ))}
                        </ul>
                        <br />
                        <hr />
                        <br />
                        <strong>Hijos Funcionalidades</strong>
                        <ul style={{ textAlign: 'left' }}>
                            {herramientas.HijosFuncionalidades.map((funcionalidad: any, index: number) => (
                                <li key={index}>{funcionalidad.TITULO}</li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p>{isLoading ?  "Cargando" : "No hay funcionalidades disponibles."}</p>
                )}
            </div>
        </main>

    );
};

export default MenuHerramientas;