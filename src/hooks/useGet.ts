import { useQuery } from "@tanstack/react-query";
import jwtInterceptor from "../services/jwt.interceptor";

const fetch = async (url: string) => {
    const { data } = await jwtInterceptor.get(url); // Ajusta el endpoint según tu API
    return data;
};

export const useGet = (id: string, url: string) => {
    return useQuery({
        queryKey: [id], // Identificador único por usuario
        queryFn: () => fetch(url),
        staleTime: 60000, // Mantener datos en caché por 1 minuto
    });
};
