import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import ReactDOM from "react-dom/client";
import Confirmacion from "../../components/widgets/Confirmacion";
import loaderStore from "../../store/loaderStore";
import { useForm } from "react-hook-form";
import ModalGenerico from "../../components/widgets/ModalGenerico";
import { useState } from "react";
import ModalConfirmacion from "../../components/widgets/ModalConfirmacion";


const Alertas = () => {
    const { showLoader, hideLoader } = loaderStore();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isConfirmacionOpen, setIsConfirmacionOpen] = useState(false);

    const mostrarToastExito = () => {
        toast.success("¡Acción completada correctamente!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };
    const mostrarToastError = () => {
        toast.error("Ocurrió un error", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };
    const mostrarToastInfo = () => {
        toast.info("Esta es información que se puede mostrar", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };
    const toastPersonalizado = () => {
        toast(<AlertaPersonalizada />, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            icon(props) {
                return <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Icono" className="w-6 h-6" />;
            },
            // className: "mi-toast-clase", // Clase personalizada
            // bodyClassName: "mi-toast-body", // Clase personalizada para el cuerpo
        })
    };

    const mostrarAlertaSweetSuccess = () => {
        Swal.fire({
            title: "¡Success!",
            text: "Todo bien",
            icon: "success",
        });
    };

    const mostrarAlertaSweet = () => {
        Swal.fire({
            title: "¡Error!",
            text: "Esto es una alerta personalizada.",
            icon: "warning",
        });
    };

    const mostrarAlertaSweetError = () => {
        Swal.fire({
            title: "¡Alerta!",
            text: "Hubo un error.",
            icon: "error",
        });
    };

    const mostrarAlertaSweetPersonalizada = () => {
        Swal.fire({
            title: "Interfaz de guardar usuario",
            html: "<div id='react-alert'></div>",
            didOpen: () => {
                const root = ReactDOM.createRoot(document.getElementById("react-alert") as HTMLElement);
                root.render(<Formulario />);
            },
            showConfirmButton: false,
            // showCloseButton: true,
            // confirmButtonText: "Cerrar",

        });
    };

    const mostrarModalConfirmacion = () => {
        Swal.fire({
            title: "¿Estás seguro?",
            text: "Esta acción no se puede deshacer.",
            icon: "warning",
            showCancelButton: true, // Muestra el botón de cancelar
            confirmButtonColor: "#3085d6", // Color del botón de confirmar
            cancelButtonColor: "#d33", // Color del botón de cancelar
            confirmButtonText: "Sí, continuar", // Texto del botón de confirmar
            cancelButtonText: "Cancelar", // Texto del botón de cancelar
            allowOutsideClick: false, // Deshabilita el cierre al hacer clic fuera de la alerta
        }).then((result) => {
            // if (result.isConfirmed) {
            //     // Acción cuando el usuario confirma
            //     Swal.fire("¡Confirmado!", "La acción se ha realizado.", "success");
            // } else if (result.dismiss === Swal.DismissReason.cancel) {
            //     // Acción cuando el usuario cancela
            //     Swal.fire("Cancelado", "La acción fue cancelada.", "error");
            // }
        });
    };

    const MostrarLoader = () => {
        console.log('show');
        showLoader();
        setTimeout(() => {
            hideLoader();
        }, 2000);
    }

    return (
        <>
            <div className="justify-center w-full p-4 border rounded-lg shadow-md">
                <strong> Alertas</strong>
                <h1>react-toastify</h1>
                <br />
                {/* Contenedor de botones con Flexbox */}
                <div className="flex flex-wrap space-x-4">
                    <button onClick={mostrarToastExito} className="bg-green-500 text-white p-2 rounded">Mostrar Éxito</button>
                    <button onClick={mostrarToastError} className="bg-red-500 text-white p-2 rounded">Mostrar Error</button>
                    <button onClick={mostrarToastInfo} className="bg-blue-500 text-white p-2 rounded">Mostrar Info</button>
                    <button onClick={toastPersonalizado} className="bg-gray-500 text-white p-2 rounded">Toast personalizado</button>
                </div>
                <ToastContainer /> {/* Esto hay que agregarlo al app y configurarlo */}
            </div>
            <br />
            <div className="justify-center w-full p-4 border rounded-lg shadow-md">
                <strong> Alertas - Confirmación</strong>
                <h1>sweetalert2</h1>
                <br />
                {/* Contenedor de botones con Flexbox */}
                <div className="flex flex-wrap space-x-4">
                    <button onClick={mostrarAlertaSweetSuccess} className="bg-green-500 text-white p-2 rounded">Mostrar Exito</button>
                    <button onClick={mostrarAlertaSweetError} className="bg-red-500 text-white p-2 rounded">Mostrar Error</button>
                    <button onClick={mostrarAlertaSweetPersonalizada} className="bg-gray-500 text-white p-2 rounded">Modal personalizado</button>
                    <button onClick={mostrarModalConfirmacion} className="bg-blue-500 text-white p-2 rounded">Confirmación</button>
                </div>
                <br />
                <h1>headless-ui</h1>
                <br />
                <div className="flex flex-wrap space-x-4">
                    <Confirmacion mensaje={'Mensaje de confirmación personalizado'} confirmar={() => { console.log('confirmó') }} />
                </div>
                <ToastContainer /> {/* Esto hay que agregarlo al app y configurarlo */}
            </div>
            <br />
            <div className="justify-center w-full p-4 border rounded-lg shadow-md">
                <strong> Modal genérico</strong>
                <h1>react-modal</h1>
                <br />
                <div className="flex flex-wrap space-x-4">
                    <button onClick={() => setIsModalOpen(true)} className="bg-blue-500 text-white p-2 rounded">Abrir modal formulario</button>
                    <ModalGenerico isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} titulo="Mi Modal" contenido={<Formulario />} />
                    <button onClick={() => setIsConfirmacionOpen(true)} className="bg-blue-500 text-white p-2 rounded">Abrir modal confirmación</button>
                    <ModalConfirmacion 
                        isOpen={isConfirmacionOpen} 
                        onClose={() => setIsConfirmacionOpen(false)}
                        onAceptar={() => { console.log('aceptó') }}
                        onCancelar={() => { console.log('canceló') }}                        
                        />
                </div>


            </div>
            <br />
            <div className="justify-center w-full p-4 border rounded-lg shadow-md">
                <strong> Loader</strong>
                <h1>css puro</h1>
                <br />
                <button onClick={MostrarLoader} className="bg-green-500 text-white p-2 rounded">Probar Loader</button>

            </div>
        </>
    );
};

export default Alertas;



const AlertaPersonalizada = () => {
    return (
        <div className="whitespace-pre-line">
            <h4>Cosas que se pueden agregar aqui</h4>
            <br />
            <p>* Texto 1</p>
            <p>* Texto 2</p>
            <p>* Texto 3</p>
        </div>
    );
};

const Formulario = () => {
    const { register } = useForm();
    return (
        <div className="flex items-center justify-center pt-16 pb-4">
            <form onSubmit={() => { }} className="space-y-4 justify-center w-full max-w-md p-4 border rounded-lg shadow-md">
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
                        Guardar Cambios
                    </button>
                    <button type="button" className="bg-orange-500 text-white p-2 rounded" onClick={() => { }}>
                        Volver
                    </button>
                </div>
            </form>
        </div>
    );
};


