import { render, screen } from "@testing-library/react";
import { Provider } from "mobx-react";
import { I18nextProvider } from "react-i18next";
import ProfileDetails from ".";
import i18n from "../../i18n";
import { jobsStore } from "../../stores";
import { ApiStatus } from "../../stores/types";

jest.mock("query-string", () => ({
  stringify: jest.fn(),
  parse: jest.fn(),
}));

describe("Profile Details Testing", () => {
 
    const mockJobsStore = {
      profileDetails: {
        name: "Rahul Attuluri",
        profileImageUrl: "demoProfileImage",
        shortBio: "hey There",
      },
      apiStatusProfileDetails: ApiStatus.SUCCESS,
      fetchProfileDetails: jest.fn(),
    };
    
  
  test("Profile Detail is rendered when the apu status is SUCCESS", () => {
    render(
        <I18nextProvider i18n={i18n}>
          <Provider jobsStore={mockJobsStore}>
            <ProfileDetails />
          </Provider>
        </I18nextProvider>
      );
    expect(screen.getByText(/Rahul/)).toBeInTheDocument();
    expect(screen.getByText(/There/)).toBeInTheDocument();
    expect(screen.getByAltText(/Rahul/)).toBeInTheDocument();

});

test('Loader is shown when the status is LOADING',()=>{
    const mockDataApi={
        ...mockJobsStore,
        apiStatusProfileDetails: ApiStatus.LOADING
        
    }
    
    render(
        <I18nextProvider i18n={i18n}>
          <Provider jobsStore={mockDataApi}>
            <ProfileDetails />
          </Provider>
        </I18nextProvider>
      );
     expect(screen.getByTestId('loaderTestId')).toBeInTheDocument();
  })

  test('Loader is shown when the status is INITIAL',()=>{
    const mockDataApi={
        ...mockJobsStore,
        apiStatusProfileDetails: ApiStatus.INITIAL
        
    }
    
    render(
        <I18nextProvider i18n={i18n}>
          <Provider jobsStore={mockDataApi}>
            <ProfileDetails />
          </Provider>
        </I18nextProvider>
      );
     expect(screen.getByTestId('loaderTestId')).toBeInTheDocument();
  })

  test('Retry Button is shown when the status is FAILURE',()=>{
    const mockDataApi={
        ...mockJobsStore,
        apiStatusProfileDetails: ApiStatus.FAILURE
        
    }
    
    render(
        <I18nextProvider i18n={i18n}>
          <Provider jobsStore={mockDataApi}>
            <ProfileDetails />
          </Provider>
        </I18nextProvider>
      );
     expect(screen.getByTestId('retryButton')).toBeInTheDocument();
  })
});
