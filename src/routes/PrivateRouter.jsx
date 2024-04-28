import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { ProjectContext } from "../hooks/provider/ArtProvider";
const PrivateRouter = ({ children }) => {
  const location = useLocation();

  const { user, loader } = useContext(ProjectContext);
  if (loader) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        {" "}
        <span className="">
          <HashLoader color="#000" size={110} speedMultiplier={3} />
        </span>
        <h1 className=" mt-8 text-5xl font-semibold">🤪 Tic tic tic... 😜</h1>
      </div>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRouter;
PrivateRouter.propTypes = {
  children: PropTypes.node,
};
