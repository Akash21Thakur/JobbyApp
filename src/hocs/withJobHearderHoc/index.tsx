import Cookies from "js-cookie";
import { Navigate, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { Wrapper } from "./styleComponents";

// following component is never used

const withJobHeaderHoc = (WrapperComponent: React.ComponentType<any>) => {
  const MainHocContent = () => {
    const jwtToken = Cookies.get("jwt_token");
    if (jwtToken === undefined) {
      console.log("Not Logged In");
      return <Navigate to="/login" />;
    }
    return (
      <>
        <WrapperComponent />
      </>
    );
  };

  return MainHocContent;
};

export default withJobHeaderHoc;
