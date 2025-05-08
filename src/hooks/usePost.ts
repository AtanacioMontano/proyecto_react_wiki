import { useMutation } from "@tanstack/react-query";
import jwtInterceptor from "../services/jwt.interceptor";

const post = async ({ url, payload }: { url: string; payload: any }) => {
    const { data } = await jwtInterceptor.post(url, payload);
    return data;
};

export const usePost = () => {
    return useMutation({
        mutationFn: post,
        onSuccess: (data) => {
            console.log(data);
        },
        onError: (error) => {
            console.error("Error al actualizar usuario:", error);
        },
    });
};