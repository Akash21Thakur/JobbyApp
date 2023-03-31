import { LifeAtCompanyModel, SkillsModel } from "../../stores/model/JobsModel";
import { SubHead } from "../SkillsComponent/styleComponents";
import { LifeDescription, OfficeImage, Wrapper } from "./styleComponent";

interface Props {
  data: LifeAtCompanyModel;
}

const LifeAtCompanyContainer = (props: Props) => {
  console.log(props.data);
  return (
    <>
      <SubHead>Life At Company</SubHead>
      <Wrapper>
        <LifeDescription>{props.data.description}</LifeDescription>
        <OfficeImage src={props.data.imageUrl} alt='offic-img' />
      </Wrapper>
    </>
  );
};

export default LifeAtCompanyContainer;
