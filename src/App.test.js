import { render, screen } from "@testing-library/react";
import App from "./App";
import data from "./data.json";

test("renders app without crashing", () => {
  render(<App />);
});

test("loads form fields from data.json", () => {
  expect(data.questions[0].fields).toBeDefined();
  expect(data.questions[1].fields).toBeDefined();
});

test("loads country options from data.json", () => {
  expect(data.questions[1].fields[2].name).toBe("country");
  expect(data.questions[1].fields[2].options).toBeDefined();
});

