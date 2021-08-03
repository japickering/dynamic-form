// import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";
import data from "./data.json";

// Note: console.log outputs the expected state values anyway

test("loads form fields from data.json", () => {
  expect(data.questions[0].fields).toBeDefined();
  expect(data.questions[1].fields).toBeDefined();
});

test("loads country options from data.json", () => {
  expect(data.questions[1].fields[2].name).toBe("country");
  expect(data.questions[1].fields[2].options).toBeDefined();
});

// Unit tests
test("check form question(s) defined", () => {
  render(<App />);
  fireEvent.click(screen.getByText(/submit/i));
  const q1 = screen.getByText(/Tell us about yourself/i);
  const q2 = screen.getByText(/Where do you live?/i);
  expect(q1).toBeDefined();
  expect(q2).toBeDefined();
});
