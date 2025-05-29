# Proyecto CRUD con Express, Node.js, Mongoose y TypeScript

Este proyecto es una API RESTful que permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre una base de datos MongoDB alojada en MongoDB Atlas. Está desarrollada con **Node.js**, **Express.js**, **Mongoose**, **TypeScript**, y utiliza **dotenv** para la configuración de variables de entorno.

## Tecnologías utilizadas

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Mongoose](https://mongoosejs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Insomnia](https://insomnia.rest/) para pruebas de API

## Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/tuusuario/tu-repo-crud.git
cd tu-repo-crud


2.- Instala las dependencias:
npm install

3.- Crea un archivo .env en la raíz del proyecto con el siguiente contenido (ajusta los valores según tu configuración):
PORT=3000
MONGODB_URI=KEY
⚠️ Importante: No compartas tu URI con credenciales reales en repositorios públicos.

4.- Ejecuta el proyecto:
npm run dev

Endpoints
Se utilizaron las siguientes rutas para operaciones CRUD (probadas con Insomnia):

GET /movies – Obtener todas las películas

GET /movies/:id – Obtener una película por ID

POST /movies – Crear una nueva película

PUT /movies/:id – Actualizar una película existente

DELETE /movies/:id – Eliminar una película


EJEMPLO DE RESPUESTA (GET/Movies)
[
  {
    "_id": "66332cfb48b36b3c7c50cfcc",
    "title": "Inception",
    "director": "Christopher Nolan",
    "year": 2010,
    "genre": "Sci-Fi"
  }
]


Estructura del Proyecto

├── src/
│   ├── controllers/       # Lógica de negocio
│   ├── models/            # Esquemas de Mongoose
│   ├── routes/            # Definición de rutas
│   ├── app.ts             # Configuración de la app
│   └── index.ts           # Punto de entrada
├── .env                   # Variables de entorno
├── package.json
├── tsconfig.json
└── README.md


tsconfig.json (ejemplo)

{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true
  }
}

"scripts": {
  "dev": "ts-node-dev --respawn src/index.ts",
  "build": "tsc",
  "start": "node dist/index.js"
}


Base de Datos
La API se conecta a una base de datos remota en MongoDB Atlas, donde se almacenan los datos de películas en la base movies_cursoDB.

Pruebas
Se utilizó Insomnia para probar las operaciones CRUD y verificar las respuestas de la API.