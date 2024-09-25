import { render, screen } from "@testing-library/react";
import { CounterTwo } from "./CounterTwo";
import user from "@testing-library/user-event";

describe("CounterTwo", () => {
  it("should render correctly", () => {
    render(<CounterTwo count={0} />);
    const textElement = screen.getByText("Counter Two");
    expect(textElement).toBeInTheDocument();
  });

  it("should call increment and decrement fn", async () => {
    let incrementHandler = jest.fn();
    let decrementHandler = jest.fn();
    user.setup();
    render(
      <CounterTwo
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />
    );
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });

    const decrementButton = screen.getByRole("button", {
      name: "Decrement",
    });

    await user.click(incrementButton);
    expect(incrementHandler).toBeCalledTimes(1);

    await user.click(decrementButton);
    expect(decrementHandler).toBeCalledTimes(1);
  });
});
