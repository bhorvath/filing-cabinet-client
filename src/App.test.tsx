import { render, screen } from "@testing-library/react";
import App from "./App";

test.skip("renders the page", () => {
  render(<App />);
  const text = screen.getByText(/No possessions/);
  expect(text).toBeInTheDocument();
});
