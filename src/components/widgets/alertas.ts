import { toast, ToastOptions } from "react-toastify";

// Transiciones
// https://fkhadra.github.io/react-toastify/custom-animation/

const toastConfig: ToastOptions = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    // className: "mi-toast-clase", // Clase personalizada
    // bodyClassName: "mi-toast-body", // Clase personalizada para el cuerpo
};

export enum TipoAlerta {
    Exito = "success",
    Error = "error",
    Info = "info",
    Warning = "warning",
}

export const mostrarAlerta = (tipo: TipoAlerta, mensaje: string) => {
    switch (tipo) {
        case TipoAlerta.Exito:
            toast.success(mensaje, { ...toastConfig });
            break;
        case TipoAlerta.Error:
            toast.error(mensaje, { ...toastConfig });
            break;
        case TipoAlerta.Info:
            toast.info(mensaje, { ...toastConfig });
            break;
        case TipoAlerta.Warning:
            toast.warning(mensaje, { ...toastConfig });
            break;
        default:
            break;
    }
};