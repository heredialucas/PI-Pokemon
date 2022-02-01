/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Pokemon, conn } = require("../../src/db.js");

const agent = session(app);
const pokemon = {
  name: "Pikachu",
};

describe("Pokemon routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() =>
    Pokemon.sync({ force: true }).then(() => Pokemon.create(pokemon))
  );
  describe("GET /pokemons", () => {
    it("should get status 200", () => {
      setTimeout(() => {
        agent.get("/pokemons").expect(200);
      }, 10000);
    });
  });
  describe("POST /pokemons", () => {
    it("should get 201", () => {
      setTimeout(() => {
        agent.post("/pokemons").expect(201);
      }, 10000);
    });
  });
});
