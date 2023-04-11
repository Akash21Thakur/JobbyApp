import "cypress-react-selector";
import { PROFILE_API } from "../constants/apiConstants";

describe("template spec", () => {
  // beforeEach(()=>{
  //   cy.intercept('POST', '/api/login', (req) => {
  //     req.reply((res) => {
  //       if (res.body.username === 'correct_username' && res.body.password === 'correct_password') {
  //         res.send({ status: 'success', message: 'Login successful' })
  //       } else {
  //         res.send({ status: 'error', message: 'Invalid username or password' })
  //       }
  //     })
  //   })
  // })
  // it("logs in successfully", () => {
  //   cy.visit("http://localhost:3004/login");

  //   cy.findByTestId("usernameInputTestId").type("rahul");
  //   cy.findByTestId("passwordInputTestId").type("rahul@2021"); // enter password
  //   cy.findByTestId("loginSubmitTestId").click(); // click on the submit button
  //   cy.wait(1000);
  // });
  // it("Error meassage when invalid credential", () => {
  //   cy.visit("http://localhost:3004/login");

  //   cy.findByTestId("usernameInputTestId").type("rahul"); // enter username
  //   cy.findByTestId("passwordInputTestId").type("rahul @2021"); // enter password
  //   cy.findByTestId("loginSubmitTestId").click(); // click on the submit button
  // });

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
  });

  it("click on similar jobs to move to its detail route", () => {
    cy.intercept("GET", "https://apis.ccbp.in/jobs/*", {
      fixture: "jobDetails",
    }).as("getJobDetails");

    cy.visit("http://localhost:3004/jobs/214");
    const jobCards = cy.findAllByTestId(/eachJobCardId*/i);
    jobCards.should("have.length", 4);
    jobCards.eq(2).click();
    cy.url().should(
      "eq",
      "http://localhost:3004/jobs/2b40029d-e5a5-48cc-84a6-b6e12d25625d"
    );
  });

  it("check if the jobsList is returned when the user check on employment types", () => {
    cy.intercept(
      "GET",
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
      "https://apis.ccbp.in/jobs?employment_type=&minimum_package=3000000&search=",
      {
        fixture: "jobsList",
      }
    ).as("getJobsList");

    cy.visit("http://localhost:3004/jobs");

    const salaryRange = cy.findByText(/30 lpa and above/i);
    salaryRange.click();
  });

  it("check if the jobsList is returned based on search text", () => {
    cy.intercept(
      "GET",
      "https://apis.ccbp.in/jobs?employment_type=&minimum_package&search=Frontend",
      {
        fixture: "jobsList",
      }
    ).as("getJobsList");

    cy.visit("http://localhost:3004/jobs");

    const searchBox = cy.findByTestId("searchInputTestId");
    searchBox.type("Frontend");
    cy.findByTestId("searchIconTestId").click();
  });

  it("check if the jobsList is returned by search text, employment type and salary range", () => {
    cy.intercept(
      "GET",
      "https://apis.ccbp.in/jobs?employment_type=FULLTIME&minimum_package=1000000&search=Frontend",
      {
        fixture: "jobsList",
      }
    ).as("getJobsList");

    cy.visit("http://localhost:3004/jobs");

    const fullTimeType = cy.findByText(/full time/i);
    fullTimeType.click();

    const salaryRange = cy.findByText(/10 lpa and above/i);
    salaryRange.click();

    const searchBox = cy.findByTestId("searchInputTestId");
    searchBox.type("Frontend");
    cy.findByTestId("searchIconTestId").click();
  });
});

