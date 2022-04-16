import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the page", () => {
  render(<App />);
  const text = screen.getByText(/Filing Cabinet/);
  expect(text).toBeInTheDocument();
});
