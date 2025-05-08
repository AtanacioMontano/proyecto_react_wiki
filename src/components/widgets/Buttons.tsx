const ButtonSubmit = () => {
    return (
       <div>
        <button
            type="submit"
            className="bg-primary hover:bg-primary-hover text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
            Iniciar sesión
        </button>
       </div>
        
    );
};

const ButtonAceptar = () => {
    return (
        <button className="bg-green-500 text-white p-2 rounded cursor-pointer">
            Aceptar
        </button>
    );
};

const ButtonEliminar = () => {
    return (
        <button className="bg-red-500 text-white p-2 rounded cursor-pointer">
            Eliminar
        </button>
    );
};

const ButtonCancelar = () => {
    return (
        <button className="bg-gray-400 text-white p-2 rounded cursor-pointer">
            Cancelar
        </button>
    );
};

export {ButtonSubmit, ButtonAceptar, ButtonEliminar, ButtonCancelar};
