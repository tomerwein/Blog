

describe("Sign Up Page", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/signup");
    });

    it("Should display the registration form", () => {
        cy.get("form").should("exist");
        cy.get("input#username").should("exist");
        cy.get("input#name").should("exist");
        cy.get("input#password").should("exist");
        cy.get("input#email").should("exist");
        cy.get("button[type='submit']").should("exist");
    });

    it("Should show an error message for an illegal email", () => {
        cy.get("input#email").type("email");
        cy.get("button[type='submit']").click();
        cy.contains("Email is illegal").should("exist");
    });

    /* deleted because would only work once
    it("Should redirect to sign in page after registration", () => {
        const username = "Tomer";
        const name = "Tomer";
        const password = "Tomer1!";
        const email = "tomer@tomer";

        cy.get("input#username").type(username);
        cy.get("input#name").type(name);
        cy.get("input#password").type(password);
        cy.get("input#email").type(email);
        cy.get("button[type='submit']").click();

        cy.url().should("eq", "http://localhost:3000/signin");
    });*/

    it("Should not redirect if user already exists", () => {
        const username = "Noga";
        const name = "Noga";
        const password = "Noga1!";
        const email = "noga@noga";

        cy.get("input#username").type(username);
        cy.get("input#name").type(name);
        cy.get("input#password").type(password);
        cy.get("input#email").type(email);
        cy.get("button[type='submit']").click();

        cy.url().should("eq", "http://localhost:3000/signup");
    });
});
