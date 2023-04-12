import { JobDetailModel } from "../../stores/model/JobsModel";
import EachJobCard from "../EachJobCard";

interface Props {
  data: JobDetailModel;
}

const JobDetailContainer = (props: Props) => {
  return <EachJobCard data={props.data} />;
};

export default JobDetailContainer;
