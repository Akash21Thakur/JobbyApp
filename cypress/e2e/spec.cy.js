import "cypress-react-selector";
import { PROFILE_API } from "../constants/apiConstants";

describe("template spec", () => {
  afterEach(() => {
    // cy.wait(1000);
  });
  it("logs in successfully", () => {
    cy.visit("http://localhost:3004/login");
 
    cy.findByTestId("usernameInputTestId").type("rahul");
    cy.findByTestId("passwordInputTestId").type("rahul@2021"); // enter password
    cy.findByTestId("loginSubmitTestId").click(); // click on the submit button

    // cy.go(-1);
    // cy.url().should("include", "http://localhost:3004"); // assert that the URL includes the dashboard path
    // cy.findByTestId('findJobButton').should('contain', 'Find Jobs') // assert that the welcome message is displayed
  });
  it("Error meassage when invalid credential", () => {
    cy.visit("http://localhost:3004/login");

    cy.findByTestId("usernameInputTestId").type("rahul"); // enter username
    cy.findByTestId("passwordInputTestId").type("rahul @2021"); // enter password
    cy.findByTestId("loginSubmitTestId").click(); // click on the submit button

    // cy.url().should("include", "http://localhost:3004"); // assert that the URL includes the dashboard path
    // cy.findByTestId('findJobButton').should('contain', 'Find Jobs') // assert that the welcome message is displayed
  });

  it("Move to jobs page on Jobs nav click", () => {
    cy.visit("http://localhost:3004");

    cy.contains("Jobs").click();
    cy.url().should("include", "http://localhost:3004/jobs");
  });

  it("Move to Home Page when Home is Clicked ", () => {
    cy.visit("http://localhost:3004");

    cy.contains("Home").click();
    cy.url().should("include", "http://localhost:3004");
  });

  it("Move to Jobs Page when Find Jobs is Clicked", () => {
    cy.visit("http://localhost:3004");

    cy.findByTestId("findJobButton").click(); // assert that the welcome message is displayed
    cy.url().should("include", "http://localhost:3004/jobs");
  });

  it("Move to Login Page when Logout is Clicked", () => {
    cy.visit("http://localhost:3004/jobs");
    cy.contains("Logout").click();
    cy.url().should("include", "http://localhost:3004/login");
  });
});

describe("jobs page testing", () => {
  beforeEach(() => {
    cy.intercept("GET", PROFILE_API, {
      fixture: "userProfileDetails",
    }).as("getUserDetails");
    cy.visit("http://localhost:3004/jobs");
    cy.wait(500);
  });
  it("Fetch User Details", () => {
    cy.wait("@getUserDetails");
    cy.contains("Rahul Attuluri").should("exist");
  });
});

// describe("fetch jobs List with different query params", () => {
//   beforeEach(() => {
//     cy.intercept("GET", "https://example.com/api/data", (req) => {
//       const params = new URLSearchParams(req.url.split("?")[1]);
//       const type = params.get("type");
//       const limit = params.get("limit");
//       const offset = params.get("offset");

//       if (type === "users") {
//         req.reply({
//           status: 200,
//           body: { data: [{ name: "Alice" }, { name: "Bob" }] },
//         });
//       } else if (type === "posts") {
//         req.reply({
//           status: 200,
//           body: { data: [{ title: "Post 1" }, { title: "Post 2" }] },
//         });
//       } else {
//         req.reply({ status: 404, body: { message: "Not found" } });
//       }
//     }).as("getData");
//   });
// });

describe("Job list", () => {
  it("should fetch and display the job list", () => {
    cy.intercept(
      "GET",
      "https://apis.ccbp.in/jobs?employment_type=&minimum_package&search=",
      {
        fixture: "jobsList",
      }
    ).as("getJobsList");

    cy.visit("http://localhost:3004/jobs");

    cy.wait("@getJobsList");
    // cy.wait(1000);
    // cy.findByTestId(/eachJobCardIdd6019453-f864-4a2f-8230-6a9642a59466/i).should("have.length", 1);
  });

  it("Move to Login Page when Logout is Clicked", () => {
    cy.visit("http://localhost:3004/invalid_url");
    cy.findByTestId("pageNotFound").should("exist");
  });
});

