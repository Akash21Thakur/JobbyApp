import { render, screen } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import SimilarJobsList from ".";
import i18n from "../../i18n";
import { JobsModel } from "../../stores/model/JobsModel";

describe("SimilarJobsList Testing", () => {
  beforeEach(() => {
    const mockData: JobsModel[] = [
      {
        companyLogoUrl:
          "https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png",
        employmentType: "Freelance",
        id: "2b40029d2-e5a5-48cc-84a6-b6e12d25625d",
        jobDescription:
          "The Experimentation Platform team builds internal tools with a big impact across the company. We are looking to add a UI engineer to our team to continue to improve our experiment analysis workflow and tools. Ideal candidates will be excited by direct contact with our users, fast feedback, and quick iteration.",
        location: "Delhi",
        rating: 4,
        title: "Frontend Engineer",
        packagePerAnnum: "10 LPA",
      },
      {
        companyLogoUrl:
          "https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png",
        employmentType: "Freelance",
        id: "2b40029ewdd-e5a5-48cc-84a6-b6e12d25625d",
        jobDescription:
          "The Experimentation Platform team builds internal tools with a big impact across the company. We are looking to add a UI engineer to our team to continue to improve our experiment analysis workflow and tools. Ideal candidates will be excited by direct contact with our users, fast feedback, and quick iteration.",
        location: "Delhi",
        rating: 4,
        title: "Frontend Engineer",
        packagePerAnnum: "10 LPA",
      },
      {
        companyLogoUrl:
          "https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png",
        employmentType: "Freelance",
        id: "2b40029d-e5a5-48cc-84a6-b6e12d25625d",
        jobDescription:
          "The Experimentation Platform team builds internal tools with a big impact across the company. We are looking to add a UI engineer to our team to continue to improve our experiment analysis workflow and tools. Ideal candidates will be excited by direct contact with our users, fast feedback, and quick iteration.",
        location: "Delhi",
        rating: 4,
        title: "Frontend Engineer",
        packagePerAnnum: "10 LPA",
      },
    ];
    render(
      <MemoryRouter>
        <I18nextProvider i18n={i18n}>
          <SimilarJobsList data={mockData} />
        </I18nextProvider>
      </MemoryRouter>
    );
  });

  test("check if heading rendered", () => {
    // screen.debug();
    expect(screen.getByText(/Similar Jobs/)).toBeInTheDocument();
  });

  test("test the number of card rendered", () => {
    const similarJobsCard = screen.getAllByTestId(/similarJobCardTestid/);
    expect(similarJobsCard.length).toBe(3);
  });
});
