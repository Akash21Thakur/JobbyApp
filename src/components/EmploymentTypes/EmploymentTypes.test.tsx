import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "mobx-react";
import { I18nextProvider } from "react-i18next";
import EmploymentType from ".";
import i18n from "../../i18n";
import { jobsStore } from "../../stores";

// In your test file
jest.mock("query-string", () => ({
  stringify: jest.fn(),
  parse: jest.fn(),
}));

describe("test for the various employment types", () => {
  test("check if Employment type renders", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Provider jobsStore={jobsStore}>
          <EmploymentType />
        </Provider>
      </I18nextProvider>
    );

    // screen.debug();
  });

  test("renders checkboxes with correct labels and values", () => {
      const handleClick = jest.fn();
    render(
      <I18nextProvider i18n={i18n}>
        <Provider jobsStore={jobsStore} >
          <EmploymentType  />
        </Provider>
      </I18nextProvider>
    );
    const checkboxes = screen.getAllByRole("checkbox");

    expect(checkboxes).toHaveLength(4);

    expect(checkboxes[0]).toHaveAttribute("value", "FULLTIME");
    expect(checkboxes[1]).toHaveAttribute("value", "PARTTIME");
    expect(checkboxes[2]).toHaveAttribute("value", "FREELANCE");
    expect(checkboxes[3]).toHaveAttribute("value", "INTERNSHIP");

    // const checkboxes = screen.getAllByRole("checkbox");
    fireEvent.click(checkboxes[0]);
    // expect(handleClick).toHaveBeenCalledTimes(1);
    //   expect(onChange).toHaveBeenCalledWith("FULLTIME");

    //   fireEvent.click(checkboxes[1]);
  });


});
