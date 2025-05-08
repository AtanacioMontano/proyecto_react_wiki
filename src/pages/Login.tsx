import FormularioLogin from "../components/features/login/components/FormularioLogin";
import HeroImage from "../components/features/login/components/HeroImage";
import { Companias, TemasTailwind } from "../config/companiasConfig";

const Login = () => {

    const compania = import.meta.env.VITE_COMPANIA;
    const temaActual: string = TemasTailwind[compania as Companias] || TemasTailwind[Companias.BENLAR];

    return (
        <div className={`theme-${temaActual} bg-theme-gradient h-screen h-full flex items-center justify-center m-0`}>
            <section id="login" className="bg-white rounded-xl flex flex-col md:flex-row">
                {/* Hero Image */}
                <HeroImage/>

                {/* Form */}
                <FormularioLogin/>
            </section>
        </div>
    );
};

export default Login;