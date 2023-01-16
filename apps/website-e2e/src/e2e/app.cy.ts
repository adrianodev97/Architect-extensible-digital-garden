describe('website', () => {
  beforeEach(() => cy.visit('/article/dynamic-routing'));

  it('should display welcome message', () => {
    cy.get("h1").should("contain", "Dynamic Routing and Static Generation")
  });

  it("should properly render the embedded Youtube component", () => {
    cy.get("iframe").should("be.visible")
  });
});
