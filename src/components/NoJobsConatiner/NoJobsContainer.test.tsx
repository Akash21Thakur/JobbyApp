import { render, screen } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import NoJobsContainer from ".";
import i18n from "../../i18n";

describe("render when Api resquest fails", () => {
  const handleRetry = jest.fn();

  test("renders ApiFailureComponent without crashing", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <NoJobsContainer />
      </I18nextProvider>
    );

    // screen.debug();
    expect(screen.getByText("No Jobs Found")).toBeInTheDocument();
    expect(screen.getByText(/We could not find any jobs/)).toBeInTheDocument();
    expect(screen.getByAltText("noJobImg")).toBeInTheDocument();

    // expect(screen.getByText("Retry")).toBeInTheDocument();
  });

  // test("renders ApiFailureComponent without crashing", () => {
  //   render(
  //     <I18nextProvider i18n={i18n}>
  //       <ApiFailureComponent handleRetry={handleRetry} />
  //     </I18nextProvider>
  //   );

  //   expect(screen.getByText("No Jobs Found")).toBeInTheDocument();
  //   expect(screen.getByText(/We could not find any jobs/)).toBeInTheDocument();
  // });

  // test("tests when a retry button is clicked", () => {
  //   render(
  //     <I18nextProvider i18n={i18n}>
  //       <ApiFailureComponent handleRetry={handleRetry} />
  //     </I18nextProvider>
  //   );

  //   const retryButton = screen.getByRole("button");
  //   fireEvent.click(retryButton);
  //   expect(handleRetry).toHaveBeenCalledTimes(1);
  // });
});
