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

// Unit test async events using fireEvent with findByRole
// findByRole is not usually necessary for headings
test("check questions are defined", async () => {
  render(<App />);
  fireEvent.click(screen.getByText(/submit/i));
  const question1 = await screen.findByRole("question1");
  const question2 = await screen.findByRole("question2");
  expect(question1).toBeDefined();
  expect(question2).toBeDefined();
});
