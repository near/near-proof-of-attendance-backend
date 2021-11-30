import request from "supertest";
import app from "../app";

const walletId = "johnq.testnet";
const randomId = "&#%#johdkafjakjkdanq.testnet";

describe("It will query the smartcontract for whitelist accounts", () => {
  it("Should return 200 when requesting badges from an account", async () => {
    await request(app).get(`/badges/${walletId}`).expect(200);
  });

  it("Should return an empty array when requesting badges from a random account ", async () => {
    const connection = await request(app).get(`/badges/${randomId}`);
    const { body, statusCode } = connection;
    expect(statusCode).toBe(200);
    expect(body.tokens_for_owner).toEqual([]);
  });
});
