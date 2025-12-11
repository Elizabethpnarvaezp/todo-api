const express = require("express");
const cors = require("cors");
const taskRoutes = require("./routes/task.routes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "https://todo-web-ten-alpha.vercel.app/"],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());

app.use("/tasks", taskRoutes);

app.use(errorHandler);

module.exports = app;
