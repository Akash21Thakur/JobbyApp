import { inject, observer } from "mobx-react";
import { useTranslation } from "react-i18next";
import { employmentItemList, empType } from "../../constants/valuesConstants";
import JobStore from "../../stores/jobStore";
import {
  CheckBoxInput,
  CheckBoxLabel,
  Heading,
  Wrapper,
} from "./styleComponents";
interface Props {}
interface InjectedProps extends Props {
  jobsStore: JobStore;
}
const EmploymentType = inject("jobsStore")(
  observer((props: Props) => {
    const { t } = useTranslation();
    const { jobsStore, handleClick } = props as InjectedProps & {
      handleClick?: Function;
    };

    const handleCheckboxClick = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      jobsStore.updateEmploymentList(event.target.value, event.target.checked);
      jobsStore.fetchJobsList();
    };
    const renderList = () => {
      return (
        <>
          {/* TODO: Need to convert html tag to styled component */}
          {employmentItemList.map((item, index) => (
            <CheckBoxLabel key={item}>
              <CheckBoxInput
                type="checkbox"
                value={item}
                checked={jobsStore.selectedEmployment.has(item)}
                onChange={handleCheckboxClick}
                data-testid={`checkbox${index + 1}`}
              />
              {t(`${empType.get(item)}`)}
            </CheckBoxLabel>
          ))}
        </>
      );
    };
    return (
      <>
        <Wrapper data-testid="employmentTypesId">
          <Heading>{t("employmentType")}</Heading>
          {renderList()}
        </Wrapper>
      </>
    );
  })
);

export default EmploymentType;
