import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import i18n from "../../i18n";

import LoginPage from "./index";

describe("Login Route", () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </I18nextProvider>
    );
  });
  test("should render username and password input fields", () => {
    // screen.debug();
    const usernameInput = screen.getByTestId("usernameInputTestId");

    expect(usernameInput).toBeInTheDocument();
  });

  it("should update username and password input fields when changed", () => {
    const usernameInput = screen.getByTestId("usernameInputTestId");
    const passwordInput = screen.getByTestId("passwordInputTestId");
    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });
    expect(usernameInput).toHaveValue("testuser");
    expect(passwordInput).toHaveValue("testpassword");
  }); 

  it("should submit the login form when submit button is clicked", () => {
    const usernameInput = screen.getByTestId("usernameInputTestId");
    const passwordInput = screen.getByTestId("passwordInputTestId");
    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });
    const submitButton = screen.getByTestId('loginSubmitTestId');
    fireEvent.click(submitButton);
  });

  test("toggles password visibility when 'show password' checkbox is checked", () => {
    // Find the checkbox and password inputs
    const checkbox = screen.getByTestId("showPasswordInputTestId");
    const passwordInput = screen.getByTestId("passwordInputTestId");

    // Check that the password input's type attribute is "text"
    expect(passwordInput).toHaveAttribute("type", "password");

    // Click the checkbox again
    fireEvent.click(checkbox);

    // Check that the password input's type attribute is "password" again
    expect(passwordInput).toHaveAttribute("type", "text");
  });
});
