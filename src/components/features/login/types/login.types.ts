export interface EntradaLogin {
    USUARIO: string;
    PASSWORD: string;
}

export interface RespuestaLogin {
    esValido: boolean;
    usuario: string;
    jwtToken: string;
    correo: string;
    Mensaje?: string;
}