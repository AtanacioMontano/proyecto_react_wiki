import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Importante para accesibilidad

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAceptar: () => void;
    onCancelar: () => void;
}

const ModalConfirmacion: React.FC<ModalProps> = ({ isOpen, onClose, onAceptar, onCancelar }) => {

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            shouldCloseOnOverlayClick={false}
            shouldReturnFocusAfterClose={false}
            shouldCloseOnEsc={false}
            style={{
                content: {
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    background: "#ffffff",
                    padding: "20px",
                    borderRadius: "10px",
                    display: "flex", // Habilita Flexbox
                    flexDirection: "column", // Alinea el contenido en columna
                    justifyContent: "space-between", // Espacio entre el contenido y el botón
                    alignItems: "center", // Centra horizontalmente
                    maxHeight: "90vh",
                    height: "200px",
                    width: "400px",
                    maxWidth: "90vw", // Ancho máximo del modal
                    overflowY: "auto", // Habilita el scroll si el contenido excede el alto máximo
                },
                overlay: {
                    backgroundColor: "rgba(0, 0, 0, 0.75)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",

                },
            }}
        >
            <h2 className="text-xl font-semibold mb-4">¿Estás seguro/a?</h2>
            <div>Esta acción no se puede deshacer</div>
            <br />
            <div className="flex flex-wrap space-x-4">
                <button
                    onClick={() => {
                        onAceptar();
                        onClose();
                    }
                    }
                    className="bg-green-500 text-white p-2 rounded"
                    style={{
                        alignSelf: "center", // Centra el botón horizontalmente
                    }}
                >
                    Aceptar
                </button>
                <button
                    onClick={() => {
                        onCancelar();
                        onClose();
                    }
                    }
                    className="bg-gray-400 text-white p-2 rounded"
                    style={{
                        alignSelf: "center", // Centra el botón horizontalmente
                    }}
                >
                    Cancelar
                </button>
            </div>

        </Modal>
    );
};

export default ModalConfirmacion;