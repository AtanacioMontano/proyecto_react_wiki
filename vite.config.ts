
import react from '@vitejs/plugin-react-swc'
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from 'path';
import { Companias } from "./src/config/companiasConfig";


interface BuildConfig {
  rollupOptions: {
    output: {
      assetFileNames: (chunkInfo: { name?: string }) => string;
      chunkFileNames: string;
      entryFileNames: string;
    };
  };
  sourcemap: boolean;
  minify: boolean | 'terser';
  cssCodeSplit: boolean;
}

const config = {
  comunes: {
    assetsSubDirectorioPublico: 'static/',
  },
  dev: {
    puerto: 3000,
  },
};

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  const env = loadEnv(mode, process.cwd());
  const companiaActual = env.VITE_COMPANIA;

  const resolveConfig = {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.ts', '.tsx'],
  };

  const buildConfig: BuildConfig = {
    rollupOptions: {
      output: {
        assetFileNames: (chunkInfo: { name?: string }) => {
          const name = chunkInfo.name || '';
          if (/\.(png|jpg|jpeg|gif|svg)$/.test(name)) {
            return `${config.comunes.assetsSubDirectorioPublico}img/[name][extname]`;
          }
          if (/\.(woff(2)?|ttf|eot)$/.test(name)) {
            return `${config.comunes.assetsSubDirectorioPublico}fonts/[name][extname]`;
          }
          return `${config.comunes.assetsSubDirectorioPublico}[name][extname]`;
        },
        chunkFileNames: 'static/js/[name].js',
        entryFileNames: 'static/js/[name].js',
      },
    },
    sourcemap: !isProduction,
    minify: isProduction ? 'terser' : false,
    cssCodeSplit: true,
  };

  const serverConfig = {
    port: config.dev.puerto,
    cors: true,
    hmr: true,
  };

  // TODO Configuración específica por compañia
  if (companiaActual === Companias.BICE) {
    // Configuración específica
  }

  const plugins = [
    tailwindcss(),
    tsconfigPaths(),
    react()
    // viteStaticCopy({
    //   targets: [
    //     // { src: 'src/assets/js/*.js', dest: 'static/js' },
    //     // { src: 'src/assets/css/*.css', dest: 'static/css' },
    //   ],
    // }),
    // createHtmlPlugin({
    //   minify: isProduction,
    //   inject: {
    //     injectData: {
    //       title: 'Rentas Privadas Desarrollo',
    //     },
    //   },
    //   template: path.resolve(__dirname, './index.html'),
    // }),
  ];

  return {
    resolve: resolveConfig,
    build: buildConfig,
    server: serverConfig,
    plugins,
  };
});
