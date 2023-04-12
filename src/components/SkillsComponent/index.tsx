import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { SkillsModel } from "../../stores/model/JobsModel";
import { Type } from "../EachJobCard/styleComponents";
import {
  EachSkillDiv,
  SkillLogo,
  SkillName,
  SubHead,
  Wrapper,
} from "./styleComponents";

interface Props {
  data: SkillsModel[] | undefined;
}

const SkillsComponent = (props: Props) => {
  const { t } = useTranslation();
  return (
    <>
      <SubHead>{t("skills")}</SubHead>
      <Wrapper>
        {props.data &&
          props.data.map((each: SkillsModel, index) => (
            <EachSkillDiv
              key={each.imageUrl}
              data-testid={`skillTestId${index + 1}`}
            >
              <SkillLogo src={each.imageUrl} />
              <SkillName>{each.name}</SkillName>
            </EachSkillDiv>
          ))}
      </Wrapper>
    </>
  );
};

export default SkillsComponent;
