import React from "react";
import {fireEvent, render} from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";
import {act} from "react-dom/test-utils";

test("renders App without crashing", () => {
    render(<App/>);
});

test("Should enter some text in the first and last name input fields", () => {
    const {getByTestId, getByDisplayValue} = render(<App/>);
    const firstName = getByTestId(/firstname/i);
    //add some text to firstName input
    fireEvent.change(firstName, {target: {value: "Randal"}});
    expect(firstName.value).toBe("Randal");
    fireEvent.focusOut(firstName);

    //add some text to lastName
    const lastName = getByTestId(/lastname/i);
    fireEvent.change(lastName, {target: {value: "Egan"}});
    expect(lastName.value).toBe("Egan");

    act(() => {
        const submitButton = getByTestId(/submitButton/i);
        fireEvent.click(submitButton);
    });
    expect(firstName.value).toBe("");
    //const errorP = getByTestId(/firstnameerrp/i);

});