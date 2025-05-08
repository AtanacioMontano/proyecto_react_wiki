// Valida si un número es un float con hasta 6 decimales
const validaFloat = (n: string): boolean => {
    return /^\d+[,.]?\d{0,6}$/.test(n);
};

// Verifica si un valor es numérico
const isNumeric = (n: any): boolean => {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

// Valida si un RUT chileno es válido
const validaRUT = (rutCompleto: string): boolean => {
    rutCompleto = rutCompleto.replace("‐", "-");
    if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto)) {
        return false;
    }
    const tmp = rutCompleto.split('-');
    const digv = tmp[1].toLowerCase(); // Convertimos a minúscula
    const rut = tmp[0];
    return validaDv(parseInt(rut, 10)) === digv;
};

// Calcula el dígito verificador de un RUT
const validaDv = (T: number): string => {
    let M = 0,
        S = 1;
    for (; T; T = Math.floor(T / 10)) {
        S = (S + (T % 10) * (9 - (M++ % 6))) % 11;
    }
    return S ? (S - 1).toString() : 'k';
};

// Valida si un email tiene un formato correcto
const esEmail = (email: string): boolean => {
    const regex = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    return regex.test(email);
};

// Permite solo números en un evento de teclado
const SoloNumeros = (e: KeyboardEvent): boolean => {
    const tecla = e.keyCode || e.which;

    // Permitir tecla de retroceso
    if (tecla === 8) {
        return true;
    }

    // Patrón para solo números
    const patron = /[0-9]/;
    const tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
};

// Filtra teclas no numéricas en un evento de teclado
const filterKey = (e: KeyboardEvent): void => {
    if (e.keyCode < 48 || e.keyCode > 57) {
        e.preventDefault();
    }
};

// Exporta las funciones para ser consumidas
export default {
    validaFloat,
    isNumeric,
    validaRUT,
    validaDv,
    esEmail,
    SoloNumeros,
    filterKey,
};