const Task = require("../models/task.model");

class TaskRepository {
  findAll() {
    return Task.find();
  }

  create(data) {
    return Task.create(data);
  }

  update(id, data) {
    return Task.findByIdAndUpdate(id, data, { new: true });
  }

  delete(id) {
    return Task.findByIdAndDelete(id);
  }
}

module.exports = new TaskRepository();
