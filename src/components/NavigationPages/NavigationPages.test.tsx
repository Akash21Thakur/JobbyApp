import { render, screen } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import NavigationPages from ".";
import i18n from "../../i18n";

describe("NavigationPages Component", () => {
  test("test if navigation items are rendered", () => {
    render(
      <MemoryRouter>
        <I18nextProvider i18n={i18n}>
          <NavigationPages />
        </I18nextProvider>
      </MemoryRouter>
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Jobs")).toBeInTheDocument();
  });

  test("check if it containes 2 anchor tag", () => {
    render(
      <MemoryRouter>
        <I18nextProvider i18n={i18n}>
          <NavigationPages />
        </I18nextProvider>
      </MemoryRouter>
    );

    expect(screen.getByTestId("homeNavigationId")).toHaveAttribute("href", "/");
    expect(screen.getByTestId("jobsNavigationId")).toHaveAttribute(
      "href",
      "/jobs"
    );
  });
});
