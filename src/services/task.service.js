const Task = require("../models/task.model"); 

class TaskService {
  async getTasks() {
    return await Task.find();
  }

  async createTask(data) {
    return await Task.create(data);
  }

  async updateTask(id, data) {
    const updatedTask = await Task.findByIdAndUpdate(id, data, {
      new: true,          
      runValidators: true 
    });

    if (!updatedTask) {
      throw new Error("Task not found"); 
    }

    return updatedTask;
  }

  async deleteTask(id) {
    const deletedTask = await Task.findByIdAndDelete(id);
    if (!deletedTask) {
      throw new Error("Task not found");
    }
    return deletedTask;
  }
}

module.exports = new TaskService();
