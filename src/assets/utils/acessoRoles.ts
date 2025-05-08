import { jwtDecode } from "jwt-decode";
import authStore from "../../store/authStore"; // Asegúrate de que la ruta sea correcta

interface DecodedToken {
    role: string | string[] | null;
    Permission: string | string[] | null;
}

interface TokenResult {
    role: string | string[] | null;
    Permission: string | string[] | null;
}

function decodificarToken(): TokenResult {
    const tokenResult: TokenResult = {
        role: null,
        Permission: null,
    };

    const authToken = authStore.getState().infoUsuario?.token; // Obtiene el token del estado global
    if (authToken) {
        const decoded: DecodedToken = jwtDecode(authToken);
        tokenResult.role = decoded.role;
        tokenResult.Permission = decoded.Permission;
        console.log('Acceso Roles: ', decoded);
    }

    return tokenResult;
}

function tieneAccesoRoles(validador: string): boolean {
    let token = decodificarToken();
    let validar = false;

    if (validador != null && validador.length > 0) {
        if (token.role != null) {
            if (Array.isArray(token.role)) {
                validar = token.role.some((e) => e === validador);
            } else {
                validar = token.role === validador;
            }
        }

        if (!validar && token.Permission) {
            if (Array.isArray(token.Permission)) {
                validar = token.Permission.some((e) => e === validador);
            } else {
                validar = token.Permission === validador;
            }
        }

        if (Array.isArray(token.role)) {
            if (token.role.some((e) => e === 'ADMINIST')) {
                return true;
            }
        } else {
            validar = token.role === 'ADMINIST';
        }

        return validar;
    } else {
        if (Array.isArray(token.role)) {
            if (token.role.some((e) => e === 'ADMINIST')) {
                return true;
            }
        } else {
            validar = token.role === 'ADMINIST';
        }
        return validar;
    }
}

export const accesoRoles = {
    tieneAccesoRoles,
};