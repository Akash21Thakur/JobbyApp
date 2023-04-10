import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "mobx-react";
import { I18nextProvider } from "react-i18next";
import SalaryRange from ".";
import i18n from "../../i18n";
import { jobsStore } from "../../stores";

jest.mock("query-string", () => ({
  stringify: jest.fn(),
  parse: jest.fn(),
}));

describe("Salary Range Component Testing", () => {
  test("if Wrapper component is rendered correctly", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Provider jobsStore={jobsStore}>
          <SalaryRange />
        </Provider>
      </I18nextProvider>
    );

    expect(screen.getByTestId("salaryRangeTestId")).toBeInTheDocument();
  });

  test("rendering of the heading of salary range", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Provider jobsStore={jobsStore}>
          <SalaryRange />
        </Provider>
      </I18nextProvider>
    );

    expect(screen.getByText(/Salary Range/)).toBeInTheDocument();
  });

  test("check if 4 radio button is present or not", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Provider jobsStore={jobsStore}>
          <SalaryRange />
        </Provider>
      </I18nextProvider>
    );

    const radioInputs = screen.getAllByRole("radio");
    expect(radioInputs.length).toBe(4);
  });

  test("check if 4 radio button is present or not", () => {
    const jobsStoreMock = {
      updateSalary: jest.fn(),
      fetchJobsList: jest.fn(),
    };
    render(
      <I18nextProvider i18n={i18n}>
        <Provider jobsStore={jobsStoreMock}>
          <SalaryRange />
        </Provider>
      </I18nextProvider>
    );
    const radioButton = screen.getByTestId("radiobutton2");
    fireEvent.click(radioButton);

    expect(jobsStoreMock.updateSalary).toHaveBeenCalledWith("2000000");
  });
});
