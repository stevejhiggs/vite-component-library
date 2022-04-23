import { render, screen } from "@testing-library/react";
import SvgTest from "./index";

describe("Components -> SvgTest", () => {
  test("should render", () => {
    render(<SvgTest />);
    expect(screen.getByText("svg test")).toBeInTheDocument();
  });
});
