// Importa el framework Express para crear el servidor
const express = require("express");

// Importa el middleware CORS para permitir peticiones desde otros dominios
const cors = require("cors");

// Importa las rutas relacionadas con las tareas
const taskRoutes = require("./routes/task.routes");

// Importa el middleware para manejo centralizado de errores
const errorHandler = require("./middlewares/errorHandler");

// Crea la instancia principal de la aplicación Express
const app = express();

// Configuración de CORS
// Permite solicitudes solo desde los dominios indicados
app.use(
  cors({
    origin: ["http://localhost:5173", "https://todo-web-ten-alpha.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// Middleware para que Express pueda leer JSON en el body de las peticiones
app.use(express.json());

// Define el prefijo "/tasks" para todas las rutas de tareas
// Ejemplo: GET /tasks, POST /tasks, PUT /tasks/:id
app.use("/tasks", taskRoutes);

// Middleware global para capturar y manejar errores
// Debe ir siempre al final
app.use(errorHandler);

// Exporta la app para ser usada en server.js o index.js
module.exports = app;
