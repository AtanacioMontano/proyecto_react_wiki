import { useCallback, useEffect, useLayoutEffect, useReducer, useRef, useState } from "react";
import jwtInterceptor from "../../services/jwt.interceptor";
import { useQuery } from "@tanstack/react-query";
import useToggle from "../../hooks/useToggle";
import { useList } from "../../hooks/useList";

const HooksTest = () => {

    const reducer = (state: number, action: string) => {
        switch (action) {
            case "increment":
                return state + 1;
            case "decrement":
                return state - 1;
            case "reset":
                return 0;
            default:
                throw new Error();
        }
    }

    const [count, dispatch] = useReducer(reducer, 0); // Controla si la consulta está habilitada

    const myBtn = useRef<HTMLButtonElement | null>(null);
    const myDiv = useRef<HTMLDivElement | null>(null);

    const [tooltipHeight, setTooltipHeight] = useState(0);

    const clickIt = () => myBtn.current!.click();

    // useToggle
    const [isToggled, toggle] = useToggle();
    const items = ["React", "Vue", "Next.js", "TypeScript"];
    const [favorites, setFavorites] = useState<Record<string, boolean>>({});

    const toggleFavorite = (item: string) => {
        setFavorites((prev) => ({
            ...prev,
            [item]: !prev[item],
        }));
    };

    // useList
    const { list, push, removeAt, updateAt, clear } = useList<string>([
        "Aprender React",
        "Explorar Next.js",
    ]);




    // Uso de useCallback para evitar la creación de una nueva función en cada renderizado
    // No es necesario en este caso, pero es una buena práctica si la función se pasa como prop a un componente hijo
    const handleClick = useCallback(() => {
        alert("Me clickearon indirectamente!");
    }, []);

    const fetchData = async () => {
        const { data } = await jwtInterceptor.get("https://jsonplaceholder.typicode.com/photos"); // Ajusta el endpoint según tu API
        console.log("Data:", data);
        return data;
    };

    const { data, error, isLoading, refetch } = useQuery({
        queryKey: ["data"],
        queryFn: fetchData,
        enabled: false,
        staleTime: 60000, // Evita refetch inmediato
        // cacheTime: 300000, // Guarda datos en caché por 5 minutos
    });

    const handleFetchData = () => {
        refetch(); // Fuerza la consulta
    };

    useLayoutEffect(() => {
        const { height } = myDiv.current!.getBoundingClientRect();
        setTooltipHeight(height);
    })

    useEffect(() => {
        handleFetchData();
        document.title = `Clickeaste ${count} veces`;
    }, [count]);


    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="grid grid-cols-3 gap-6">

                <div className="space-y-4 space-x-4 justify-center w-full max-w-md p-4 border rounded-lg shadow-md">
                    <h1>useRef</h1>
                    <button ref={myBtn} onClick={handleClick} className="bg-gray-500 text-white p-2 rounded">Dont click me!</button>
                    <button onClick={clickIt} className="bg-green-500 text-white p-2 rounded">Click me</button>
                </div>
                <div className="space-y-4 justify-center w-full max-w-md p-4 border rounded-lg shadow-md">
                    <p>useLayoutEffect</p>
                    <p>Tooltip height: {tooltipHeight}</p>
                    <div ref={myDiv} className="space-y-4 justify-center p-4 border rounded-lg">
                        {data && <pre>eeeeee</pre>}
                    </div>
                </div>

                <div className="space-y-4 space-x-4 justify-center w-full max-w-md p-4 border rounded-lg shadow-md">
                    <h1>useReducer</h1>
                    <p>{count}</p>
                    <button onClick={() => dispatch('increment')} className="bg-green-500 text-white p-2 rounded">Incrementar</button>
                    <button onClick={() => dispatch('decrement')} className="bg-red-500 text-white p-2 rounded">Disminuir</button>
                    <button onClick={() => dispatch('reset')} className="bg-gray-500 text-white p-2 rounded">Reset</button>
                </div>

                <div className="space-y-4 space-x-4 justify-center w-full max-w-md p-4 border rounded-lg shadow-md">
                    <h1>useToggle</h1>
                    <button onClick={toggle} className="bg-blue-500 text-white p-2 rounded">Toggle</button>

                    {/* Div flotante */}
                    {isToggled && (
                        <div className="absolute bg-gray-200 text-black p-2 rounded shadow-lg" style={{ top: '70%', left: '26%' }}>
                            ¡Soy un div flotante!
                        </div>
                    )}
                </div>
                <div className="space-y-4 space-x-4 justify-center w-full max-w-md p-4 border rounded-lg shadow-md">
                    <h2>useToggle favoritos</h2>
                    <ul>
                        {items.map((item) => (
                            <li key={item} className="flex justify-between items-center">
                                <span>{item}</span>
                                <button onClick={() => toggleFavorite(item)}>
                                    {favorites[item] ? "★ " : "☆"}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="space-y-4 space-x-4 justify-center w-full max-w-md p-4 border rounded-lg shadow-md">
                    <h2>Lista de Tareas</h2>
                    <ul>
                        {list.map((task: string, index: number) => (
                            <li key={index}>
                                {task}{" "}
                                <button onClick={() => removeAt(index)} className="bg-red-500 text-white p-1 rounded">Eliminar</button>
                                <button onClick={() => updateAt(index, task + " ✅")} className="bg-blue-500 text-white p-1 rounded"> 
                                    Completar
                                </button>
                            </li>
                        ))}
                    </ul>
                    <button onClick={() => push("Nueva tarea")} className="bg-green-500 text-white p-1 rounded">Agregar tarea</button>
                    <button onClick={clear} className="bg-gray-500 text-white p-1 rounded">Limpiar lista</button>

                </div>
            </div>


        </main>
    )
};

export default HooksTest;
