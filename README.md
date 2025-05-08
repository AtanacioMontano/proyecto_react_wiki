# Estructura de carpetas con arquitectura limpia

src/
├── assets/          # Recursos estáticos como imágenes, fuentes, estilos globales
├───├── styles/          # Estilos globales (SCSS) Taildwind
├───├── utils/           # Funciones auxiliares y utilidades
│         └── formatDate.js
├── layouts/         # Diseños de página reutilizables
│   ├── MainLayout.jsx
│   └── SidebarLayout.jsx
├── pages/           # Páginas principales de la aplicación
│   ├── HomePage.jsx
│   └── Login.jsx
├── components/      # Componentes 
    ├── features/        # Componentes específicos con su propia lógica de negocio
    │   ├── user/
    │   │   ├── components/       # Componentes específicos del módulo
    │   │   ├── services/         # Servicios relacionados con el módulo (API, etc.)
    │   │   ├── slices/           # Slices o lógica de estado con Redux Toolkit
    │   │   └── UserPage.jsx
    │   └── product/
    │       ├── components/
    │       ├── services/
    │       ├── slices/
    │       └── ProductPage.jsx
    ├── widgets/     # Componentes reutilizables
    │   ├── Button/
    │   │   ├── Button.jsx
    │   │   └── Button.test.jsx
    │   └── Header/
    │       ├── Header.jsx
    │       └── Header.test.jsx
├── config/          #  Configuración global, como gateway, constantes, axios y .env
│   └── apiConfig.js
├── hooks/           # Hooks personalizados (useFetch, useAuth, etc.)
├── services/        # Servicios globales como llamadas a APIs (axios)
│   └── apiService.js
├── store/           # Configuración de estado global (Redux o Context API)
│   ├── index.js
│   ├── reducers/
│   └── middlewares/
├── routes/             #Configuración de rutas
│   ├── AppRoutes.jsx    # Archivo con todas las rutas principales
│   └── PrivateRoutes.jsx # Componente para proteger rutas privadas
├── App.jsx          # Punto de entrada principal de la aplicación
├── index.jsx        # Archivo raíz que renderiza el componente principal
└── setupTests.js    # Configuración inicial para pruebas (por evaluar)
Dockerfile
package.json
vite.config.js
.env


# Librerías y patrones a utilizar

* Axios
* Tailwind
* Zustand (estado global)
* React Query (estado local)

<a href="https://deepwiki.com/AtanacioMontano/proyecto_react_wiki"><img src="https://deepwiki.com/badge.svg" alt="Ask DeepWiki"></a>