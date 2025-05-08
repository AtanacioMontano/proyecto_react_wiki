/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_COMPANIA: string; 
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }