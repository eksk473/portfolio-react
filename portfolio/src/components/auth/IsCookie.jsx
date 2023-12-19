import { Navigate, useOutlet } from "react-router-dom";
import { useCookies } from "react-cookie";
import { isEmpty } from "lodash";

const IsCookie = () => {
  const [cookies] = useCookies(["accessNickname"]);
  const outlet = useOutlet();

  if (isEmpty(cookies?.accessNickname)) {
    return <Navigate to="/set" replace />;
  } else {
    return <>{outlet}</>;
  }
};

export { IsCookie };
