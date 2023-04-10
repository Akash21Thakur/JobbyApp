import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "mobx-react";
import { I18nextProvider } from "react-i18next";
import EmploymentType from ".";
import i18n from "../../i18n";
import { jobsStore } from "../../stores";

// mock for qs
jest.mock("query-string", () => ({
  stringify: jest.fn(),
  parse: jest.fn(),
}));

describe("test for the various employment types", () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <Provider jobsStore={jobsStore}>
          <EmploymentType />
        </Provider>
      </I18nextProvider>
    );
  });

  test("check if Employment type renders", () => {
    expect(screen.getByTestId("employmentTypesId")).toBeInTheDocument();
  });

  test("renders checkboxes with correct labels and values", () => {
    const checkboxes = screen.getAllByRole("checkbox");

    expect(checkboxes).toHaveLength(4);

    expect(checkboxes[0]).toHaveAttribute("value", "FULLTIME");
    expect(checkboxes[1]).toHaveAttribute("value", "PARTTIME");
    expect(checkboxes[2]).toHaveAttribute("value", "FREELANCE");
    expect(checkboxes[3]).toHaveAttribute("value", "INTERNSHIP");

    fireEvent.change(checkboxes[0]);
  });

  test("renders checkboxes with correct labels and values", () => {
    const jobsStoreMock = {
      salary: "0to3",
      updateSalary: jest.fn(),
      fetchJobsList: jest.fn(),
    };
    const checkboxes = screen.getAllByRole("checkbox");

    expect(checkboxes).toHaveLength(4);

    expect(checkboxes[0]).toHaveAttribute("value", "FULLTIME");
    expect(checkboxes[1]).toHaveAttribute("value", "PARTTIME");
    expect(checkboxes[2]).toHaveAttribute("value", "FREELANCE");
    expect(checkboxes[3]).toHaveAttribute("value", "INTERNSHIP");

    fireEvent.change(checkboxes[0]);
  });
});


describe("test for the various employment types", () => {

  beforeEach(() => {
    
  });

  

  test("renders checkboxes with correct labels and values", () => {
    const jobsStoreMock = {
      selectedEmployment: new Set(),
      updateEmploymentList: jest.fn(),
      fetchJobsList: jest.fn(),
    };

    render(
      <I18nextProvider i18n={i18n}>
        <Provider jobsStore={jobsStoreMock}>
          <EmploymentType />
        </Provider>
      </I18nextProvider>
    );

    const checkbox2=screen.getByTestId('checkbox3')
    expect(checkbox2).toBeInTheDocument();

    fireEvent.change(checkbox2) ;
    // expect(jobsStoreMock.updateEmploymentList).toHaveBeenCalled();
    
  });
});
