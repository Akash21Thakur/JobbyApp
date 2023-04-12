import { render, screen } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import RetryButton from ".";
import i18n from "../../../i18n";

describe("Retry Button Testing", () => {
  const handleRetry = jest.fn();

  test("renders ApiFailureComponent without crashing", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <RetryButton handleButtonClick={handleRetry} />
      </I18nextProvider>
    );

    expect(screen.getByTestId("retryButton")).toBeInTheDocument();
  });
});
