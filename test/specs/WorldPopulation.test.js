const { OpenURL, WhileRepetition } = require("../pages/HomePage");

describe("Test", () => {
  it("Generic Test", async () => {
    await OpenURL();
    await WhileRepetition();
  });
});
