import { render, screen } from "@testing-library/react";
import { Provider } from "mobx-react";
import { I18nextProvider } from "react-i18next";
import JobsLeftContainer from ".";
import i18n from "../../i18n";
import { jobsStore } from "../../stores";

jest.mock("query-string", () => ({
    stringify: jest.fn(),
    parse: jest.fn(),
  }));

describe("Jobs List Left COntainer", () => {
  it("check if all the components are rendered", () => {
    render(
      <I18nextProvider i18n={i18n}>
      <Provider jobsStore={jobsStore}>
        <JobsLeftContainer />
      </Provider> 
      </I18nextProvider>
    );
    // screen.debug();

    expect(screen.getByTestId('jobsLeftContainerTestId')).toBeInTheDocument();
    expect(screen.getByTestId('loaderTestId')).toBeInTheDocument();
    expect(screen.getByTestId('employmentTypesId')).toBeInTheDocument();
    expect(screen.getByTestId('salaryRangeTestId')).toBeInTheDocument();
 


  }); 
});
