import { render, screen } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import NoJobsContainer from ".";
import i18n from "../../i18n";

describe("render when No Job Container", () => {
  

  test("renders ApiFailureComponent without crashing", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <NoJobsContainer />
      </I18nextProvider>
    );

    expect(screen.getByText("No Jobs Found")).toBeInTheDocument();
    expect(screen.getByText(/We could not find any jobs/)).toBeInTheDocument();
    expect(screen.getByAltText("noJobImg")).toBeInTheDocument();

  });
});
