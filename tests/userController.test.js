jest.mock("../models/user", () => require("./mocks/userMock"));

const request = require("supertest");
const express = require("express");
const userController = require("../controllers/userController");

// créer une mini app express pour tester la route
const app = express();
app.use(express.json());

app.post("/users", userController.createUser);

describe("Test POST /users (createUser)", () => {

  test("devrait créer un utilisateur avec succès", async () => {
    const res = await request(app)
      .post("/users")
      .send({
        username: "cyrine",
        email: "cyrine@example.com",
        password: "password123"
      });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("message", "User created");
    expect(res.body.user).toHaveProperty("username", "cyrine");
  });

});
