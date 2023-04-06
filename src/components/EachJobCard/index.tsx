// import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { JobDetailModel, JobsModel } from "../../stores/model/JobsModel";
import { HorizontalLine } from "../JobsLeftContainer/styleComponents";
import LifeAtCompanyContainer from "../LifeAtCompanyContainer";
import SkillsComponent from "../SkillsComponent";
import { SubHead } from "../SkillsComponent/styleComponents";
import {
  CompanyHeader,
  CompanyLogo,
  DescriptionDiv,
  DescriptionPara,
  Detail,
  Icons,
  JobDescription,
  LocationType,
  LocationTypePackageDiv,
  Package,
  StarAndValue,
  StarIcon,
  StarValue,
  Title,
  TitleAndStars,
  Type,
  VisitDiv,
  Wrapper,
} from "./styleComponents";

interface Props {
  data: JobDetailModel | JobsModel;
}

const EachJobCard = (props: Props) => {
  const { t } = useTranslation();

  const { data } = props;
  // console.log(data);
  return (
    <Wrapper data-testid='eachJobCardId'>
      <CompanyHeader>
        <CompanyLogo src={data.companyLogoUrl} alt={data.title} />
        <TitleAndStars>
          <Title>{data.title}</Title>
          <StarAndValue>
            <StarIcon className="fa-solid fa-star" />
            <StarValue>{data.rating}</StarValue>
          </StarAndValue>
        </TitleAndStars>
      </CompanyHeader>

      <LocationTypePackageDiv>
        <LocationType>
          <Detail>
            <Icons className="fa-solid fa-location-dot" />
            <Type>{data.location}</Type>
          </Detail>
          <Detail>
            <Icons className="fa-solid fa-briefcase" />
            <Type>{data.employmentType}</Type>
          </Detail>
        </LocationType>
        <Package>{data.packagePerAnnum}</Package>
      </LocationTypePackageDiv>

      <HorizontalLine />

      <JobDescription>
        <DescriptionDiv>
          <SubHead>{t("description")}</SubHead>
          {data instanceof JobDetailModel && (
            <>
              <Link
                to={data.companyWebsiteUrl}
                className="link"
                target="_blank"
                data-testid="visitLinkId"
              >
                <VisitDiv >
                  <Type>{t("visit")}</Type>

                  <Icons className="fa-solid fa-arrow-up-right-from-square" />
                </VisitDiv>
              </Link>
            </>
          )}
        </DescriptionDiv>
        <DescriptionPara>{data.jobDescription}</DescriptionPara>
      </JobDescription>

      {data instanceof JobDetailModel && (
        <>
          <SkillsComponent data={data.skills} />
          <LifeAtCompanyContainer data={data.lifeAtCompany} />
        </>
      )}
    </Wrapper>
  );
};

export default EachJobCard;
