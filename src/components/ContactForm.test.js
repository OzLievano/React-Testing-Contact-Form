import React from 'react'
import ContactForm from './ContactForm'
import { render, screen, fireEvent } from "@testing-library/react";


test("renders App without crashing", () => {
    render(<ContactForm />);
  });


test("user can fill out and submit the form", async () => {
    render(<ContactForm/>)

    // get label by text gets the inner text 
    const name = screen.getByLabelText(/First Name*/i)
    // const name = screen.getByPlaceholderText(/edd/i)
    // expect(name).toBeTruthy();

    console.log(name)
    
    fireEvent.change(name,{target:{value:"ozzy"}})
    expect(name).toHaveValue('ozzy')
})