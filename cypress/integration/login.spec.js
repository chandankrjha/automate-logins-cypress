const config = require("../../config");

const { url, email, password, login } = config[0];

describe("Testing", () => {
  it("Login", () => {
    cy.visit(url);

    cy.get(email.selector).type(email.value);
    cy.get(password.selector).type(password.value);

    cy.get(login.selector).click();
  });
});
