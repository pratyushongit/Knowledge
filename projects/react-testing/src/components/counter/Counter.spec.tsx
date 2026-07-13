import { render, screen } from "@testing-library/react";
import { Counter } from "./Counter";
import user from "@testing-library/user-event";

describe("Counter", () => {
  it("should render correctly", () => {
    render(<Counter />);

    const countElement = screen.getByRole("heading", {
      level: 1,
    });
    expect(countElement).toBeInTheDocument();

    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    expect(incrementButton).toBeInTheDocument();

    const inputElement = screen.getByRole("spinbutton");
    expect(inputElement).toBeInTheDocument();

    const setButton = screen.getByRole("button", {
      name: "Set",
    });
    expect(setButton).toBeInTheDocument();
  });

  it("should render count of 0 on initial render", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading", {
      level: 1,
    });
    expect(countElement).toHaveTextContent("0");
  });

  it("should render count of 1 after button click", async () => {
    user.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(incrementButton);
    const countElement = screen.getByRole("heading", {
      level: 1,
    });
    expect(countElement).toHaveTextContent("1");
  });

  it("should render count of 10 after set button click", async () => {
    user.setup();
    render(<Counter />);
    const inputElement = screen.getByRole("spinbutton");
    await user.type(inputElement, "10");
    expect(inputElement).toHaveValue(10);
    const setButton = screen.getByRole("button", {
      name: "Set",
    });
    await user.click(setButton);
    const countElement = screen.getByRole("heading", {
      level: 1,
    });
    expect(countElement).toHaveTextContent("10");
  });

  it("should focus elements in the right order", async () => {
    user.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    const inputElement = screen.getByRole("spinbutton");
    const setButton = screen.getByRole("button", {
      name: "Set",
    });
    await user.tab();
    expect(incrementButton).toHaveFocus();
    await user.tab();
    expect(inputElement).toHaveFocus();
    await user.tab();
    expect(setButton).toHaveFocus();
  });
});
