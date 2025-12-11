const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../app");
const Task = require("../models/task.model"); 

beforeAll(async () => {
  await mongoose.connect("mongodb://localhost:27017/todo_app");
});

beforeEach(async () => {
  await Task.deleteMany({});
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Tasks API CRUD", () => {
  it(
    "GET /tasks → should return 200 and an array",
    async () => {
      const res = await request(app).get("/tasks");
      expect(res.statusCode).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
    },
    10000
  );

  it(
    "POST /tasks → should create a new task",
    async () => {
      const newTask = { title: "Test Task", description: "Test description" };
      const res = await request(app).post("/tasks").send(newTask);

      expect(res.statusCode).toBe(201); 
      expect(res.body).toHaveProperty("_id");
      expect(res.body.title).toBe(newTask.title);
      expect(res.body.description).toBe(newTask.description);
      expect(res.body.completed).toBe(false);
    },
    10000
  );

  it(
    "PUT /tasks/:id → should update an existing task",
    async () => {
      const task = await Task.create({ title: "Old Title", description: "Old description" });
      const updatedData = { title: "Updated Title", description: "Updated description" };

      const res = await request(app).put(`/tasks/${task._id}`).send(updatedData);

      expect(res.statusCode).toBe(200);
      expect(res.body.title).toBe(updatedData.title);
      expect(res.body.description).toBe(updatedData.description);
    },
    10000
  );

  it(
    "DELETE /tasks/:id → should delete a task",
    async () => {
      const task = await Task.create({ title: "Task to delete", description: "Delete me" });

      const res = await request(app).delete(`/tasks/${task._id}`);

      expect(res.statusCode).toBe(200);
      expect(res.body.message).toBeDefined();

      const deleted = await Task.findById(task._id);
      expect(deleted).toBeNull();
    },
    10000
  );
});
