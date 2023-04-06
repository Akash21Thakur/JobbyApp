import { inject, observer } from "mobx-react";
import { useTranslation } from "react-i18next";
import JobStore from "../../stores/jobStore";
import { employmentItemList, salaryRange, salType } from "../../stores/types";
import { Heading, Wrapper } from "../EmploymentTypes/styleComponents";


interface Props {}
interface InjectedProps extends Props {
  jobsStore: JobStore;
}
const SalaryRange = inject("jobsStore")(
  observer((props: Props) => {
    const {t} = useTranslation();
    const { jobsStore } = props as InjectedProps;

    const handleRadioClick = (event: any) => {
      // console.log("here123")
      jobsStore.updateSalary(event.target.value);
      jobsStore.fetchJobsList()  ;
      // console.log(jobsStore.salary);
    };

    
    const renderList = () => {
      return (
        <>
          {salaryRange.map((item) => (
            <label key={item}>
              <input
                type="radio"
                name="item"
                value={item}
                checked={jobsStore.salary === item}
                // onClick={handleRadioClick}
                onChange={handleRadioClick}
                // readOnly
              />
              {t(`${salType.get(item)}`)}
            </label>
          ))}
        </>
      );
    };
    return (
      <>
        <Wrapper>
          <Heading>{t('salaryRange')}</Heading>
          {renderList()}
        </Wrapper>
      </>
    );
  })
);

export default SalaryRange;