describe("login test", () => {
 
  it("logs in successfully", () => {
   
    cy.visit("http://localhost:3004/login");
    // cy.findByTestId('formSubmitTestId').submit(onSubmitMock)

    cy.findByTestId("usernameInputTestId").type("rahul");
    cy.findByTestId("passwordInputTestId").type("rahul@2021"); // enter password
    cy.findByTestId("loginSubmitTestId").click(); // click on the submit button
    cy.url().should("eq", "http://localhost:3004/");
  });

  it("logs in failure", () => {
   
    cy.visit("http://localhost:3004/login");
    // cy.findByTestId('formSubmitTestId').submit(onSubmitMock)

    cy.findByTestId("usernameInputTestId").type("rahul");
    cy.findByTestId("passwordInputTestId").type("rahul215@2021"); // enter password
    cy.findByTestId("loginSubmitTestId").click(); // click on the submit button
    // cy.url().should("eq", "http://localhost:3004/");
    cy.findByTestId("errorMsgTestId").should('exist');
  });

});

describe("Login page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3004/login");
  });

  it("successfully logs in", () => {
    cy.intercept("POST", "https://apis.ccbp.in/login", {
      statusCode: 200,
      body: {
        jwt_token: "some_jwt_token",
      },
    }).as("loginRequest");

    cy.findByTestId("usernameInputTestId").type("rahul");
    cy.findByTestId("passwordInputTestId").type("rahul @2021");
    cy.findByTestId("loginSubmitTestId").click();

    cy.wait("@loginRequest").then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
    });
    cy.url().should("eq", "http://localhost:3004/");

    // cy.url().should("eq", Cypress.config().baseUrl + "/");
  });

  it("shows error message on invalid credentials", () => {
    cy.intercept("POST", "https://apis.ccbp.in/login", {
      statusCode: 401,
      body: {
        error_msg: "Invalid username or password",
      },
    }).as("loginRequest");

    cy.findByTestId("usernameInputTestId").type("invalid");
    cy.findByTestId("passwordInputTestId").type("invalid");
    cy.findByTestId("loginSubmitTestId").click();

    cy.wait("@loginRequest").then((interception) => {
      expect(interception.response.statusCode).to.equal(401);
    });

    cy.findByTestId("errorMsgTestId").should("be.visible");
  });
});


// describe("Login page", () => {
//   it("should login successfully with valid credentials", () => {
//     // Arrange
//     const username = "testuser";
//     const password = "testpass";
//     cy.intercept("POST", "https://apis.ccbp.in/login", (req) => {
     
//     if (req.body.username === username && req.body.password === password) {
// // console.log('akash123')
//         req.reply({
//           status: 200,
//           body: { jwt_token: "valid_token" },
//           ok: true,
//         });
//       } else {
//         req.reply({
//           status: 401,
//           body: { error_msg: "Invalid username or akash" },
//           // ok: false,
//         });
//       }
//     }).as("loginRequest");

//     // Act
//     // cy.visit("/");
//     cy.visit("http://localhost:3004/login");
//     //
//     cy.findByTestId("usernameInputTestId").type("212"); // enter username
//     cy.findByTestId("passwordInputTestId").type("testpassword"); // enter password
//     // cy.findByLabelText("username").type(username);
//     // cy.findByLabelText("password").type(password);
//     cy.findByTestId("loginSubmitTestId").click();

//     // Assert
//     cy.url().should("eq", "http://localhost:3004/");
//   });

  // it("should show error message with invalid credentials", () => {
  //   // Arrange
  //   const username = "testuser";
  //   const password = "testpassword";
  //   cy.intercept("POST", "/api/login", (req) => {
  //     if (req.body.username === username && req.body.password === password) {
  //       req.reply({
  //         status: 200,
  //         body: { jwt_token: "valid_token" },
  //       });
  //     } else {
  //       req.reply({
  //         status: 401,
  //         body: { error_msg: "Invalid username or password" },
  //       });
  //     }
  //   });

  //   // Act
  //   cy.visit("http://localhost:3000/login");
  //   cy.findByLabelText("username").type("invaliduser");
  //   cy.findByLabelText("password").type("invalidpassword");
  //   cy.findByTestId("loginSubmitTestId").click();

  //   // Assert
  //   cy.findByTestId("errorMsgTestId").should(
  //     "have.text",
  //     "*Invalid username or password"
  //   );
  // });
// });
