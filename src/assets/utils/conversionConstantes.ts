import { constanteTipoPension, constanteModalidadRenta, constanteEtapaPagoPoliza, constanteFallecido } from "../../config/constantes";

// Define los tipos para los parámetros de las funciones
type EstadoPoliza = "A" | "X" | "R" | "E" | "C";
type TipoPension = string;
type ModalidadRenta = string;
type EtapaPago = string;
type Fallecido = number;

// Devuelve el nombre del estado de la póliza
const nombreEstadoPoliza = (estadoPoliza: EstadoPoliza): string | undefined => {
    if (estadoPoliza === "A") {
        return "Anulada";
    }
    if (estadoPoliza === "X") {
        return "Extinta";
    }
    if (estadoPoliza === "R") {
        return "Recaudada";
    }
    if (estadoPoliza === "E") {
        return "Enviada";
    }
    if (estadoPoliza === "C") {
        return "Creada";
    }
    return undefined; // En caso de que no coincida con ningún estado
};

// Devuelve el nombre del tipo de pensión
const nombreTipoPension = (tipoPension: TipoPension): string | undefined => {
    if (tipoPension === constanteTipoPension.RentaPrivada.codigoCorto) {
        return constanteTipoPension.RentaPrivada.conceptoCompleto;
    }
    if (tipoPension === constanteTipoPension.SobrevivenciaPrivada.codigoCorto) {
        return constanteTipoPension.SobrevivenciaPrivada.conceptoCompleto;
    }
    return undefined;
};

// Devuelve el nombre de la modalidad de renta
const nombreModalidadRenta = (modalidadRenta: ModalidadRenta): string | undefined => {
    if (modalidadRenta === constanteModalidadRenta.Garantizada.codigoCorto) {
        return constanteModalidadRenta.Garantizada.conceptoCompleto;
    }
    return undefined;
};

// Devuelve el nombre de la etapa de pago
const nombreEtapaPago = (etapaPago: EtapaPago): string | undefined => {
    if (etapaPago === constanteEtapaPagoPoliza.SinPago.codigoCorto) {
        return constanteEtapaPagoPoliza.SinPago.conceptoCompleto;
    }
    if (etapaPago === constanteEtapaPagoPoliza.Pago.codigoCorto) {
        return constanteEtapaPagoPoliza.Pago.conceptoCompleto;
    }
    if (etapaPago === constanteEtapaPagoPoliza.Garantia.codigoCorto) {
        return constanteEtapaPagoPoliza.Garantia.conceptoCompleto;
    }
    if (etapaPago === constanteEtapaPagoPoliza.Diferida.codigoCorto) {
        return constanteEtapaPagoPoliza.Diferida.conceptoCompleto;
    }
    return undefined;
};

// Devuelve el nombre del estado de fallecimiento
const nombreFallecido = (muerto: Fallecido): string | undefined => {
    if (muerto === constanteFallecido.Muerto.valor) {
        return constanteFallecido.Muerto.conceptoBinario;
    }
    if (muerto === constanteFallecido.Vivo.valor) {
        return constanteFallecido.Vivo.conceptoBinario;
    }
    return undefined;
};

// Exporta las funciones para ser consumidas
export default {
    nombreEstadoPoliza,
    nombreTipoPension,
    nombreEtapaPago,
    nombreFallecido,
    nombreModalidadRenta,
};