import jwtInterceptor from "../../../../services/jwt.interceptor";
import { EntradaLogin, RespuestaLogin } from "../types/login.types";

export const login = async (payload: EntradaLogin): Promise<RespuestaLogin> => {
    const response = await jwtInterceptor.post<RespuestaLogin>(
        "api_autenticacion/auth/Login/Login",
        payload
    );
    console.log(response)
    return response.data;
};