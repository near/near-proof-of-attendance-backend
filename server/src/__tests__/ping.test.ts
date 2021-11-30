import request from "supertest";
import app from "../app";

// Tests the test.ts controller
describe("GET /ping ", () => {
  describe("It will request the test route /ping", () => {
    it("Should return 200", async () => {
      const connection = await request(app).get("/ping");
      const { body, statusCode } = connection;
      expect(statusCode).toBe(200);
      expect(body.success).toBe("OK");
    });

    describe("It will request /pi route", () => {
      it("Should return 500 ", async () => {
        await request(app).get("/pi").expect(404);
      });
    });
  });
});
