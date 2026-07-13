import { render, screen } from "@testing-library/react";
import { Users } from "./Users";
import { server } from "../../mocks/server";
import { HttpResponse, http } from "msw";

describe("Users", () => {
  it("should render correctly", () => {
    render(<Users />);
    const usersELement = screen.getByRole("heading", {
      level: 1,
    });
    expect(usersELement).toBeInTheDocument();
  });

  it("should render a list of users", async () => {
    render(<Users />);
    const usersListElement = await screen.findAllByRole("listitem");
    expect(usersListElement).toHaveLength(3);
  });

  it("should throw error", async () => {
    server.use(
      http.get("https://jsonplaceholder.typicode.com/users", () => {
        return HttpResponse.json(null, { status: 501 });
      })
    );
    render(<Users />);
    const errorElement = await screen.findByText("Error fetching users");
    expect(errorElement).toBeInTheDocument();
  });
});
