import About from "@/app/about-us/page";

describe("this is home page", () => {
  it("render home", () => {
    cy.mount(<About />);

    cy.get("main").contains("section");
  });
});
