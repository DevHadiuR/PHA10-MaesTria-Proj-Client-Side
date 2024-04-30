import { Outlet } from "react-router-dom";
import Header from "../../shared/header/Header";
import Footer from "../../shared/footer/Footer";
// import ToggleTheme from "../../components/toggleTheme/ToggleTheme";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
