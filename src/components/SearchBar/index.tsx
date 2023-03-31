import { inject, observer } from "mobx-react";
import JobStore from "../../stores/jobStore";
import { MouseEvent } from 'react';

import { SearchWithIcon, SearchVideos, SearchIconDiv, SearchIcon } from "./styleComponent";
interface Props {}
interface InjectedProps extends Props {
  jobsStore: JobStore;
}
const SearchBar = inject("jobsStore")(
  observer((props: Props) => {
    const { jobsStore } = props as InjectedProps;

    const handleSearch = (event: any) => {
      // console.log("here123")
      jobsStore.updateSearchedText(event.target.value);
    //   console.log(jobsStore.searchedText);
    };

    const handleClick = () => {
       jobsStore.fetchJobsList()  ;
      //  jobsStore.apiUrlGenerator();
    }
    return (<>
    <SearchWithIcon>
            <SearchVideos
              type="search"
              placeholder="Search"
              value={jobsStore.searchedText}
              onChange={(event) => handleSearch(event)}
            />
            <SearchIconDiv onClick={handleClick} className="search-icon">
              <SearchIcon  className="fa-solid fa-magnifying-glass" />
            </SearchIconDiv>
          </SearchWithIcon></>)
}))

export default SearchBar;