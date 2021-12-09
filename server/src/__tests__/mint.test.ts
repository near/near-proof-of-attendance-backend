import request from "supertest";
import app from "../app";
import * as mockMintAttendee from "./mocks/mockMintAttendee.json";

describe("It will mint badges for a group of attendees", () => {
  it("Should return 200 after minting attendees badges", async () => {
    await request(app)
      .post("/mint")
      .send(mockMintAttendee)
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .expect(200);
  });
});
