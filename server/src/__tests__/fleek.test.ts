import { describe, it } from "@jest/globals";
import request from "supertest";
import app from "../app";

describe("Fleek route", () => {
  it("Should return 200 if the upload succeeds", async () => {
    await request(app)
      .post("/fleek/upload")
      .set("content-type", "multipart/form-data")
      .attach("nearlogo", "server/src/__tests__/mocks/nearlogo.png")
      .expect(200);
  });
});
