import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

test("renders App without crashing", () => {
  render(<App />);
});

test("Renders Contact Form without crashing", () =>{
    const {getByTestId} = render(<ContactForm/>);
    getByTestId(/submitButton/i);
});
