import request from "supertest";
import app from "../app";

const walletId = "johnq.testnet";

describe("It will query the contract and check badges in a whitelisted account", () => {
  it("Should return 200 when requesting badges from an account with badges", async () => {
   const connection = await request(app).get(`/badges/${walletId}`).expect(200);
    const { body, statusCode } = connection;
    expect(statusCode).toBe(200);
    expect(body.tokens_for_owner.length).toBeGreaterThanOrEqual(1);
  });
});
 