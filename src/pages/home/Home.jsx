import { Helmet } from "react-helmet-async";
import Banner from "../../components/banner/Banner";
import CraftItems from "../../components/banner/craftItems/CraftItems";
import ArtAndCraftCategory from "../../components/artAndCraftCategory/ArtAndCraftCategory";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home Page | MaesTria</title>
      </Helmet>
      {/* banner */}
      <section className="mt-16">
        <Banner></Banner>
      </section>
      <section className="mt-32 ">
        <CraftItems></CraftItems>
      </section>
      <section className="mt-32 ">
        <ArtAndCraftCategory></ArtAndCraftCategory>
      </section>
    </div>
  );
};

export default Home;
