import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the page", () => {
  render(<App />);
  const text = screen.getByText(/No possessions/);
  expect(text).toBeInTheDocument();
});
