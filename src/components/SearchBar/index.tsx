import { inject, observer } from "mobx-react";
import JobStore from "../../stores/jobStore";
import { MouseEvent, useTransition } from "react";

import {
  SearchWithIcon,
  SearchVideos,
  SearchIconDiv,
  SearchIcon,
} from "./styleComponent";
import { useTranslation } from "react-i18next";
interface Props {}
interface InjectedProps extends Props {
  jobsStore: JobStore;
}
const SearchBar = inject("jobsStore")(
  observer((props: Props) => {
    const { t } = useTranslation();
    const { jobsStore } = props as InjectedProps;

    const handleSearch = (event: any) => {
      jobsStore.updateSearchedText(event.target.value);
    };

    const handleClick = () => {
      jobsStore.fetchJobsList();
    };
    return (
      <>
        <SearchWithIcon data-testid="searchBarTestId">
          <SearchVideos
            type="search"
            placeholder={t("search").toString()}
            value={jobsStore.searchedText}
            onChange={(event) => handleSearch(event)}
            data-testid="searchInputTestId"
          />
          <SearchIconDiv
            onClick={handleClick}
            className="search-icon"
            data-testid="searchIconTestId"
          >
            <SearchIcon className="fa-solid fa-magnifying-glass" />
          </SearchIconDiv>
        </SearchWithIcon>
      </>
    );
  })
);

export default SearchBar;
