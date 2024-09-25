import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("Greet", () => {
  describe("and user does NOT pass props", () => {
    it("should render correctly", () => {
      render(<Greet />);
      const textElement = screen.getByText(/hello/i);
      expect(textElement).toBeInTheDocument();
    });
  });

  describe("and user passes props", () => {
    it("should render correctly with name prop", () => {
      render(<Greet name={"Pratyush"} />);
      const textElement = screen.getByText(/hello pratyush/i);
      expect(textElement).toBeInTheDocument();
    });
  });
});
