// Carga las variables de entorno desde el archivo .env
// Esto permite usar process.env.NOMBRE_VARIABLE
require("dotenv").config();

// Importa la configuración principal de la aplicación (Express)
const app = require("./app");

// Importa la función que se encarga de conectar a MongoDB
const connectDB = require("./config/db");

// Define el puerto en el que se ejecutará el servidor
// Usa el puerto del entorno si existe, o 3000 por defecto
const PORT = process.env.PORT || 3000;

// Ejecuta la conexión a la base de datos MongoDB
connectDB();

// Inicia el servidor y lo pone a escuchar en el puerto definido
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
