import { Navigate } from "react-router-dom";
interface IPrivateRouter {
  children: React.ReactNode;
  isAuth: boolean;
}
const PrivateRouter = ({ children, isAuth }: IPrivateRouter) => {
  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};
export default PrivateRouter;
