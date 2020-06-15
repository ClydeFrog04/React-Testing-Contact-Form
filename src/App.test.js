import React from "react";
import {fireEvent, render} from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
    render(<App/>);
});

test("Should enter some text in the first and last name, and email input fields", async () => {
    const {getByTestId} = render(<App/>);
    const firstName = getByTestId(/firstname/i);
    //add some text to firstName input
    fireEvent.change(firstName, {target: {value: "Randal"}});
    expect(firstName.value).toBe("Randal");
    //expect(firstName.value).toBe("");//making a test that fails on purpose
    fireEvent.focusOut(firstName);//trying to make the errorP show up
    //const errorP = await getByTestId(/firstnameerrp/i);

    //add some text to lastName
    const lastName = getByTestId(/lastname/i);
    fireEvent.change(lastName, {target: {value: "Egan"}});
    expect(lastName.value).toBe("Egan");

    //add some text to the email
    const email = getByTestId(/email/i);
    fireEvent.change(email, {target: {value: "e@g.c"}});
    expect(email.value).toBe("e@g.c");

    const submitButton = getByTestId(/submitButton/i);
    fireEvent.click(submitButton);
    //const returnedSub = await getByTestId(/returnedSubmission/i);//this does not show up either
    //expect(returnedSub).toContain(/randal/i);

});

/*
//example from: https://testing-library.com/docs/react-testing-library/cheatsheet
test('loads items eventually', async () => {
  const { getByText, findByText } = render(<Page />)

  // Click button
  fireEvent.click(getByText('Load'))

  // Wait for page to update with query text
  const items = await findByText(/Item #[0-9]: /)
  expect(items).toHaveLength(10)
})
 */