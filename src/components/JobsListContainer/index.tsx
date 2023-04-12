import { inject, observer } from "mobx-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import JobStore from "../../stores/jobStore";
import { JobsModel } from "../../stores/model/JobsModel";
import { ApiStatus } from "../../stores/types";
import ApiFailureComponent from "../ApiFailureComponent";
import EachJobCard from "../EachJobCard";
// import { Link } from "../EachJobCard/styleComponents";
// import { Wrapper } from "/styleComponent";
import Loader from "../Loader";
import NoJobsContainer from "../NoJobsConatiner";
import { Wrapper } from "./styleComponents";

interface Props {}
interface InjectedProps extends Props {
  jobsStore: JobStore;
}
const JobsListContainer = inject("jobsStore")(
  observer((props: Props) => {
    const { jobsStore } = props as InjectedProps;

    const fetchApi = () => {
      jobsStore.fetchJobsList();
    };
    useEffect(() => {
      fetchApi();
    }, []);

    const renderJobsList = () => {
      return (
        <>
          {jobsStore.jobsList.length > 0 ? (
            jobsStore.jobsList.map((each: JobsModel) => {
              return (
                <Link
                  to={`/jobs/${each.id}`}
                  key={each.id}
                  className="link job-route"
                >
                  <EachJobCard data={each} />
                </Link>
              );
            })
          ) : (
            <NoJobsContainer />
          )}
        </>
      );
    };

    const renderComponents = () => {
      const apiStatus = jobsStore.apiStatusJobList;
      switch (apiStatus) {
        case ApiStatus.LOADING:
          return <Loader />;

        case ApiStatus.SUCCESS:
          return renderJobsList();

        case ApiStatus.FAILURE:
          return <ApiFailureComponent handleRetry={fetchApi} />;

        default:
          return <Loader />;
      }
    };

    return (
      <>
        <Wrapper data-testid="jobsListRenderId">{renderComponents()}</Wrapper>
      </>
    );
  })
);

export default JobsListContainer;
