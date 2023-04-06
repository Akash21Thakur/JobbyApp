import { render, screen } from "@testing-library/react";
import { Provider } from "mobx-react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import JobsRightContainer from ".";
import i18n from "../../i18n";
import { jobsStore } from "../../stores";
import { ApiStatus } from "../../stores/types";

jest.mock("query-string", () => ({
  stringify: jest.fn(),
  parse: jest.fn(),
}));

describe("JobsRightContainer", () => {
  test("test if search bar and the jobs List renders ", () => {
    const mockJobsStore = {
        jobsList: [],
        apiStatusJobList: ApiStatus.SUCCESS,
        fetchJobsList: jest.fn(),
      };
    render(
      <MemoryRouter>
        <I18nextProvider i18n={i18n}>
          <Provider jobsStore={mockJobsStore}>
            <JobsRightContainer />
          </Provider>
        </I18nextProvider> 
      </MemoryRouter>
    );
    // screen.debug();
    
    expect(screen.getByTestId('searchBarTestId')).toBeInTheDocument()
    expect(screen.getByTestId('jobsListRenderId')).toBeInTheDocument()

  });
  // expect(screen.)
});
