import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h2 className="text-4xl">this is my home section</h2>
    </div>
  );
};

export default Home;
