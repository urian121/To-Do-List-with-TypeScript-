# To-Do List con TypeScript

Este es un proyecto básico de una lista de tareas (To-Do List) utilizando TypeScript. El proyecto incluye la configuración de TypeScript, el uso de un servidor ligero para desarrollo y la implementación de una lista de tareas interactiva.

## Estructura del Proyecto

    /to-do-app
    ├── /src
    │   ├── /app.ts
    │   └── /styles.css
    ├── /dist
    ├── /node_modules
    ├── package.json
    ├── tsconfig.json
    └── index.html


## Archivos y Configuración
#### 1. package.json
Este archivo contiene las dependencias y los scripts para compilar y ejecutar el proyecto.

#### 2. tsconfig.json
Este archivo configura **TypeScript**, indicando cómo se compilan los archivos .ts

#### 3. index.html
Archivo HTML principal que estructura la página de la lista de tareas.

#### 4. src/app.ts
Lógica principal de la aplicación en TypeScript.

#### 5. src/styles.css
Estilos básicos para la aplicación.


## Instalación y Ejecución

Sigue los pasos a continuación para configurar y ejecutar el proyecto.

#### Paso 1: Descarga el proyecto

#### Paso 2: Instala las dependencias del Proyecto
    
    npm install

#### Paso 3: Configura TypeScript
Genera el archivo de configuración de TypeScript con el siguiente comando, si no está creado:

    npx tsc --init

#### Paso 4: Compila el proyecto

Compila los archivos TypeScript a JavaScript utilizando el siguiente comando:

    npm run build

#### Paso 5: Ejecuta el servidor

Inicia el servidor de desarrollo con el siguiente comando:

    npm run start

El servidor se ejecutará en http://localhost:3000 y podrás interactuar con la lista de tareas.