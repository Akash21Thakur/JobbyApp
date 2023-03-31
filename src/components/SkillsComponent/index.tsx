import { SkillsModel } from "../../stores/model/JobsModel";
import { Type } from "../EachJobCard/styleComponents";
import { EachSkillDiv, SkillLogo, SkillName, SubHead, Wrapper } from "./styleComponents";

interface Props {
  data: SkillsModel[] | undefined;
}

const SkillsComponent = (props: Props) => {
  console.log(props.data);
  return (
    <>
     <SubHead>Skills</SubHead>
      <Wrapper>
       
        {props.data && props.data.map((each: SkillsModel) => (
            
            <EachSkillDiv key={each.imageUrl}>

            <SkillLogo src={each.imageUrl}/>
            <SkillName>{each.name}</SkillName>
            </EachSkillDiv>
            
        ))}
      </Wrapper>
    </>
  );
};

export default SkillsComponent;