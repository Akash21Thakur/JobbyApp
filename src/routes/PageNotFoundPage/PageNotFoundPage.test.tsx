import { render, screen } from "@testing-library/react";
import PageNotFoundPage from ".";

describe("PageNotFoundPage Testing", () => {
  test("check if the wrapper component renders", () => {
    render(<PageNotFoundPage />);

    expect(screen.getByTestId("pageNotFoundPageTestId")).toBeInTheDocument();
  });

  test("check if all the component are rendered", () => {
    render(<PageNotFoundPage />);
    expect(screen.getByText(/Not/)).toBeInTheDocument();
    expect(screen.getByText(/requested/)).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
    );
  });
});
