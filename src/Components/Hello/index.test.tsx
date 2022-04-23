import { render, screen } from "@testing-library/react";
import Hello from "./index";

describe("Components -> Hello", () => {
  test("renders the text: hello", () => {
    render(<Hello />);
    expect(screen.getByText("hello")).toBeInTheDocument();
  });
});
