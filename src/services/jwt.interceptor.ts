import axios, { AxiosError, type AxiosResponse} from "axios";
import { API_GATEWAY_URL } from "../config/apiConfig";
import authStore from "../store/authStore";
import { mostrarAlerta, TipoAlerta } from "../components/widgets/Alertas";

const jwtInterceptor = axios.create({});

jwtInterceptor.defaults.baseURL = API_GATEWAY_URL;

// Función para manejar errores
const handleErrorResponse = (error: AxiosError): Promise<never> => {
    const logOut = authStore.getState().logOut;
    
    if (!error.response) {
        // Error de conexión
        console.error("Error de red o servidor no disponible");
        mostrarAlerta(TipoAlerta.Error, "Error de red: No se pudo conectar con el servidor.");
        return Promise.reject(error);
    }

    const status = error.response.status;

    switch (status) {
        case 400:
            console.error("Solicitud incorrecta (400)");
            mostrarAlerta(TipoAlerta.Error, "Error 400: La solicitud tiene errores.");
            break;
        case 401:
            console.error("No autorizado (401)");
            logOut();
            window.location.href = '/Login';
            break;
        case 403:
            console.error("Acceso prohibido (403)");
            mostrarAlerta(TipoAlerta.Error,"Error 403: No tienes permiso para acceder.");
            break;
        case 404:
            console.error("Recurso no encontrado (404)");
            mostrarAlerta(TipoAlerta.Error,"Error 404: La página o recurso no existe.");
            break;
        case 500:
            console.error("Error interno del servidor (500)");
            mostrarAlerta(TipoAlerta.Error,"Error 500: Problema en el servidor, intenta más tarde.");
            break;
        case 503:
            console.error("Servicio no disponible (503)");
            mostrarAlerta(TipoAlerta.Error,"Error 503: El servicio está temporalmente fuera de servicio.");
            break;
        default:
            console.error(`Error desconocido (${status})`);
            mostrarAlerta(TipoAlerta.Error,`Error desconocido (${status}): ${error.response.data || "Ocurrió un error inesperado."}`);
    }

    return Promise.reject(error);
};

// Interceptor de solicitudes
jwtInterceptor.interceptors.request.use((config: any) => {
    const { infoUsuario: user } = authStore.getState();

    const auth_token = user?.token;
    const auth_usuario = user?.usuario;

    if (auth_token) {
        config.headers = {
            ...config.headers,
            Authorization: `Bearer ${auth_token}`,
        };
    }

    if (auth_usuario) {
        config.headers = {
            ...config.headers,
            auth_usuario: `${auth_usuario}`,
        };
    }
    
    return config;
});

// Interceptor de respuestas
jwtInterceptor.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => handleErrorResponse(error)
);

export default jwtInterceptor;