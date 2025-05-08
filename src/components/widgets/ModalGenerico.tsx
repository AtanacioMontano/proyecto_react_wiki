import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Importante para accesibilidad

interface ModalProps {
    titulo?: string;
    contenido: React.ReactNode;
    isOpen: boolean;
    onClose: () => void; // Agrega una función para manejar el cierre
}

const ModalGenerico: React.FC<ModalProps> = ({ titulo, contenido, isOpen, onClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            style={{
                content: {
                    // top: "30%",
                    left: "30%",
                    // transform: "translate(-50%, -50%)",
                    // position: "relative",
                    background: "#ffffff",
                    width: "700px",
                    padding: "20px",
                    borderRadius: "10px",
                    display: "flex", // Habilita Flexbox
                    flexDirection: "column", // Alinea el contenido en columna
                    // justifyContent: "space-between", // Espacio entre el contenido y el botón
                    alignItems: "center", // Centra horizontalmente
                    maxHeight: "90vh",
                    height: "auto",
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
            {titulo && <h2 className="text-xl font-semibold mb-4">{titulo}</h2>}
                <div style={{ width: "100%", height: "auto" }}>{contenido}</div>

            <button
                onClick={onClose}
                className="bg-blue-500 text-white p-2 rounded"
                style={{
                    alignSelf: "center", // Centra el botón horizontalmente
                }}
            >
                Cerrar
            </button>
        </Modal>
    );
};

export default ModalGenerico;