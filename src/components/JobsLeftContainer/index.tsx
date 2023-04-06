import { BreakLine } from "../../routes/LoginPage/styleComponents";
import EmploymentTypes from "../EmploymentTypes";
import ProfileDetails from "../ProfileDetails";
import SalaryRange from "../SalaryRange";
import { HorizontalLine, Wrapper } from "./styleComponents";

const JobsLeftContainer = () => {
  return (
    <>
      <Wrapper>
        <ProfileDetails />
        <HorizontalLine />
        <EmploymentTypes />
        <HorizontalLine />
        <SalaryRange />
      </Wrapper>
    </>
  );
};

export default JobsLeftContainer;
