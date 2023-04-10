import { inject, observer } from "mobx-react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ApiFailureComponent from "../../components/ApiFailureComponent";
import JobDetailContainer from "../../components/JobDetailContainer";
import Loader from "../../components/Loader";
import SimilarJobsList from "../../components/SimilarJobsList";
import JobStore from "../../stores/jobStore";
import { ApiStatus } from "../../stores/types";
import { Wrapper } from "./styleComponents";
interface Props {}
interface InjectedProps extends Props {
  jobsStore: JobStore;
}
const JobsDetailPage = inject("jobsStore")(
  observer((props: Props) => {
    const { jobsStore } = props as InjectedProps;
    const params = useParams();
    const fetchApi = () => {
      jobsStore.fetchJobDetails(params.id);
    };
    useEffect(() => {
      fetchApi();
    }, []);

    const renderJobDetails = () => {
      const data = jobsStore.jobData;
      return (
        <>
          <JobDetailContainer data={data.jobDetails} />
          <SimilarJobsList data={data.similarJobs} />
        </>
      );
    };

    const renderComponents = () => {
      const apiStatus = jobsStore.apiStatusJobDetails;

      switch (apiStatus) {
        case ApiStatus.LOADING:
          return <Loader />;

        case ApiStatus.SUCCESS:
          return renderJobDetails();

        case ApiStatus.FAILURE:
          return <ApiFailureComponent handleRetry={fetchApi} />;

        default:
          return <Loader />;
      }
    };
    return (
      <>
        <Wrapper>{renderComponents()}</Wrapper>
      </>
    );
  })
);

export default JobsDetailPage;
