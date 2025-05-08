import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import isLeapYear from 'dayjs/plugin/isLeapYear';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(isSameOrBefore);
dayjs.extend(isLeapYear);
dayjs.extend(customParseFormat);

// Devuelve el mes y año actual en formato 'YYYY/MM'
const MesfechaActual = (): string => {
    return dayjs().format('YYYY/MM');
};

// Devuelve la fecha actual en formato 'DD/MM/YYYY'
const fechaActual = (): string => {
    return dayjs().format('DD/MM/YYYY');
};

// Valida si una cadena tiene un formato de fecha válido
const isDate = (txtDate: string): boolean => {
    if (txtDate === '') return false;

    const rxDatePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/;
    const dtArray = txtDate.match(rxDatePattern);

    if (dtArray === null) return false;

    const dtDay = parseInt(dtArray[1]);
    const dtMonth = parseInt(dtArray[3]);
    const dtYear = parseInt(dtArray[5]);

    if (dtMonth < 1 || dtMonth > 12) return false;
    if (dtDay < 1 || dtDay > 31) return false;
    if ((dtMonth === 4 || dtMonth === 6 || dtMonth === 9 || dtMonth === 11) && dtDay === 31) return false;
    if (dtMonth === 2) {
        const isLeap = dayjs(`${dtYear}-02-29`).isValid();
        if (dtDay > 29 || (dtDay === 29 && !isLeap)) return false;
    }

    return true;
};

// Convierte una cadena en formato 'DD/MM/YYYY' a un objeto Date
const convertirAFecha = (dateStr: string): Date => {
    return dayjs(dateStr, 'DD/MM/YYYY').toDate();
};

// Valida si un mes y año tienen el formato 'MM/YYYY'
const validaFormatoMesProceso = (txtMesProceso: string): boolean => {
    if (txtMesProceso === '' || txtMesProceso.substring(2, 3) !== '/') return false;
    if (txtMesProceso.length < 7) return false;
    if (parseInt(txtMesProceso.split('/')[0]) > 12) return false;
    return true;
};

// Convierte un objeto Date a una cadena en formato 'DD/MM/YYYY'
const convertirFechaAString = (fecha: Date): string => {
    return dayjs(fecha).format('DD/MM/YYYY');
};

// Extrae el año de una fecha en formato 'DD/MM/YYYY'
const AnoFecha = (Fecha: string): string => {
    return dayjs(Fecha, 'DD/MM/YYYY').format('YYYY');
};

// Extrae el mes de una fecha en formato 'DD/MM/YYYY'
const MesFecha = (Fecha: string): string => {
    return dayjs(Fecha, 'DD/MM/YYYY').format('MM');
};

// Extrae el día de una fecha en formato 'DD/MM/YYYY'
const DiaFecha = (Fecha: string): string => {
    return dayjs(Fecha, 'DD/MM/YYYY').format('DD');
};

// Suma o resta días, meses o años a una fecha
const DateAdd = (tipo: string, cantidad: number, fecha: string): string => {
    const dFechaOriginal = dayjs(fecha, 'DD/MM/YYYY');

    switch (tipo) {
        case 'y':
        case 'yy':
        case 'yyy':
        case 'yyyy':
            return dFechaOriginal.add(cantidad, 'year').format('DD/MM/YYYY');
        case 'm':
        case 'mm':
            return dFechaOriginal.add(cantidad, 'month').format('DD/MM/YYYY');
        case 'd':
        case 'dd':
            return dFechaOriginal.add(cantidad, 'day').format('DD/MM/YYYY');
        default:
            return dFechaOriginal.format('DD/MM/YYYY');
    }
};

// Devuelve el primer día del mes en formato 'DD/MM/YYYY'
const PrimerDiaDelMes = (ano: number, mes: number): string => {
    return dayjs(`${ano}-${mes}-01`, 'YYYY-MM-DD').format('DD/MM/YYYY');
};

// Devuelve el último día del mes en formato 'DD/MM/YYYY'
const UltimoDiaDelMes = (ano: number, mes: number): string => {
    return dayjs(`${ano}-${mes}`, 'YYYY-MM').endOf('month').format('DD/MM/YYYY');
};

// Formatea una fecha a 'DD/MM/YYYY'
const FormatearFecha = (fecha: Date): string => {
    return dayjs(fecha).format('DD/MM/YYYY');
};

// Compara si una fecha es menor que otra
const CompararFechas = (Desde: string, Hasta: string): boolean => {
    return dayjs(Desde, 'DD/MM/YYYY').isBefore(dayjs(Hasta, 'DD/MM/YYYY'));
};

// Compara si una fecha es menor o igual que otra
const CompararFechasConIgual = (Desde: string, Hasta: string): boolean => {
    return dayjs(Desde, 'DD/MM/YYYY').isSameOrBefore(dayjs(Hasta, 'DD/MM/YYYY'));
};

// Calcula la diferencia entre dos fechas en días, meses o años
const DateDiff = (tipo: string, dtInit: string, dtEnd: string): number => {
    const dFechaOriginal1 = dayjs(dtInit, 'DD/MM/YYYY');
    const dFechaOriginal2 = dayjs(dtEnd, 'DD/MM/YYYY');

    switch (tipo) {
        case 'y':
        case 'yy':
        case 'yyy':
        case 'yyyy':
            return dFechaOriginal2.diff(dFechaOriginal1, 'year');
        case 'm':
        case 'mm':
            return dFechaOriginal2.diff(dFechaOriginal1, 'month');
        case 'd':
        case 'dd':
            return dFechaOriginal2.diff(dFechaOriginal1, 'day');
        default:
            return 0;
    }
};

// Valida si un mes y año tienen el formato 'MM/YYYY'
const validaFormatoMesAnno = (txtMesAnno: string): boolean => {
    if (txtMesAnno === '' || txtMesAnno.substring(2, 3) !== '/') return false;
    if (txtMesAnno.length < 7) return false;
    if (parseInt(txtMesAnno.split('/')[0]) > 12) return false;
    return true;
};

// Exporta las funciones para ser consumidas
export default {
    MesfechaActual,
    fechaActual,
    isDate,
    convertirAFecha,
    validaFormatoMesProceso,
    convertirFechaAString,
    AnoFecha,
    MesFecha,
    DiaFecha,
    DateAdd,
    PrimerDiaDelMes,
    UltimoDiaDelMes,
    FormatearFecha,
    CompararFechas,
    CompararFechasConIgual,
    DateDiff,
    validaFormatoMesAnno,
};