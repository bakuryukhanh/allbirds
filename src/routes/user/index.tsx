import { useAppSelector } from "hooks/storeHooks";
import { FunctionComponent } from "react";
import { Redirect } from "react-router-dom";

interface UserPageProps {}

const UserPage: FunctionComponent<UserPageProps> = (props) => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  if (!isAuth) {
    return <Redirect to="/login" />;
  }
  return <div>test</div>;
};

export default UserPage;
