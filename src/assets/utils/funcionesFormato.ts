/**
 * Formatea un RUT con puntos y guión.
 * @param rut - El RUT a formatear.
 * @returns El RUT formateado.
 */
const formatoRUT = (rut: string): string => {
    const tmp = quitarFormato(rut);
    let rutSinDigito = tmp.substring(0, tmp.length - 1);
    let f = "";

    while (rutSinDigito.length > 3) {
        f = '.' + rutSinDigito.substr(rutSinDigito.length - 3) + f;
        rutSinDigito = rutSinDigito.substring(0, rutSinDigito.length - 3);
    }

    return rutSinDigito.trim() === '' ? '' : rutSinDigito + f + "-" + tmp.charAt(tmp.length - 1);
};

/**
 * Elimina el formato de un RUT, quitando puntos y guiones.
 * @param rut - El RUT a limpiar.
 * @returns El RUT sin formato.
 */
const quitarFormato = (rut: string): string => {
    return rut.split('-').join('').split('.').join('');
};

/**
 * Aplica un formato específico de Benlar al RUT.
 * @param rut - El RUT a formatear.
 * @returns El RUT formateado según el formato Benlar.
 */
const formatoBenlar = (rut: string): string => {
    let formattedRut = formatoRUT(rut);
    if (formattedRut.indexOf('.') !== -1) {
        formattedRut = formattedRut.split('.').join('');
    }
    return formattedRut;
};

// Exporta las funciones para ser consumidas.
export default {
    formatoRUT,
    quitarFormato,
    formatoBenlar,
};