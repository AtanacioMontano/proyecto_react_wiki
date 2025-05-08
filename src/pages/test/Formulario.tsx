import { useForm } from "react-hook-form";
import { useGet } from "../../hooks/useGet";
import { usePost } from "../../hooks/usePost";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { mostrarAlerta, TipoAlerta } from "../../components/widgets/Alertas";
// import usuariosStore, { type UsuarioState } from "~/store/usuariosStore";

const UserForm = () => {
    const { register, handleSubmit, reset } = useForm();
    const { data, isLoading, refetch } = useGet('aramos', "api_herramientas/Usuario/CargarEditarUsuario?sUsuario=aramos");
    const { mutate, isPending, isSuccess, isError, data: respuesta } = usePost();
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    // const setUsuario = usuariosStore((state) => state.setUsuario);
    // const nombre = usuariosStore((state) => state.Nombre);

    // isPending = actualización en proceso
    // isSuccess = actualización exitosa
    // isError = error en la actualización

    // Rellenar el formulario cuando se obtienen los datos
    useEffect(() => {
        console.log('data: ', data);
        if (data) {
            reset(data.Usuario);
        }
    }, [data, reset]);

    // Rescata el mensaje de la respuesta de actualización
    useEffect(() => {
        if (isSuccess && respuesta) {
            setMessage(respuesta.Mensaje || "¡Usuario actualizado con éxito!");
            mostrarAlerta(TipoAlerta.Exito, respuesta.Mensaje || "¡Usuario actualizado con éxito!");
            // Refresca los datos del usuario después de la actualización
            refetch().then((newData: any) => {
                // Si se necesitan los valores actualizados (como por ej. para guardar en store), se puede sacar de aquí
                console.log("Refetch data: ", newData);
                // setUsuario({
                //     Usuario: newData.data.USUARIO,
                //     Correo: newData.data.CORREO,
                //     Nombre: newData.data.NOMBRE,
                //     RutUsuario: newData.data.RUT_USUARIO,
                //     Intento: newData.data.INTENTO,
                //     Bloqueado: newData.data.BLOQUEADO,
                // } as UsuarioState);
                // // Hay que llamar directamente al store para obtener el valor actualizado
                // const updatedState = usuariosStore.getState();
                // console.log("Nombre actualizado:", updatedState.Nombre);
            });
        }
        if (isError) {
            mostrarAlerta(TipoAlerta.Error, "Hubo un error al actualizar el usuario.");
        }
    }, [isSuccess, respuesta]);


    const onSubmit = (userData: any) => {
        setMessage("");
        console.log(userData)
        mutate({ url: 'api_herramientas/Usuario/ActualizaUsuario', payload: { Usuario: userData } });
    };

    if (isLoading) return <p>Cargando datos...</p>;

    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            {isLoading && (
                <p>Cargando datos...</p>
            )}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 justify-center w-full max-w-md p-4 border rounded-lg shadow-md">
                <div>
                    <label htmlFor="USUARIO" className="block text-sm font-medium text-gray-700">Usuario</label>
                    <input {...register("USUARIO")} id="USUARIO" placeholder="Usuario" className="p-2 border w-full" disabled />
                </div>
                <div>
                    <label htmlFor="CORREO" className="block text-sm font-medium text-gray-700">Correo</label>
                    <input {...register("CORREO")} id="CORREO" type="email" placeholder="Correo" className="p-2 border w-full" />
                </div>
                <div>
                    <label htmlFor="NOMBRE" className="block text-sm font-medium text-gray-700">Nombre</label>
                    <input {...register("NOMBRE")} id="NOMBRE" placeholder="Nombre" className="p-2 border w-full" />
                </div>
                <div>
                    <label htmlFor="RUT_USUARIO" className="block text-sm font-medium text-gray-700">RUT Usuario</label>
                    <input {...register("RUT_USUARIO")} id="RUT_USUARIO" placeholder="RUT Usuario" className="p-2 border w-full" />
                </div>
                <div>
                    <label htmlFor="FECHA_PASSWORD" className="block text-sm font-medium text-gray-700">Fecha Password</label>
                    <input {...register("FECHA_PASSWORD")} id="FECHA_PASSWORD" type="date" placeholder="Fecha Password" className="p-2 border w-full" />
                </div>
                <div>
                    <label htmlFor="INTENTO" className="block text-sm font-medium text-gray-700">Intento</label>
                    <input {...register("INTENTO")} id="INTENTO" type="number" placeholder="Intento" className="p-2 border w-full" />
                </div>
                <div>
                    <label htmlFor="BLOQUEADO" className="block text-sm font-medium text-gray-700">Bloqueado</label>
                    <select {...register("BLOQUEADO")} id="BLOQUEADO" className="p-2 border w-full">
                        <option value="0">No</option>
                        <option value="-1">Sí</option>
                    </select>
                </div>
                <div className="flex space-x-4 mt-4">
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                        {isPending ? "Actualizando..." : "Guardar Cambios"}
                    </button>
                    <button type="button" className="bg-orange-500 text-white p-2 rounded" onClick={() => navigate("/")}>
                        Volver
                    </button>
                </div>
                {/* <div className="mt-4 h-10">
                    {message && (
                        <p className={`${isSuccess ? "text-green-500" : "text-red-500"}`}>
                            {message}
                        </p>
                    )}
                </div> */}
            </form>
        </main>
    );
};

export default UserForm;