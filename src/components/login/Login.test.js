import {getByTestId, render,screen,fireEvent } from '@testing-library/react';
import Login from './Login';





test('looking for data in username field',()=>{
    render(<Login />);
    const title=screen.getByTestId('button').textContent;
    expect(title).toBe("Login");

})

test('looking for data in h2 field',()=>{
    render(<Login />);
    const title=screen.getByRole("h2").textContent;
    expect(title).toBe("LOGIN FORM");

})

test('looking for data in placeholder field',()=>{
    render(<Login />);
    const title=screen.getByPlaceholderText("username");
    expect(title.value).toBe("");
})


test("looking for button to be disabled ",()=>{
    render(<Login />);
    const button=screen.getByRole("button");
    expect(button).toBeDisabled();
})

test("looking to test fireevent",()=>{
    render(<Login />);
    const val=screen.getByPlaceholderText("username");
    fireEvent.change(val, {target: {value: "a"}});
    console.log(val.value);
    expect(val.value).toBe("a");
});


//tests while fetching data is going wrong 
//didnt understand this properly need to be revised 
test("button should not be disabled when inputs exist", () => {
    render(<Login />);
    const buttonEl = screen.getByRole("button");
    const usernameInputEl = screen.getByPlaceholderText(/username/i);
    const passwordInputEl = screen.getByPlaceholderText(/password/i);
  
    const testValue = "test";
  
    fireEvent.change(usernameInputEl, { target: { value: testValue } });
    fireEvent.change(passwordInputEl, { target: { value: testValue } });
  
    expect(buttonEl).not.toBeDisabled();
  });