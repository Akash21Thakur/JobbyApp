import { inject, observer } from "mobx-react";
import { useTranslation } from "react-i18next";
import JobStore from "../../stores/jobStore";
import { employmentItemList, salaryRange, salType } from "../../stores/types";
import {
  CheckBoxInput,
  CheckBoxLabel,
  Heading,
  Wrapper,
} from "../EmploymentTypes/styleComponents";

interface Props {}
interface InjectedProps extends Props {
  jobsStore: JobStore;
}
const SalaryRange = inject("jobsStore")(
  observer((props: Props) => {
    const { t } = useTranslation();
    const { jobsStore } = props as InjectedProps;

    const handleRadioClick = (event: React.ChangeEvent<HTMLInputElement>) => {
      // console.log("here123")
      jobsStore.updateSalary(event.target.value);
      jobsStore.fetchJobsList();
      // console.log(jobsStore.salary);
    };

    const renderList = () => {
      return (
        <>
          {salaryRange.map((item, index) => (
            <CheckBoxLabel key={item}>
              <CheckBoxInput
                type="radio"
                name="item"
                value={item}
                checked={jobsStore.salary === item}
                onChange={handleRadioClick}
                data-testid={`radiobutton${index + 1}`}
              />
              {t(`${salType.get(item)}`)}
            </CheckBoxLabel>
          ))}
        </>
      );
    };
    return (
      <>
        <Wrapper data-testid="salaryRangeTestId">
          <Heading>{t("salaryRange")}</Heading>
          {renderList()}
        </Wrapper>
      </>
    );
  })
);

export default SalaryRange;
