import { useState } from "react";
import { Dialog } from "@headlessui/react";

interface ConfirmationProps {
  mensaje?: string; // Mensaje de confirmación
  confirmar?: () => void; // Acción al confirmar
  cancelar?: () => void; // Acción al cancelar
}

const Confirmacion: React.FC<ConfirmationProps> = ({ mensaje, confirmar, cancelar }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleConfirmar = () => {
    confirmar && confirmar(); // Llama a la función de confirmación si se proporciona
    setIsOpen(false);
  }

  const handleCancelar = () => {
    cancelar && cancelar(); // Llama a la función de confirmación si se proporciona
    setIsOpen(false);
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <button 
        onClick={() => setIsOpen(true)} 
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        Abrir Confirmación
      </button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <Dialog.Panel className="bg-white p-6 rounded-lg shadow-lg text-center">
          <Dialog.Title className="text-lg font-semibold">Confirmación</Dialog.Title>
          <p className="mt-2">{mensaje || '¿Estás seguro de continuar?'}</p>
          <div className="flex justify-center space-x-4 mt-4">
            <button 
              onClick={handleCancelar} 
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
            >
              Cancelar
            </button>
            <button 
              onClick={handleConfirmar} 
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Confirmar
            </button>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};

export default Confirmacion;