describe("Job Card Details", () => {
  it("displays job details when a card is clicked", () => {
    cy.intercept("GET", "https://apis.ccbp.in/jobs/*", {
      fixture: "jobDetails",
    }).as("getJobDetails");

    cy.intercept(
      "GET",
      "https://apis.ccbp.in/jobs?employment_type=&minimum_package&search=",
      {
        fixture: "jobsList",
      }
    ).as("getJobsList");

    cy.visit("http://localhost:3004/jobs");

    cy.wait(500);

    cy.findAllByTestId(/eachJobCardId*/i)
      .first()
      .click();
    cy.contains(/Similar Jobs/i);
    // cy.get("[data-testid='jobCard']").first().click();
    // cy.wait("@getJobDetails");
    //cy.get(':nth-child(1) > [data-testid="eachJobCardIdd6019453-f864-4a2f-8230-6a9642a59466"]')
    // cy.url().should("contain", "/jobs/");
    // cy.findByText("Job Details").should("exist");
    // cy.findByText("Job Title").should("exist");
    // cy.findByText("Company").should("exist");
    // assert other job details
  });

  it("click on similar jobs to move to its detail route", () => {
    cy.intercept("GET", "https://apis.ccbp.in/jobs/*", {
      fixture: "jobDetails",
    }).as("getJobDetails");

    cy.visit("http://localhost:3004/jobs/214");
    //cy.get('[data-testid="similarJobCardTestid0"] > [data-testid="eachJobCardId2b40029d-e5a5-48cc-84a6-b6e12d25625d"]')
    const jobCards = cy.findAllByTestId(/eachJobCardId*/i);
    jobCards.should("have.length", 4);
    jobCards.eq(2).click();
    // cy.url().should("include", "http://localhost:3004/jobs/*");
    // check if the current URL matches a specific URL
    cy.url().should(
      "eq",
      "http://localhost:3004/jobs/2b40029d-e5a5-48cc-84a6-b6e12d25625d"
    );
  });

  it("check if the jobsList is returned when the user check on employment types", () => {
    cy.intercept(
      "GET",
      // "https://apis.ccbp.in/jobs?employment_type=FULLTIME&minimum_package&search=",

      "https://apis.ccbp.in/jobs?employment_type=FULLTIME&minimum_package&search=",
      {
        fixture: "jobsList",
      }
    ).as("getJobsList");

    cy.visit("http://localhost:3004/jobs");

    const fullTimeType = cy.findByText(/full time/i);
    fullTimeType.click();
  });

  it("check if the jobsList is returned when the user selects a salary range", () => {
    cy.intercept(
      "GET",
      // "https://apis.ccbp.in/jobs?employment_type=FULLTIME&minimum_package&search=",
      "https://apis.ccbp.in/jobs?employment_type=&minimum_package=3000000&search=",
      {
        fixture: "jobsList",
      }
    ).as("getJobsList");

    cy.visit("http://localhost:3004/jobs");
    // screen.getByText

    const salaryRange = cy.findByText(/30 lpa and above/i);
    salaryRange.click();
  });

  



  it("check if the jobsList is returned based on search text", () => {
    cy.intercept(
      "GET",
      "https://apis.ccbp.in/jobs?employment_type=&minimum_package&search=Frontend",
      // "https://apis.ccbp.in/jobs?employment_type=FULLTIME&minimum_package&search=",
      // "https://apis.ccbp.in/jobs?employment_type=&minimum_package=3000000&search=",
      {
        fixture: "jobsList",
      }
    ).as("getJobsList");

    cy.visit("http://localhost:3004/jobs");
    // screen.getByTextcy.get('[data-testid="searchInputTestId"]')
    // cy.get('.sc-dxroEu')

    const searchBox = cy.findByTestId("searchInputTestId");
    searchBox.type("Frontend");
    cy.findByTestId('searchIconTestId').click();

  });


  it("check if the jobsList is returned by search text, employment type and salary range", () => {
    cy.intercept(
      "GET",
      "https://apis.ccbp.in/jobs?employment_type=FULLTIME&minimum_package=1000000&search=Frontend",
      // "https://apis.ccbp.in/jobs?employment_type=FULLTIME&minimum_package&search=",
      // "https://apis.ccbp.in/jobs?employment_type=&minimum_package=3000000&search=",
      {
        fixture: "jobsList",
      }
    ).as("getJobsList");

    cy.visit("http://localhost:3004/jobs");
    // screen.getByTextcy.get('[data-testid="searchInputTestId"]')
    // cy.get('.sc-dxroEu')

    const fullTimeType = cy.findByText(/full time/i);
    fullTimeType.click();

    
    
    
    const searchBox = cy.findByTestId("searchInputTestId");
    searchBox.type("Frontend");
    cy.findByTestId('searchIconTestId').click();
    const salaryRange = cy.findByText(/10 lpa and above/i);
    salaryRange.click();

  });

  // test
});
