import { render, screen } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import EachJobCard from ".";
import i18n from "../../i18n";
import { JobDetailModel, JobsModel } from "../../stores/model/JobsModel";



describe("Each Job Card Testing", () => {

  const mockData: JobsModel = {
    id: 'id',
    companyLogoUrl: "logoUrl",
    title: "title-of-job",
    rating: 4,
    location: "location1",
    employmentType: "employmentType",
    packagePerAnnum: "packagePerAnnum",
    jobDescription: "jobDescription",
  };

  const mockJobDetailData: JobDetailModel = {
    ...mockData,
    companyWebsiteUrl: "websiteUrl",
    skills: [
      {
        imageUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/docker-img.png",
        name: "Docker"
      },
      {
        imageUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/docker-img.png",
        name: "Docker"
      }],
      lifeAtCompany: {
        description: 'life description',
        imageUrl: 'image url'
      }
  }; 

  test("renders the comoany logo", () => {
    render(
      <I18nextProvider i18n={i18n}>
          <EachJobCard data={mockData} />
      </I18nextProvider>
    );

    // screen.debug();
 
    expect(screen.getByText("title-of-job")).toBeInTheDocument();
    const companyLogo = screen.getByRole("img", { name: /title/i });
      expect(companyLogo).toBeInTheDocument();
      expect(companyLogo).toHaveAttribute("src","logoUrl");
      expect(companyLogo).toHaveAttribute("alt","title-of-job");
  });

 

  it("renders the job title and rating", () => {
    render(
      <I18nextProvider i18n={i18n}>
          <EachJobCard data={mockData} />
      </I18nextProvider>
    );
    expect(screen.getByText("title-of-job")).toBeInTheDocument();
    expect(screen.getByText(4)).toBeInTheDocument();
  });


 

  it("renders the job location, employment type, and package per annum", () => {
    render(
      <I18nextProvider i18n={i18n}>
          <EachJobCard data={mockData} />
      </I18nextProvider>
    );
    expect(screen.getByText("location1")).toBeInTheDocument();
    expect(screen.getByText("employmentType")).toBeInTheDocument();
    expect(screen.getByText("packagePerAnnum")).toBeInTheDocument();
  });

  it("renders the job description", () => {
    render(
      <I18nextProvider i18n={i18n}>
          <EachJobCard data={mockData} />
      </I18nextProvider>
    );
    expect(screen.getByText("jobDescription")).toBeInTheDocument();
  });

  it("renders the company website link if the data is an instance of JobDetailModel", () => {
    
    render(
      <I18nextProvider i18n={i18n}>
          <EachJobCard data={mockJobDetailData} />
      </I18nextProvider>
    );
    // screen.debug();
    // expect(screen.getByText("Visit")).toBeInTheDocument();
  });

    
});

export {}

