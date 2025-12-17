const taskService = require("../services/task.service");

// Obtiene todas las tareas usando el servicio
exports.getAll = async (req, res, next) => {
  try {
    const tasks = await taskService.getTasks();
    res.json(tasks);
  } catch (error) {
    next(error);
  }
};

// Crea una nueva tarea con los datos enviados en el body
exports.create = async (req, res, next) => {
  try {
    const task = await taskService.createTask(req.body);
    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
};

// Actualiza la tarea identificada por ID con los datos enviados
exports.update = async (req, res, next) => {
  try {
    const updated = await taskService.updateTask(req.params.id, req.body);
    res.json(updated);
  } catch (error) {
    next(error);
  }
};

// Elimina la tarea por ID
exports.remove = async (req, res, next) => {
  try {
    await taskService.deleteTask(req.params.id);
    res.json({ message: "Task deleted" });
  } catch (error) {
    next(error);
  }
};
