import { Provider } from "mobx-react";
import { fireEvent, render, screen } from "@testing-library/react";

import { I18nextProvider } from "react-i18next";
import Header from ".";
import i18n from "../../i18n";
import { MemoryRouter, Router, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { createMemoryHistory } from "history";
import { LoginButton } from "../../routes/LoginPage/styleComponents";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: jest.fn().mockReturnValue({
    pathname: "/",
  }),
}));

describe("test for the various employment types", () => {
  beforeEach(() => {
    (useLocation as jest.Mock).mockReturnValue({
      pathname: "",
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
  test("check if all the components appear on the screen", () => {
    expect(screen.getByTestId("headerId")).toBeInTheDocument();
    expect(screen.getByTestId("logoutId")).toBeInTheDocument();
    expect(screen.getByTestId("jobsNavigationId")).toBeInTheDocument();
    expect(screen.getByTestId("homeNavigationId")).toBeInTheDocument();
    expect(screen.getByAltText(/jobby-app-logo/i)).toBeInTheDocument();


    // screen.debug();
  });

  

  // test("render header with logo and navigation links", () => {

  //   const logoImg = screen.getByRole("img");
  //   expect(logoImg).toBeInTheDocument();

  //   expect(logoImg).toHaveAttribute(
  //     "src",
  //     "https://assets.ccbp.in/frontend/react-js/logo-img.png"
  //   );
  //   const homeLink = screen.getByText("Home");
  //   expect(homeLink).toBeInTheDocument();

  //   const jobsLink = screen.getByText("Jobs");
  //   expect(jobsLink).toBeInTheDocument();
  //   const history = createMemoryHistory();
  // history.push('/home');

  // // Set up the useLocation and useNavigate hooks
  // const useLocationMock = jest.spyOn(require('react-router-dom'), 'useLocation');
  // useLocationMock.mockReturnValue({ pathname: '/home' });
  // const navigate = jest.fn();
  // jest.spyOn(useNavigate as () => (path: string) => void, 'default').mockReturnValue(navigate);
  //   const logoutButton = screen.getByRole("button", { name: "Logout" });
  //   expect(logoutButton).toBeInTheDocument();
  //   fireEvent.click(logoutButton);
  //   expect(navigate).toHaveBeenCalledTimes(1);
  // });
});

// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual('react-router-dom'),
//   useNavigate: () => jest.fn(),
// }));

// describe('check for logout button', ()=> {

//   test('logout',()=>{

//     const navigate = jest.fn();
//     const useNavigateMock = jest.spyOn(require('react-router-dom'), 'useNavigate');
//     useNavigateMock.mockReturnValue(navigate);

//     render(<Header />);

//     // Select the logout button
//     const logoutButton = screen.getByTestId('logoutId');

//     // Simulate a click event on the logout button
//     fireEvent.click(logoutButton);

//     // Assert that the navigation function was called with the expected argument
//     expect(navigate).toHaveBeenCalledWith('/login');
//   })
// })
