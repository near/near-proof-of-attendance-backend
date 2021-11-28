import { describe, it } from "@jest/globals";
import  request from "supertest";
import app from "../app";

const walletId = "johnq.testnet";

describe("It will query NEAR and check badges of a given account", () => {
  it("Should return 200 when requesting badges from an account", async () => {
    await request(app).get(walletId).expect(200);
  });
});