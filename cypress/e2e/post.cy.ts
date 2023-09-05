
describe("Create post", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/signin");
        const Username = "Noga";
        const Password = "Noga1!";

        cy.get("input#username").type(Username);
        cy.get("input#password").type(Password);
        cy.get("button[type='submit']").click();
        cy.wait(200);
        
    });

    it("Should create and publish new post", () => {
        cy.visit("http://localhost:3000/create");
        cy.get("input#title").type("title");
        cy.get("textarea#content").click().type("content");
        cy.contains("Create").click();
        cy.wait(200);
        cy.contains("title").click();
        cy.contains("Publish").click();
        cy.visit("http://localhost:3000/?page=9");
        cy.contains("title").should("exist");
        cy.contains("title").click();
    });

   

});