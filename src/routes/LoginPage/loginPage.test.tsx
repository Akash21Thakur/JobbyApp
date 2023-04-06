import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import LoginPage from "./index";


jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe("Login Route", () => {
  test("should render username and password input fields", () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );
    // screen.debug();
    const usernameInput = getByLabelText(/username/);

    expect(usernameInput).toBeInTheDocument();
  });

  it("should update username and password input fields when changed", () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );
    const usernameInput = getByLabelText("username");
    const passwordInput = getByLabelText("password");
    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });
    expect(usernameInput).toHaveValue("testuser");
    expect(passwordInput).toHaveValue("testpassword");
  });

  it("should submit the login form when submit button is clicked", () => {
    const { getByLabelText, getByRole } = render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );
    const usernameInput = getByLabelText("username");
    const passwordInput = getByLabelText("password");
    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });
    const submitButton = getByRole("button", { name: "login" });
    fireEvent.click(submitButton);
  });

  test("toggles password visibility when 'show password' checkbox is checked", () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    // Find the checkbox and password inputs
    const checkbox = screen.getByLabelText("showPassword");
    const passwordInput = screen.getByLabelText("password");

    // Check that the password input's type attribute is "text"
    expect(passwordInput).toHaveAttribute("type", "password");

    // Click the checkbox again
    fireEvent.click(checkbox);

    // Check that the password input's type attribute is "password" again
    expect(passwordInput).toHaveAttribute("type", "text");
  });
});

export {};
