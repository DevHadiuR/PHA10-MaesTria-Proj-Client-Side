import { Helmet } from "react-helmet-async";
import Banner from "../../components/banner/Banner";
import CraftItems from "../../components/banner/craftItems/CraftItems";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home Page | MaesTria</title>
      </Helmet>
      {/* banner */}
      <section className="h-screen md:h-[600px] mt-16">
        <Banner></Banner>
      </section>
      <section className="mt-32">
        <CraftItems></CraftItems>
      </section>
    </div>
  );
};

export default Home;
