import request from "supertest"
import app from "../app"
import lodash from "lodash"
import { createGame } from "../services/gameService"
import expectCt from "helmet/dist/middlewares/expect-ct"

// Prevent database service to write tests game to filesystem
jest.mock("fs")

// TODO: Mock lodash shuffle
jest.mock("lodash")
lodash.shuffle.mockImplementation((x) => x)


describe("Game router", () => {
  test("should create a game", async () => {
    const response = await request(app).post("/games").send({ name: "test" })
    //expect(response.statusCode).toBe(400)
  })
})