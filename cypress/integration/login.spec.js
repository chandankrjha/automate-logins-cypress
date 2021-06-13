const config = require("../../config");

const { url, email, password } = config;
console.log(config);
describe("My First Test", () => {
  it("Login into learnk8s", () => {
    cy.visit(url);

    cy.get("#email").type(email);
    cy.get("#password").type(password);

    cy.get("#signin_btn").click();
  });
});
