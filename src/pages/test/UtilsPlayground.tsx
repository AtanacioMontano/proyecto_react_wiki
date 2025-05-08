import { useEffect, useState } from "react";
import { accesoRoles } from '../../assets/utils/acessoRoles';
import { useForm } from "react-hook-form";
import funcionesFormato from "../../assets/utils/funcionesFormato";
import funcionesGlobales from "../../assets/utils/funcionesGlobales";
import funcionesValidar from "../../assets/utils/funcionesValidar";
import { useNavigate } from "react-router";

const UtilsPlayground = () => {
    const { register, getValues } = useForm();
    const navigate = useNavigate();
    const [rutFormateado, setRutFormateado] = useState("");
    const [mensajeChar, setMensajeChar] = useState("");
    const [mensajeValidChar, setMensajeValidChar] = useState("");
    const [mensajeValidNum, setMensajeValidNum] = useState("");
    const [mensajeValidRut, setMensajeValidRut] = useState("");
    const [mensajeValidMail, setMensajeValidMail] = useState("");

    useEffect(() => {
        console.log(accesoRoles.tieneAccesoRoles("btnEditarConsulta"));
    }, []);

    const onFormateaRut = () => {
        const rutUsuario = getValues("RUT_USUARIO");
        setRutFormateado(funcionesFormato.formatoRUT(rutUsuario));
    };

    const onQuitaFormatoRut = () => {
        const rutUsuario = getValues("RUT_USUARIO");
        setRutFormateado(funcionesFormato.quitarFormato(rutUsuario));
    };

    // Función que se ejecuta al cambiar el valor del input CHAR_TEST
    const onCharTestChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        console.log("Valor actual de CHAR_TEST:", value);

        setMensajeChar(funcionesGlobales.countChar(value, 10));
    };

    const onCharIsValidChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        if (value === "") {
            setMensajeValidChar("No se ha ingresado un caracter");
        } else if (funcionesGlobales.CaracteresSonValidos(value)) {
            setMensajeValidChar("Es válido");
        } else {
            setMensajeValidChar("No es válido");
        }
    };

    const onNumIsValidChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (value === "") {
            setMensajeValidNum("");
        } else {
            setMensajeValidNum(funcionesValidar.isNumeric(value) ? "Es numérico" : "No es numérico");
        }
    };

    const onRutIsValidChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (value === "") {
            setMensajeValidRut("");
        } else {
            setMensajeValidRut(funcionesValidar.validaRUT(value) ? "Es válido" : "No es válido");
        }
    };

    const onCharBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        setMensajeChar("");
    };

    const onMailIsValidChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (value === "") {
            setMensajeValidMail("");
        } else {
            setMensajeValidMail(funcionesValidar.esEmail(value) ? "Es email" : "No es email");
        }
    };

    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div>
                <button type="button" className="bg-orange-500 text-white p-2 rounded" onClick={() => navigate("/")}>
                    Volver
                </button>
                <br />
                <br />
                <h1>Utils</h1>
    
                {/* Contenedor de la grilla */}
                <div className="grid grid-cols-3 gap-6">

                <form className="space-y-4 justify-center w-full max-w-md p-4 border rounded-lg shadow-md">
                        <h2>Formatea Rut</h2>
                        <div>
                            <input {...register("RUT_USUARIO")} id="RUT_USUARIO" className="p-2 border w-full" />
                            <div className="flex space-x-4 mt-4">
                                <button type="button" onClick={onFormateaRut} className="bg-blue-500 text-white p-2 rounded">
                                    Formatea Rut
                                </button>
                                <button type="button" onClick={onQuitaFormatoRut} className="bg-blue-500 text-white p-2 rounded">
                                    Quita Formato
                                </button>
                            </div>
                            <div className="mt-4 h-5">
                                {rutFormateado !== "" ? <p className="text-white-500">{rutFormateado}</p> : null}
                            </div>
                        </div>
                    </form>

                    <form className="space-y-4 justify-center w-full max-w-md p-4 border rounded-lg shadow-md">
                        <h2>Es Rut válido</h2>
                        <div>
                            <input {...register("IS_RUT")} id="IS_RUT" defaultValue={""} className="p-2 border w-full" onChange={onRutIsValidChange} maxLength={10} />
                            <div className="mt-4 h-5">
                                <p className="text-white-500">{mensajeValidRut}</p>
                            </div>
                        </div>
                    </form>

                    <form className="space-y-4 justify-center w-full max-w-md p-4 border rounded-lg shadow-md">
                        <h2>Conteo de caracteres</h2>
                        <div>
                            <input {...register("CHAR_TEST")} id="CHAR_TEST" className="p-2 border w-full" onChange={onCharTestChange} maxLength={10} onBlur={onCharBlur} />
                            <div className="mt-4 h-5">
                                <p className="text-white-500">{mensajeChar}</p>
                            </div>
                        </div>
                    </form>
    
                    <form className="space-y-4 justify-center w-full max-w-md p-4 border rounded-lg shadow-md">
                        <h2>Caracteres válidos</h2>
                        <div>
                            <input {...register("CHAR_VALID")} id="CHAR_VALID" defaultValue={""} className="p-2 border w-full" onChange={onCharIsValidChange} maxLength={10} />
                            <div className="mt-4 h-5">
                                <p className="text-white-500">{mensajeValidChar}</p>
                            </div>
                        </div>
                    </form>
    
                    <form className="space-y-4 justify-center w-full max-w-md p-4 border rounded-lg shadow-md">
                        <h2>Es numérico</h2>
                        <div>
                            <input {...register("IS_NUMERIC")} id="IS_NUMERIC" defaultValue={""} className="p-2 border w-full" onChange={onNumIsValidChange} maxLength={10} />
                            <div className="mt-4 h-5">
                                <p className="text-white-500">{mensajeValidNum}</p>
                            </div>
                        </div>
                    </form>

                    <form className="space-y-4 justify-center w-full max-w-md p-4 border rounded-lg shadow-md">
                        <h2>Valida email</h2>
                        <div>
                            <input {...register("MAIL_VALID")} id="MAIL_VALID" defaultValue={""} className="p-2 border w-full" onChange={onMailIsValidChange} />
                            <div className="mt-4 h-5">
                                <p className="text-white-500">{mensajeValidMail}</p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default UtilsPlayground;