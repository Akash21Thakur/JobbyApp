import { render, screen } from "@testing-library/react";
import { Provider } from "mobx-react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import JobsDetailPage from ".";
import i18n from "../../i18n";
import { jobsStore } from "../../stores";
import JobStore from "../../stores/jobStore";
import { JobDataModel, JobDetailModel } from "../../stores/model/JobsModel";
import { ApiStatus } from "../../stores/types";

jest.mock("query-string", () => ({
  stringify: jest.fn(),
  parse: jest.fn(),
}));

describe("Jobs Detail Page Testing", () => {
  const mockData = {
    jobDetails: {
      companyLogoUrl:
        "https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png",
      companyWebsiteUrl: "https://about.netflix.com/en",
      employmentType: "Internship",
      id: "bb95e51b-b1b2-4d97-bee4-1d5ec2b96751",
      jobDescription:
        "We are looking for a DevOps Engineer with a minimum of 5 years of industry experience, preferably working in the financial IT community. The position in the team is focused on delivering exceptional services to both BU and Dev",
      title: "",
      skills: [
        {
          imageUrl:
            "https://assets.ccbp.in/frontend/react-js/jobby-app/docker-img.png",
          name: "Docker",
        },
        {
          imageUrl:
            "https://assets.ccbp.in/frontend/react-js/jobby-app/docker-img.png",
          name: "Docker",
        },
        {
          imageUrl:
            "https://assets.ccbp.in/frontend/react-js/jobby-app/docker-img.png",
          name: "Docker",
        },
        {
          imageUrl:
            "https://assets.ccbp.in/frontend/react-js/jobby-app/docker-img.png",
          name: "Docker",
        },
        {
          imageUrl:
            "https://assets.ccbp.in/frontend/react-js/jobby-app/docker-img.png",
          name: "Docker",
        },
      ],
      lifeAtCompany: {
        description:
          "Our core philosophy is people over process. Our culture has been instrumental to our success. It has helped us attract and retain stunning colleagues, making work here more satisfying. Entertainment, like friendship, is a fundamental human need, and it changes how we feel and gives us common ground. We want to entertain the world.",
        imageUrl:
          "https://assets.ccbp.in/frontend/react-js/jobby-app/life-netflix-img.png",
      },
      location: "Delhi",
      packagePerAnnum: "10 LPA",
      rating: 4,
    },
    similarJobs: [
      {
        companyLogoUrl:
          "https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png",
        companyWebsiteUrl: "https://about.netflix.com/en",
        employmentType: "Internship",
        id: "bb95e51b-b1b2-4d97-bee4-1d5ec2b96751",
        jobDescription:
          "We are looking for a DevOps Engineer with a minimum of 5 years of industry experience, preferably working in the financial IT community. The position in the team is focused on delivering exceptional services to both BU and Dev",
        title: "",
        location: "Delhi",
        rating: 4,
        packagePerAnnum: "10 LPA",
      },
      {
        companyLogoUrl:
          "https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png",
        companyWebsiteUrl: "https://about.netflix.com/en",
        employmentType: "Internship",
        id: "bb95e5s1b-b1b2-4d97-bee4-1d5ec2b96751",
        jobDescription:
          "We are looking for a DevOps Engineer with a minimum of 5 years of industry experience, preferably working in the financial IT community. The position in the team is focused on delivering exceptional services to both BU and Dev",
        title: "",
        location: "Delhi",
        rating: 4,
        packagePerAnnum: "10 LPA",
      },
    ],
  };
  const mockStore = {
    jobData: mockData,
    apiStatusJobDetails: ApiStatus.SUCCESS,
    fetchJobDetails: jest.fn(),
  };
  test("check if the 2 component JobDetailContainer and SimilarJobsList renders or not on SUCCESS", () => {
    render(
      <MemoryRouter>
        <I18nextProvider i18n={i18n}>
          <Provider jobsStore={mockStore}>
            <JobsDetailPage />
          </Provider>
        </I18nextProvider>
      </MemoryRouter>
    );
    // screen.debug();
    const jobCards = screen.getAllByTestId(/eachJobCardId/);
    expect(jobCards.length).toBe(3);
    const similarJobCard = screen.getAllByTestId(/similarJobCardTest/);
    expect(similarJobCard.length).toBe(2);
    //   expect(screen.getByTestId('homePageTestId')).toBeInTheDocument();
  });

  test("render Failure view when the status is FAILURE", () => {
    const changeAPI = {
      ...mockStore,
      apiStatusJobDetails: ApiStatus.FAILURE,
    };
    render(
      <MemoryRouter>
        <I18nextProvider i18n={i18n}>
          <Provider jobsStore={changeAPI}>
            <JobsDetailPage />
          </Provider>
        </I18nextProvider>
      </MemoryRouter>
    );

    expect(screen.getByTestId("apiFailureTestId")).toBeInTheDocument();
  });

  test("render Loader when the status is LOADING", () => {
    const changeAPI = {
      ...mockStore,
      apiStatusJobDetails: ApiStatus.LOADING,
    };
    render(
      <MemoryRouter>
        <I18nextProvider i18n={i18n}>
          <Provider jobsStore={changeAPI}>
            <JobsDetailPage />
          </Provider>
        </I18nextProvider>
      </MemoryRouter>
    );

    expect(screen.getByTestId("loaderTestId")).toBeInTheDocument();
  });

  test("render Loader when the status is INITIAL", () => {
    const changeAPI = {
      ...mockStore,
      apiStatusJobDetails: ApiStatus.INITIAL,
    };
    render(
      <MemoryRouter>
        <I18nextProvider i18n={i18n}>
          <Provider jobsStore={changeAPI}>
            <JobsDetailPage />
          </Provider>
        </I18nextProvider>
      </MemoryRouter>
    );

    expect(screen.getByTestId("loaderTestId")).toBeInTheDocument();
  });
});
