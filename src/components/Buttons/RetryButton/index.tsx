import { inject } from "mobx-react";
import { useTranslation } from "react-i18next";
import JobStore from "../../../stores/jobStore";
import { Retry } from "./styleComponent";
interface Props {
  handleButtonClick: () => void;
}

const RetryButton = (props: Props) => {
  const handleClick = () => {
    props.handleButtonClick();
  };
  const { t } = useTranslation();

  return (
    <>
      <Retry onClick={handleClick} data-testid="retryButton">
        {t("retry")}
      </Retry>
    </>
  );
};

export default RetryButton;
