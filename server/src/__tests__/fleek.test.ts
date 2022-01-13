import request from "supertest";
import app from "../app";

// Tests fleek.ts controller
describe("POST /fleek upload route", () => {
  describe("It will post an image", () => {
    it("Should return 200", async () => {
      const connection = await request(app)
        .post("/fleek/upload")
        .set("content-type", "multipart/form-data")
        .attach("nearlogo", "server/src/__tests__/mocks/nearlogo.png");

      const { body, statusCode } = connection;

      expect(statusCode).toBe(200);

      expect(body).toEqual({
        success: "OK",
        url: expect.any(String),
      });
    });
  });

  describe("It will try to post with a wrong header", () => {
    it("Should return 500 if the upload fails", async () => {
      await request(app)
        .post("/fleek/upload")
        .attach("nearlogo", "server/src/__tests__/mocks/nearlogo.png");
    });
  });
});
