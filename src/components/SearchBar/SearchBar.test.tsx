import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "mobx-react";
import { I18nextProvider } from "react-i18next";
import SearchBar from ".";
import i18n from "../../i18n";
import { jobsStore } from "../../stores";

jest.mock("query-string", () => ({
  stringify: jest.fn(),
  parse: jest.fn(),
}));

describe("Search Bar Testing", () => {
  test("check if the wapper element rendered", () => {
    const jobsStoreMock = {
      fetchJobsList: jest.fn(),
      updateSearchedText: jest.fn(),
    };

    render(
      <I18nextProvider i18n={i18n}>
        <Provider jobsStore={jobsStoreMock}>
          <SearchBar />
        </Provider>
      </I18nextProvider>
    );
    expect(screen.getByTestId("searchBarTestId")).toBeInTheDocument();
  });

  test("should update the searched text", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Provider jobsStore={jobsStore}>
          <SearchBar />
        </Provider>
      </I18nextProvider>
    );

    const searchInputBar = screen.getByTestId("searchInputTestId");
    fireEvent.change(searchInputBar, { target: { value: "React Developer" } });
    expect(jobsStore.searchedText).toBe("React Developer");
  });
});
