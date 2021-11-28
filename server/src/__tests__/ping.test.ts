import { describe, it } from "@jest/globals";
import request from "supertest";
import app from "../app";

// Tests the test.ts file
describe("Test route", () => {
  it("Should return 200", async () => {
    await request(app).get("/ping").expect(200);
  });
});
