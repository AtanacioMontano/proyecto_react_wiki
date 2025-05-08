import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { customStorage } from './middleware/customStorage';

export interface User {
  usuario: string | null;
  token: string | null;
  email: string | null;
}

interface AuthState {
  isLoggedIn: boolean;
  infoUsuario: User | null;
  logIn: (userInfo: User) => void;
  logOut: () => void;
}

const authStore = create<AuthState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      infoUsuario: {
        usuario: null,
        token: null,
        email: null,
      },
      logIn: (infoUsuario) => set({ isLoggedIn: true, infoUsuario: infoUsuario }), // Acción para iniciar sesión
      logOut: () => set({ isLoggedIn: false, infoUsuario: null }), // Acción para cerrar sesión
    }),
    {
      name: 'auth-storage', // Nombre de la clave en localStorage
      storage: customStorage, // Usa localStorage para persistir el estado
    }
  )
);

export default authStore;