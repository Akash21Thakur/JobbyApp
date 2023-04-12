import { inject, observer } from "mobx-react";
import { useTranslation } from "react-i18next";
import { salaryRange, salType } from "../../constants/valuesConstants";
import JobStore from "../../stores/jobStore";
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
      jobsStore.updateSalary(event.target.value);
      jobsStore.fetchJobsList();
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
