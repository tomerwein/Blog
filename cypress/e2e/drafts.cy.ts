
describe("Drafts Page", () => {

  it("Should display drafts when logged in", () => {
      cy.visit("http://localhost:3000/signin");
      const Username = "Noga";
      const Password = "Noga1!";
      cy.get("input#username").type(Username);
      cy.get("input#password").type(Password);
      cy.get("button[type='submit']").click();
      cy.contains("My drafts").should("exist");
      cy.contains("My drafts").click();
      cy.get(".post").should("have.length.above", 0);
      cy.contains("Log out").click();

  });

  it("Should display a message when not logged in", () => {
      cy.visit("http://localhost:3000/drafts");
      cy.contains("You need to be authenticated to view this page.").should("exist");
  });

});
