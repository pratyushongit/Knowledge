import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("Application", () => {
  it("should render correctly", () => {
    render(<Application />);

    // In order of query priority

    /** getByRole */
    const pageHeadingElement = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageHeadingElement).toBeInTheDocument();

    const sectionHeadingElement = screen.getByRole("heading", {
      level: 2,
    });
    expect(sectionHeadingElement).toBeInTheDocument();

    const inputElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(inputElement).toBeInTheDocument();

    const inputBioElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(inputBioElement).toBeInTheDocument();

    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toBeInTheDocument();

    const checkboxElement = screen.getByRole("checkbox");
    expect(checkboxElement).toBeInTheDocument();

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();

    /** getByLabelText */
    const nameElement2 = screen.getByLabelText("Name", { selector: "input" });
    expect(nameElement2).toBeInTheDocument();

    const selectElement2 = screen.getByLabelText("Job location", {
      selector: "select",
    });
    expect(selectElement2).toBeInTheDocument();

    const termsElement2 = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termsElement2).toBeInTheDocument();

    /** getByPlaceholderText  */
    const inputPlaceholderElement = screen.getByPlaceholderText("Fullname");
    expect(inputPlaceholderElement).toBeInTheDocument();

    /** getByText -> used in p,div,span tags */
    const paraElement = screen.getByText("All fields are mandatory");
    expect(paraElement).toBeInTheDocument();

    /** getByDisplayValue -> input,textarea,select */
    const displayInputElement = screen.getByDisplayValue("Pratyush");
    expect(displayInputElement).toBeInTheDocument();

    /** getByAltText -> img*/
    const imageElement = screen.getByAltText("a person with a laptop");
    expect(imageElement).toBeInTheDocument();

    /** getByTitle -> title tag*/
    const closeElement = screen.getByTitle("close");
    expect(closeElement).toBeInTheDocument();

    /** getByTestId -> data-testTd attribute elements*/
    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();
  });
});
