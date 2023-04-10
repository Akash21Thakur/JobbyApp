import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { JobsModel } from "../../stores/model/JobsModel";
import EachJobCard from "../EachJobCard";
// import { Link } from "../EachJobCard/styleComponents";
import { Heading } from "../EmploymentTypes/styleComponents";
import { SimilarJobHeading, SimilarJobsListContainer } from "./styleComponents";

interface Props {
  data: JobsModel[];
}

const SimilarJobsList = (props: Props) => {
  const { data } = props;
  const {t} = useTranslation();
  // console.log(data);
  return (
    <>
      <SimilarJobHeading>{t('similarJobs')}</SimilarJobHeading>
      <SimilarJobsListContainer>
        {data.map((each: JobsModel,index) => {
          return(
          <Link  to={`/jobs/${each.id}`}
          key={each.id} className='link similar-jobs' data-testid={`similarJobCardTestid${index}`}>
            
            <EachJobCard data={each} key={each.id}  />
          </Link>);
        })}
      </SimilarJobsListContainer>
    </>
  );
};

export default SimilarJobsList;
