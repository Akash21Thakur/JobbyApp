import { inject, observer } from "mobx-react";
import { useTranslation } from "react-i18next";
import JobStore from "../../stores/jobStore";
import { employmentItemList, empType } from "../../stores/types";
import { Heading, Wrapper } from "./styleComponents";
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

    const handleCheckboxClick = (event: any) => {
      // console.log('CLicked')
      jobsStore.updateEmploymentList(event.target.value, event.target.checked);
      jobsStore.fetchJobsList();
      // console.log(jobsStore.displayArray())
    };
    const renderList = () => {
      return (
        <>
          {employmentItemList.map((item) => (
            <label key={item}>
              <input
                type="checkbox"
                // name="item"
                value={item}
                checked={jobsStore.selectedEmployment.has(item)}
                onChange={handleCheckboxClick}
              />
              {t(`${empType.get(item)}`)}
            </label>
          ))}
        </>
      );
    };
    return (
      <>
        <Wrapper>
          <Heading>{t("employmentType")}</Heading>

          {renderList()}
        </Wrapper>
      </>
    );
  })
);

export default EmploymentType;
