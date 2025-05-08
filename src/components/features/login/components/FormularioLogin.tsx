import { useForm } from "react-hook-form";
import "../../../../assets/styles/inputLogin.css";
import { useLogin } from "../hooks/useLogin";

interface LoginVM {
  USUARIO: string;
  PASSWORD: string;
}

const FormularioLogin = () => {
  const { register, handleSubmit } = useForm<LoginVM>({
    defaultValues: {
      USUARIO: "",
      PASSWORD: "",
    },
  });

  const { loading, mensaje, onLoginHandler } = useLogin();

  return (
    <section id="access" className="w-[26rem] rounded-xl">
      <article className="my-8 md:my-16 px-8 md:px-16 grow">
        <header>
          <figure className="mb-4">
            {/* Logo Cliente */}
          </figure>
        </header>
        <form onSubmit={handleSubmit(onLoginHandler)}>
          <div className="flex flex-col mb-4">
            <input
              type="text"
              {...register("USUARIO")}
              id="USUARIO"
              placeholder="Usuario"
              autoComplete="off"
              className="w-full px-4 py-2 border border-gray-500 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            {mensaje && (
              <div className="helper-text mt-1 text-sm text-gray-500 flex flex-row items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-[16px] h-[16px] block mt-1 mr-1 shrink-0"
                >
                  <path d="M12 23C5.9 23 1 18.1 1 12S5.9 1 12 1s11 4.9 11 11-4.9 11-11 11Zm0-20c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9Z" />
                  <path d="M12 17c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1s1 .4 1 1v4c0 .6-.4 1-1 1Zm0-8c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1Z" />
                </svg>
                <span className="helper-message"> {mensaje}</span>
              </div>
            )}
          </div>
          <div className="flex flex-col mb-4">
            <input
              {...register("PASSWORD")}
              id="PASSWORD"
              type="password"
              placeholder="Contraseña"
              className="w-full px-4 py-2 border border-gray-500 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <div className="helper-text mt-1 text-sm text-gray-500 flex flex-row items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-[16px] h-[16px] block mt-1 mr-1 shrink-0"
              >
                <path d="M12 23C5.9 23 1 18.1 1 12S5.9 1 12 1s11 4.9 11 11-4.9 11-11 11Zm0-20c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9Z" />
                <path d="M12 17c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1s1 .4 1 1v4c0 .6-.4 1-1 1Zm0-8c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1Z" />
              </svg>
              <span className="helper-message">
                Para recuperar contraseña contacte a su administrador.
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="bg-primary hover:bg-primary-hover text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            Iniciar sesión
          </button>
          <div className="mt-4">
            {loading && <p className="text-white-500">Cargando...</p>}
          </div>
        </form>
      </article>
    </section>
  );
};

export default FormularioLogin;