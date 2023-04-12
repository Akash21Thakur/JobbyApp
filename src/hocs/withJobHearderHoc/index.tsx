import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

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
