import { useTranslation } from "react-i18next";
import { LifeAtCompanyModel, SkillsModel } from "../../stores/model/JobsModel";
import { SubHead } from "../SkillsComponent/styleComponents";
import { LifeDescription, OfficeImage, Wrapper } from "./styleComponent";

interface Props {
  data: LifeAtCompanyModel;
}

const LifeAtCompanyContainer = (props: Props) => {
  const {t} = useTranslation();
  return (
    <>
      <SubHead>{t('lifeAtCompany')}</SubHead>
      <Wrapper id='life-at-company-component' data-testid='lifeAtCompanyWrapperId'>
        <LifeDescription data-testid='lifePara'>{props.data.description}</LifeDescription>
        <OfficeImage src={props.data.imageUrl} alt='office-img' />
      </Wrapper>
    </>
  );
};

export default LifeAtCompanyContainer;
