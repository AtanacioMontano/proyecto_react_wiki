import { FC } from "react";
import { Navigate, useNavigate } from "react-router";
import authStore from "../store/authStore";
interface IProps {
  children: React.ReactNode;
}

const PrivateRoute: FC<IProps> = ({ children }) => {
  const navigate = useNavigate();
  const isLoggedIn = authStore((state) => state.isLoggedIn);
  if(!isLoggedIn) {
    navigate('/Login');
  }
  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
