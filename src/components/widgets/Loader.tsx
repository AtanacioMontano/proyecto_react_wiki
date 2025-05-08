import React, { useEffect } from "react";
import loaderStore from "../../store/loaderStore";

const Loader: React.FC = () => {
    const isVisible = loaderStore((state) => state.isVisible);

    useEffect(() => {
        // Crear un elemento <style> dinámico
        const styleElement = document.createElement("style");
        styleElement.type = "text/css";
        styleElement.innerHTML = styles.keyframes; // Agregar las keyframes al <style>
        document.head.appendChild(styleElement);

        // Limpiar el <style> cuando el componente se desmonte
        return () => {
            document.head.removeChild(styleElement);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div style={styles.container}>
            <div style={styles.loader}></div>
        </div>
    );
};

export default Loader;

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed" as "fixed",
        width: "100%",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10000,
        backgroundColor: "#212529",
        opacity: 0.7,
    },
    loader: {
        position: "relative" as "relative",
        color: "#ffffff",
        fontSize: "0.75rem",
        width: "0.75rem",
        height: "0.75rem",
        borderRadius: "9999rem",
        textIndent: "-9999em",
        animation: "mulShdSpin 1.3s infinite linear",
        transform: "translateZ(0)",
    },
    keyframes: `
        @keyframes mulShdSpin {
            0%, 100% {
                box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em,
                            0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
            }
            12.5% {
                box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em,
                            0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
            }
            25% {
                box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0,
                            0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
            }
            37.5% {
                box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em,
                            0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
            }
            50% {
                box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em,
                            0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
            }
            62.5% {
                box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
                            0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
            }
            75% {
                box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em,
                            0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;
            }
            87.5% {
                box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
                            0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
            }
        }
    `,
};