
describe("Profile Page", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/signin");
        const Username = "Noga";
        const Password = "Noga1!";

        cy.get("input#username").type(Username);
        cy.get("input#password").type(Password);
        cy.get("button[type='submit']").click();
        cy.wait(200);
        
    });

    it("Should display profile information", () => {
        cy.contains("Profile").click();
        cy.contains("User Profile").should("exist");
        cy.contains("Id: 3").should("exist");
        cy.contains("Username: Noga").should("exist");
        cy.contains("Name: Noga").should("exist");
        cy.contains("Email: noga@noga").should("exist");
    });

});