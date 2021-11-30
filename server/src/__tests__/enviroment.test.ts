// Tests if the .env is correctly set up
describe("Given that the .env exists", () => {
  it("Should have a node env", () => {
    expect(process.env.NODE_ENV).toBeDefined();
  });
  it("Should have an owner private key", () => {
    expect(process.env.CONTRACT_OWNER_PRIVATE_KEY).toBeDefined();
  });
  it("Should have a contract owner", () => {
    expect(process.env.CONTRACT_OWNER).toBeDefined();
  });
  it("Should have a contract name", () => {
    expect(process.env.CONTRACT_NAME).toBeDefined();
  });
  it("Should have a response default gas", () => {
    expect(process.env.DEFAULT_GAS).toBeDefined();
  });
  it("Should have a fleek storage secret", () => {
    expect(process.env.FLEEK_SECRET).toBeDefined();
  });
  it("Should have a fleek storage key", () => {
    expect(process.env.FLEEK_KEY).toBeDefined();
  });
  it("Should have a playground object data", () => {
    expect(process.env.PLAYGROUND).toBeDefined();
  });
});
