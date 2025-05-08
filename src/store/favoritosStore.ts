import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { customStorage } from './middleware/customStorage';
import type { User } from './authStore';

interface RespuestaFavoritos {
  Links: any | null;
  LinkTodasLasPaginas: any | null;
  Modulos: any | null;
}

interface RespuestaHistorial {
  Historial: any | null;
  Dias: any | null;
}

interface FavoritosState {
  RespuestaFavoritos: RespuestaFavoritos;
  RespuestaHistorial: RespuestaHistorial;
  AgregarFavoritoStatus: string;
  user: User;
  setRespuestaFavoritos: (data: RespuestaFavoritos) => void;
  setRespuestaHistorial: (data: RespuestaHistorial) => void;
  setAgregarFavoritoStatus: (status: string) => void;
}

const favoritosStore = create<FavoritosState>()(
  persist(
    (set) => ({
      RespuestaFavoritos: {
        Links: null,
        LinkTodasLasPaginas: null,
        Modulos: null,
      },
      RespuestaHistorial: {
        Historial: null,
        Dias: null,
      },
      AgregarFavoritoStatus: "",
      user: {
        usuario: null,
        token: null,
        email: null,
      },
      setRespuestaFavoritos: (data) => set({ RespuestaFavoritos: data }),
      setRespuestaHistorial: (data) => set({ RespuestaHistorial: data }),
      setAgregarFavoritoStatus: (status) => set({ AgregarFavoritoStatus: status }),
    }),
    {
      name: 'favoritos-storage', // Nombre de la clave en localStorage
      storage: customStorage, // Usa localStorage para persistir el estado
    }
  )
);

export default favoritosStore;