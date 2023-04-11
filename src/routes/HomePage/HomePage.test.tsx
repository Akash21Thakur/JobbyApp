import { fireEvent, render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter, Route, Router } from "react-router-dom";
import HomePage from ".";
import i18n from "../../i18n";
import { Wrapper } from "./styleComponents";

describe("test home page", () => {
  test("if it renders the Home Page Wrapper component", () => {
    render(
      <MemoryRouter>
        <I18nextProvider i18n={i18n}>
          <HomePage />
        </I18nextProvider>
      </MemoryRouter>
    );

    expect(screen.getByTestId('homePageTestId')).toBeInTheDocument();
  });

  test("if it renders the Home Page all components", () => {
    const findJobsBtn= jest.fn();
    render(
      <MemoryRouter>
        <I18nextProvider i18n={i18n}>
          <HomePage />
        </I18nextProvider>
      </MemoryRouter>
    );

    expect(screen.getByText(/Find The Job That/)).toBeInTheDocument();
    expect(screen.getByText(/Millions/)).toBeInTheDocument();
    const button=screen.getByRole('button')
    expect(button).toBeInTheDocument();
    // fireEvent.click(button);
    // expect()
  });

//   test("navigates to Jobs route when button is clicked", () => {
//     const history = createMemoryHistory();
//     render(
//       <Router history={history}>
//         <Route path="/">
//           <HomePage />
//         </Route>
//         <Route path="/jobs">
//           <div>Jobs Page</div>
//         </Route>
//       </Router>
//     );
//     const findJobsButton = screen.getByText("Find Jobs");
//     fireEvent.click(findJobsButton);
//     expect(history.location.pathname).toBe("/jobs");
//   });


});


