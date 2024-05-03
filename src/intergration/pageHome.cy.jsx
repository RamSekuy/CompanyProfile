import Home from "@/app/page";

describe("this is home page", () => {
  it("render home", () => {
    cy.mount(<Home />);
  });
});
