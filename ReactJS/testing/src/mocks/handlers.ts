import { HttpResponse, http } from "msw";

export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/users", () => {
    return HttpResponse.json(
      [
        {
          name: "Bruce",
        },
        {
          name: "Clark",
        },
        {
          name: "Diana",
        },
      ],
      { status: 200 }
    );
  }),
];
