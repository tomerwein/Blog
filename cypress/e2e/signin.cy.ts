describe("Sign in Page", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/signin");
    });

    it("Should display the sign in form", () => {
        cy.get("form").should("exist");
        cy.get("input#username").should("exist");
        cy.get("input#password").should("exist");
        cy.get("button[type='submit']").should("exist");
    });

    it("Should display an error message for invalid credentials", () => {
        cy.get("input#username").type("username");
        cy.get("input#password").type("password");
        cy.get("button[type='submit']").click();
        cy.contains("Incorrect credentials!").should("exist");
        cy.url().should("eq", "http://localhost:3000/signin");
    });

    it("should sign in successfully with valid credentials", () => {
        const Username = "Noga";
        const Password = "Noga1!";

        cy.get("input#username").type(Username);
        cy.get("input#password").type(Password);
        cy.get("button[type='submit']").click();

        cy.url().should("eq", "http://localhost:3000/");
    });
});