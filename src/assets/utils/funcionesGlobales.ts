// Reemplaza caracteres no deseados en un campo de texto
const CaracteresReplace = (txt: string): string => {
    let charactersOnly = txt;
    charactersOnly = charactersOnly.replace('/', '').replace('\\', '');

    if (charactersOnly.trim() !== '') {
        if (charactersOnly.search(/[\w+\s/g{./\\(),'}+:?®©-]+$/) === -1) {
            charactersOnly = charactersOnly.substring(0, charactersOnly.length - 1);
        }
    }

    return charactersOnly
};

// Verifica si los caracteres de un texto son válidos
const CaracteresSonValidos = (txt: string): boolean => {
    let charactersOnly: string;

    charactersOnly = txt.replace('/', '').replace('\\', '');

    if (charactersOnly.includes("/") || charactersOnly.includes("\\")) {
        return false;
    } else {
        if (charactersOnly.trim() !== '') {
            return charactersOnly.search(/[\w+\s/g{./\\(),'}+:?®©-]+$/) !== -1;
        } else {
            return false;
        }
    }
};

// Reemplaza todas las ocurrencias de un texto en una cadena
const replaceAll = (text: string, busca: string, reemplaza: string): string => {
    while (text.toString().indexOf(busca) !== -1) {
        text = text.toString().replace(busca, reemplaza);
    }
    return text;
};

// Elimina un valor específico de un array
const arrayRemove = <T>(arr: T[], value: T): T[] => {
    return arr.filter((ele) => ele !== value);
};

// Redirige a una URL en una nueva pestaña
const redirect_blank = (url: string): void => {
    const a = document.createElement('a');
    a.target = "_blank";
    a.href = url;
    a.click();
};

// Devuelve la cantidad de caracteres restantes en un campo de texto
const countChar = (val: string, largo: number): string => {
    const len = val.length;
    if (len >= largo) {
        val = val.substring(0, largo);
        return 'Quedan 0 caracteres...';
    } else {
        return `Quedan ${largo - len} caracteres...`;
    }
};

// Incrementa el valor de un campo de texto con un salto específico
// const Sube = (
//     txtInput: JQuery<HTMLElement>,
//     vSalto: number,
//     vInferior: number,
//     vSuperior: number,
//     vFixed: number
// ): void => {
//     if (txtInput.val() === "") {
//         txtInput.val(vInferior);
//     } else {
//         if (parseFloat(txtInput.val() as string) <= vSuperior) {
//             txtInput.val(
//                 parseFloat(
//                     parseFloat(txtInput.val() as string) + vSalto
//                 ).toFixed(vFixed)
//             );
//         }
//         if (parseFloat(txtInput.val() as string) > vSuperior) {
//             txtInput.val(vSuperior);
//         }
//     }
//     if (vFixed === 1) {
//         if (
//             parseFloat(txtInput.val() as string)
//                 .toFixed(vFixed)
//                 .split('.')[1] === "0"
//         ) {
//             txtInput.val((txtInput.val() as string).split('.')[0]);
//         }
//     }
// };

// Decrementa el valor de un campo de texto con un salto específico
// const Baja = (
//     txtInput: JQuery<HTMLElement>,
//     vSalto: number,
//     vInferior: number,
//     vFixed: number
// ): void => {
//     if (txtInput.val() === "") {
//         txtInput.val(vInferior);
//     } else {
//         if (parseFloat(txtInput.val() as string) >= vInferior) {
//             txtInput.val(
//                 parseFloat(
//                     parseFloat(txtInput.val() as string) - vSalto
//                 ).toFixed(vFixed)
//             );
//         }
//         if (parseFloat(txtInput.val() as string) < vInferior) {
//             txtInput.val(vInferior);
//         }
//     }
//     if (vFixed === 1) {
//         if (
//             parseFloat(txtInput.val() as string)
//                 .toFixed(vFixed)
//                 .split('.')[1] === "0"
//         ) {
//             txtInput.val((txtInput.val() as string).split('.')[0]);
//         }
//     }
// };

// Exporta las funciones para ser consumidas
export default {
    CaracteresReplace,
    CaracteresSonValidos,
    replaceAll,
    arrayRemove,
    redirect_blank,
    countChar,
    // Sube,
    // Baja,
};