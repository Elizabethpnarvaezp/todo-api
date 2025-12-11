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

describe("Tasks API Validation", () => {
  it(
    "POST /tasks → should fail if title is missing",
    async () => {
      const res = await request(app)
        .post("/tasks")
        .send({ description: "Only description" });

      expect(res.statusCode).toBe(400);
      expect(res.body.errors || res.body.error).toBeDefined();
    },
    10000
  );

  it(
    "POST /tasks → should fail if description is missing",
    async () => {
      const res = await request(app)
        .post("/tasks")
        .send({ title: "Only title" });

      expect(res.statusCode).toBe(400);
      expect(res.body.errors || res.body.error).toBeDefined();
    },
    10000
  );

  it(
    "PUT /tasks/:id → should fail if title is missing",
    async () => {
      const task = await Task.create({ title: "Test", description: "Test" });

      const res = await request(app)
        .put(`/tasks/${task._id}`)
        .send({ description: "Updated description" });

      expect(res.statusCode).toBe(400);
      expect(res.body.errors || res.body.error).toBeDefined();
    },
    10000
  );

  it(
    "PUT /tasks/:id → should fail if description is missing",
    async () => {
      const task = await Task.create({ title: "Test", description: "Test" });

      const res = await request(app)
        .put(`/tasks/${task._id}`)
        .send({ title: "Updated title" });

      expect(res.statusCode).toBe(400);
      expect(res.body.errors || res.body.error).toBeDefined();
    },
    10000
  );
});
