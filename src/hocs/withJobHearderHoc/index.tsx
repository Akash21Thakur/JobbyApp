import Cookies from "js-cookie";
import { Navigate, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { Wrapper } from "./styleComponents";

const withJobHeaderHoc = (WrapperComponent: React.ComponentType<any>) => {
    const MainHocContent = () => {
      // const [showDrawer,toggleDrawer] = useState(false);
      // const handleDrawerClick = () => {
      //   toggleDrawer(prevState => (!prevState))
      // }

      // const navigate= useNavigate();
      const jwtToken = Cookies.get("jwt_token");
      if (jwtToken === undefined) {
        // console.log(JSON.stringify(window.location));
        console.log("Not Logged In");
       return <Navigate to="/login" />
       
      }
      return (
        <>
          {/* <Wrapper> */}
            <Header />
            <WrapperComponent/>
          {/* </Wrapper> */}
        </>
      );
    };
  
    return MainHocContent;
  };
  
  export default withJobHeaderHoc;
  