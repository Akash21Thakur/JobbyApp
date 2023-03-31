import { inject } from "mobx-react";
import JobStore from "../../../stores/jobStore";
import { Retry } from "./styleComponent";
interface Props{
    handleButtonClick: () => void
}
interface InjectedProps extends Props{
    jobsStore: JobStore
}

const RetryButton = inject('jobsStore')((props: Props) => {
      const {jobsStore} = props as InjectedProps;
    const handleClick = () => {
      props.handleButtonClick();
    }

    return <>
    <Retry onClick={handleClick}>Retry</Retry></>
})

export default RetryButton;