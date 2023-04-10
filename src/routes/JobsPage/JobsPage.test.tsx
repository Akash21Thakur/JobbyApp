import { render, screen } from "@testing-library/react";
import { Provider } from "mobx-react";
import { I18nextProvider } from "react-i18next";
import JobsPage from ".";
import i18n from "../../i18n";
import { jobsStore } from "../../stores";

jest.mock("query-string", () => ({
  stringify: jest.fn(),
  parse: jest.fn(),
}));

describe("Job Page Testing", () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <Provider jobsStore={jobsStore}>
          <JobsPage />
        </Provider>
      </I18nextProvider>
    );
  });
  test("check wrapper component of the Job Page is rendered", () => {
    expect(screen.getByTestId("jobPageTestId")).toBeInTheDocument();
  });

  test("check if left component of the Job Page is rendered", () => {
    expect(screen.getByTestId("jobsLeftContainerTestId")).toBeInTheDocument();
  });

  test("check if right component of the Job Page is rendered", () => {
    expect(screen.getByTestId("jobRightContainerTestId")).toBeInTheDocument();
  });
});
