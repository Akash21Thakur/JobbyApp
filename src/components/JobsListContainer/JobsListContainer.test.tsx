import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "mobx-react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import JobsListContainer from ".";
import i18n from "../../i18n";
import { JobsModel } from "../../stores/model/JobsModel";
import { ApiStatus } from "../../stores/types";

jest.mock("query-string", () => ({
  stringify: jest.fn(),
  parse: jest.fn(),
}));

describe("JobListContainer testing", () => {
  test("No jobs is rendered when list is empty", () => {
    const mockJobsStore = {
      jobsList: [],
      apiStatusJobList: ApiStatus.SUCCESS,
      fetchJobsList: jest.fn(),
    };
    render(
      <I18nextProvider i18n={i18n}>
        <Provider jobsStore={mockJobsStore}>
          <JobsListContainer />
        </Provider>
      </I18nextProvider>
    );
    expect(screen.getByTestId("no-jobs-container")).toBeInTheDocument();
    // screen.debug();
  });

  test("test if list renders", () => {
    const mockJobs: JobsModel[] = [
      {
        id: "id1",
        companyLogoUrl: "logoUrl",
        title: "title-of-job",
        rating: 4,
        location: "location1",
        employmentType: "employmentType",
        packagePerAnnum: "packagePerAnnum",
        jobDescription: "jobDescription",
      },
      {
        id: "id2",
        companyLogoUrl: "logoUrl",
        title: "title-of-job",
        rating: 4,
        location: "location1",
        employmentType: "employmentType",
        packagePerAnnum: "packagePerAnnum",
        jobDescription: "jobDescription",
      },
    ];
    const mockJobsStore = {
      jobsList: mockJobs,
      apiStatusJobList: ApiStatus.SUCCESS,
      fetchJobsList: jest.fn(),
    };
    render(
      <MemoryRouter>
        <I18nextProvider i18n={i18n}>
          <Provider jobsStore={mockJobsStore}>
            <JobsListContainer />
          </Provider>
        </I18nextProvider>
      </MemoryRouter>
    );

    // screen.debug();
    const jobs = screen.getAllByTestId(/eachJobCardId/);
    expect(jobs.length).toBe(2);
  });

  test("render Api Failure Component when the api status is failure", () => {
    const mockJobs: JobsModel[] = [];
    const mockJobsStore = {
      jobsList: mockJobs,
      apiStatusJobList: ApiStatus.FAILURE,
      fetchJobsList: jest.fn(),
    };
    render(
      <MemoryRouter>
        <I18nextProvider i18n={i18n}>
          <Provider jobsStore={mockJobsStore}>
            <JobsListContainer />
          </Provider>
        </I18nextProvider>
      </MemoryRouter>
    );

    // screen.debug();

    const jobs = screen.getByTestId("apiFailureTestId");
    expect(jobs).toBeInTheDocument();
  });

  test("render Loader when the api status is loading", () => {
    const mockJobs: JobsModel[] = [];
    const mockJobsStore = {
      jobsList: mockJobs,
      apiStatusJobList: ApiStatus.LOADING,
      fetchJobsList: jest.fn(),
    };
    render(
      <MemoryRouter>
        <I18nextProvider i18n={i18n}>
          <Provider jobsStore={mockJobsStore}>
            <JobsListContainer />
          </Provider>
        </I18nextProvider>
      </MemoryRouter>
    );

    // screen.debug();

    const jobs = screen.getByTestId("loaderTestId");
    expect(jobs).toBeInTheDocument();
  });

  test("render Loader when the api status is initial", () => {
    const mockJobs: JobsModel[] = [];
    const mockJobsStore = {
      jobsList: mockJobs,
      apiStatusJobList: ApiStatus.INITIAL,
      fetchJobsList: jest.fn(),
    };
    render(
      <MemoryRouter>
        <I18nextProvider i18n={i18n}>
          <Provider jobsStore={mockJobsStore}>
            <JobsListContainer />
          </Provider>
        </I18nextProvider>
      </MemoryRouter>
    );

    // screen.debug();

    const jobs = screen.getByTestId("loaderTestId");
    expect(jobs).toBeInTheDocument();
  });

  //   it("renders the list of jobs when jobsList is not empty", () => {
  //     const mockJobs: JobsModel[] = [{
  //         id: 'id',
  //         companyLogoUrl: "logoUrl",
  //         title: "title-of-job",
  //         rating: 4,
  //         location: "location1",
  //         employmentType: "employmentType",
  //         packagePerAnnum: "packagePerAnnum",
  //         jobDescription: "jobDescription",
  //       }];
  //       const mockJobsStore = {
  //         jobsList: mockJobs,
  //         apiStatusJobList: ApiStatus.SUCCESS,
  //         fetchJobsList: jest.fn(),
  //       };
  //     render(
  //         <I18nextProvider i18n={i18n}>
  //           <Provider jobsStore={jobsStore}>
  //             <JobsListContainer />
  //           </Provider>
  //         </I18nextProvider>
  //       );
  //     //   expect(screen.getByTestId("no-jobs-container")).toBeInTheDocument();
  //     //   screen.debug();
  //     });
  //   beforeEach(() => {
  //     // mock the fetch function
  //     global.fetch = jest.fn();
  //   });

  //   afterEach(() => {
  //     jest.clearAllMocks();
  //   });
  //   it('fetches jobs list from API and renders correctly', async () => {
  //     const mockJobsList = [
  //       { id: 1, title: 'Job 1', description: 'Description for Job 1' },
  //       { id: 2, title: 'Job 2', description: 'Description for Job 2' },
  //     ];

  //     global.fetch.mockResponseOnce(JSON.stringify(mockJobsList));

  //     const mockJobsStore = new JobStore();

  //     render(
  //       <I18nextProvider i18n={i18n}>
  //         <Provider jobsStore={mockJobsStore}>
  //           <JobsListContainer />
  //         </Provider>
  //       </I18nextProvider>
  //     );

  //     expect(screen.getByTestId('jobsListRenderId')).toHaveTextContent('Loading...');

  //     await waitFor(() => {
  //       expect(mockJobsStore.jobsList).toEqual(mockJobsList);
  //       expect(screen.getByTestId('jobsListRenderId')).not.toHaveTextContent('Loading...');
  //       expect(screen.getAllByTestId('jobCardTestId')).toHaveLength(mockJobsList.length);
  //     });
  //   });
});
