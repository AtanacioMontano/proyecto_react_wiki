import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { customStorage } from './middleware/customStorage';

interface RespuestaHerramientas {
    EsValido: boolean;
    Mensaje: string;
    Funcionalidades: any | null;
    HijosFuncionalidades: any | null;
    ProcesoExitosoDeSalida: boolean;
}

interface RespuestaOperaciones {
    EsValido: boolean;
    Mensaje: string;
    FuncionalidadSeleccionada: string;
    TituloFuncionalidadSeleccionada: string;
    Funcionalidades: any | null;
    HijosFuncionalidades: any | null;
    HijosNivel_2_Funcionalidades: any | null;
    HijosNivel_3_Funcionalidades: any | null;
    HijosNivel_4_Funcionalidades: any | null;
    HijosNivel_5_Funcionalidades: any | null;
}

interface RespuestaParametros {
    EsValido: boolean;
    Mensaje: string;
    Funcionalidades: any | null;
    HijosFuncionalidades: any | null;
    HijosNivel_2_Funcionalidades: any | null;
}

interface FuncionalidadesState {
    RespuestaHerramientas: RespuestaHerramientas | null;
    RespuestaOperaciones: RespuestaOperaciones | null;
    RespuestaParametros: RespuestaParametros | null;
    setRespuestaHerramientas: (data: RespuestaHerramientas | null) => void;
    setRespuestaOperaciones: (data: RespuestaOperaciones | null) => void;
    setRespuestaParametros: (data: RespuestaParametros | null) => void;
}

const funcionalidadesStore = create<FuncionalidadesState>()(
    persist(
        (set) => ({
            RespuestaHerramientas: {
                EsValido: false,
                Mensaje: "",
                Funcionalidades: null,
                HijosFuncionalidades: null,
                ProcesoExitosoDeSalida: false,
            },
            RespuestaOperaciones: {
                EsValido: false,
                Mensaje: "",
                FuncionalidadSeleccionada: "",
                TituloFuncionalidadSeleccionada: "",
                Funcionalidades: null,
                HijosFuncionalidades: null,
                HijosNivel_2_Funcionalidades: null,
                HijosNivel_3_Funcionalidades: null,
                HijosNivel_4_Funcionalidades: null,
                HijosNivel_5_Funcionalidades: null,
            },
            RespuestaParametros: {
                EsValido: false,
                Mensaje: "",
                Funcionalidades: null,
                HijosFuncionalidades: null,
                HijosNivel_2_Funcionalidades: null,
            },
            setRespuestaHerramientas: (data) => set({ RespuestaHerramientas: data }),
            setRespuestaOperaciones: (data) => set({ RespuestaOperaciones: data }),
            setRespuestaParametros: (data) => set({ RespuestaParametros: data }),
        }),
        {
            name: 'funcionalidades-storage', // Nombre de la clave en localStorage
            storage: customStorage, // Usa localStorage para persistir el estado
        }
    )
);

export default funcionalidadesStore;