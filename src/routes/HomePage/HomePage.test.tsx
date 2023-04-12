import { render, screen } from "@testing-library/react";
import i18n from "../../i18n";

import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import HomePage from ".";

describe("test home page", () => {
  test("if it renders the Home Page Wrapper component", () => {
    render(
      <MemoryRouter>
        <I18nextProvider i18n={i18n}>
          <HomePage />
        </I18nextProvider>
      </MemoryRouter>
    );

    expect(screen.getByTestId("homePageTestId")).toBeInTheDocument();
  });

  test("if it renders the Home Page all components", () => {
    render(
      <MemoryRouter>
        <I18nextProvider i18n={i18n}>
          <HomePage />
        </I18nextProvider>
      </MemoryRouter>
    );

    expect(screen.getByText(/Find The Job That/)).toBeInTheDocument();
    expect(screen.getByText(/Millions/)).toBeInTheDocument();
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
