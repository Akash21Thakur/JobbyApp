import { Provider } from "mobx-react";
import { fireEvent, render, screen } from "@testing-library/react";

import { I18nextProvider } from "react-i18next";
import Header from ".";
import i18n from "../../i18n";
import { MemoryRouter } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { createMemoryHistory } from "history";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: jest.fn().mockReturnValue({
    pathname: "/",
  }),
}));

describe("test for the various employment types", () => {
  test("check if Employment type renders", () => {
    (useLocation as jest.Mock).mockReturnValue({
      pathname: "/some/path",
      search: "",
      hash: "",
      state: null,
      key: "",
    });

    render(
      <MemoryRouter>
        <I18nextProvider i18n={i18n}>
          <Header />
        </I18nextProvider>
      </MemoryRouter>
    );
  });

  test("renders header with logo and navigation links", () => {
    (useLocation as jest.Mock).mockReturnValue({
      pathname: "/some/path",
      search: "",
      hash: "",
      state: null,
      key: "",
    });

    render(
      <MemoryRouter>
        <I18nextProvider i18n={i18n}>
          <Header />
        </I18nextProvider>
      </MemoryRouter>
    );

    // screen.debug();

    const logoImg = screen.getByRole("img");
    expect(logoImg).toBeInTheDocument();

    expect(logoImg).toHaveAttribute(
      "src",
      "https://assets.ccbp.in/frontend/react-js/logo-img.png"
    );
    const homeLink = screen.getByText("Home");
    expect(homeLink).toBeInTheDocument();

    const jobsLink = screen.getByText("Jobs");
    expect(jobsLink).toBeInTheDocument();

    const logoutButton = screen.getByRole("button", { name: "Logout" });
    expect(logoutButton).toBeInTheDocument();
  });
});

// import { render, screen, fireEvent } from '@testing-library/react';
// import { Router } from 'react-router-dom';
// import { createMemoryHistory } from 'history';
// import { useLocation } from 'react-router-dom';
// import Header from '.';

// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual('react-router-dom'),
//   useLocation: jest.fn(),
// }));

// describe('Header', () => {
//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   it('should render', () => {
//     useLocation.mockReturnValueOnce({ pathname: '/' });
//     render(<Header />);
//     const logoElement = screen.getByAltText('logo');
//     expect(logoElement).toBeInTheDocument();
//   });

//   it('should call handleLogout when logout button is clicked', () => {
//     const history = createMemoryHistory();
//     useLocation.mockReturnValueOnce({ pathname: '/' });
//     const handleLogout = jest.fn();
//     render(
//       <Router history={history}>
//         <Header handleLogout={handleLogout} />
//       </Router>
//     );
//     const logoutButton = screen.getByText('Logout');
//     fireEvent.click(logoutButton);
//     expect(handleLogout).toHaveBeenCalledTimes(1);
//   });

//   it('should not render when on the login page', () => {
//     useLocation.mockReturnValueOnce({ pathname: '/login' });
//     render(<Header />);
//     const logoElement = screen.queryByAltText('logo');
//     expect(logoElement).not.toBeInTheDocument();
//   });
// });
