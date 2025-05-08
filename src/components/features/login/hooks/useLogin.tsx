import { useState } from "react";
import { useNavigate } from "react-router";
import authStore from "../../../../store/authStore";
import { login } from "../services/loginService";
import { EntradaLogin } from "../types/login.types";

export const useLogin = () => {
  const navigate = useNavigate();
  const logIn = authStore((state) => state.logIn);
  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const onLoginHandler = async (data: EntradaLogin) => {
    setLoading(true);
    setMensaje("");

    const payload: EntradaLogin = {
      USUARIO: data.USUARIO,
      PASSWORD: data.PASSWORD,
    };

    try {
      const response = await(login(payload));

      if (response) {
        if (response.esValido) {
          const resp = {
            usuario: response.usuario,
            token: response.jwtToken,
            email: response.correo,
          };
          navigate("/"); // Redirige a la página principal
          logIn(resp); // Guarda los datos en el estado global
        } else {
          setMensaje(response.Mensaje || "Error al iniciar sesión.");
        }
      } else {
        setMensaje("Error al iniciar sesión.");
      }
    } catch (error) {
      console.error(error);
      setMensaje("Error al iniciar sesión.");
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    mensaje,
    onLoginHandler,
  };
};