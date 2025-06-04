# Estructura de carpetas con arquitectura limpia
src/
├── assets/ # Recursos estáticos (imágenes, fuentes, estilos globales)
│ ├── styles/ # Estilos globales (SCSS/Tailwind)
│ └── utils/ # Funciones auxiliares y utilidades
│ └── formatDate.js
├── layouts/ # Diseños de página reutilizables
│ ├── MainLayout.jsx
│ └── SidebarLayout.jsx
├── pages/ # Páginas principales de la aplicación
│ ├── HomePage.jsx
│ └── Login.jsx
├── components/ # Componentes
│ ├── features/ # Componentes con lógica de negocio específica
│ │ ├── user/
│ │ │ ├── components/ # Componentes específicos del módulo usuario
│ │ │ ├── services/ # Servicios del módulo usuario
│ │ │ ├── slices/ # Lógica de estado con Redux Toolkit
│ │ │ └── UserPage.jsx
│ │ └── product/
│ │ ├── components/ # Componentes específicos del módulo producto
│ │ ├── services/ # Servicios del módulo producto
│ │ ├── slices/ # Lógica de estado con Redux Toolkit
│ │ └── ProductPage.jsx
│ └── widgets/ # Componentes reutilizables
│ ├── Button/
│ │ ├── Button.jsx
│ │ └── Button.test.jsx
│ └── Header/
│ ├── Header.jsx
│ └── Header.test.jsx
├── config/ # Configuración global
│ └── apiConfig.js # (gateway, constantes, axios, .env)
├── hooks/ # Hooks personalizados
│ └── (useFetch, useAuth, etc.)
├── services/ # Servicios globales
│ └── apiService.js # (llamadas a APIs)
├── store/ # Estado global (Redux/Context API)
│ ├── index.js
│ ├── reducers/
│ └── middlewares/
├── routes/ # Configuración de rutas
│ ├── AppRoutes.jsx # Rutas principales
│ └── PrivateRoutes.jsx # Protección de rutas privadas
├── App.jsx # Punto de entrada principal
├── index.jsx # Archivo raíz (render principal)
└── setupTests.js # Configuración para pruebas
# Estructura del Proyecto

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


## Última actualización
**Push realizado el**: 2025-06-04 04:11:34 UTC
