import { Helmet } from "react-helmet-async";
import Banner from "../../components/banner/Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home Page | MaesTria</title>
      </Helmet>
      {/* banner */}
      <section className="h-screen md:h-[530px]">
        <Banner></Banner>
      </section>
    </div>
  );
};

export default Home;
