const Task = require("../models/task.model");

class TaskRepository {
  // Obtiene todas las tareas
  findAll() {
    return Task.find();
  }

  // Crea una nueva tarea
  create(data) {
    return Task.create(data);
  }

  // Actualiza una tarea por ID y devuelve la versión actualizada
  update(id, data) {
    return Task.findByIdAndUpdate(id, data, { new: true });
  }

  // Elimina una tarea por ID
  delete(id) {
    return Task.findByIdAndDelete(id);
  }
}

module.exports = new TaskRepository();
