import React from "react";
import { render, screen } from "@testing-library/react";
import App from ".";

test("renders App correctly", () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello! My name is Mikael./i);
  expect(linkElement).toBeInTheDocument();
});
