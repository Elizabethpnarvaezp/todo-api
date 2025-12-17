// Middleware para capturar errores de toda la app
// Debe colocarse siempre al final de las rutas en app.js
module.exports = (err, req, res, next) => {
  console.error("Error Handler:", err);
  res.status(500).json({ error: "Internal server error" });
};
