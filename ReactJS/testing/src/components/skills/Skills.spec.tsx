import { render, screen } from "@testing-library/react";
import { Skills } from "./Skills";

describe("Skills", () => {
  const props = ["Ram", "Shyam", "Ronan"];
  it("should render all", () => {
    render(<Skills skills={props} />);

    const listElemement = screen.getByRole("list");
    expect(listElemement).toBeInTheDocument();

    /** getAllByRole */
    const listItemElemement = screen.getAllByRole("listitem");
    expect(listItemElemement.length).toBe(props.length);
  });

  /** queryByRole -> to assert elements not present in the DOM */
  it("should NOT render start learning", () => {
    render(<Skills skills={props} />);
    const listItemElemementQuery = screen.queryByRole("button", {
      name: "Start learning",
    });
    expect(listItemElemementQuery).not.toBeInTheDocument();
  });

  /** findByRole -> to assert asynchronous elements which will be shown or hidden depending on a timer, api call, event*/
  it("should render start learning after sometime", async () => {
    render(<Skills skills={props} />);
    const listItemElemementQuery = await screen.findByRole(
      "button",
      {
        name: "Start learning",
      },
      {
        timeout: 2000,
      }
    );
    expect(listItemElemementQuery).toBeInTheDocument();
  });

  it("should render Login Element", () => {
    render(<Skills skills={props} />);
    const loginElement = screen.getByRole("button", {
      name: "Login",
    });
    expect(loginElement).toBeInTheDocument();
  });

  it("should NOT render Login Element after sometime", () => {
    render(<Skills skills={props} />);
    const loginElement = screen.getByRole("button", {
      name: "Login",
    });
    setTimeout(() => {
      expect(loginElement).not.toBeInTheDocument();
    }, 500);
  });
});
