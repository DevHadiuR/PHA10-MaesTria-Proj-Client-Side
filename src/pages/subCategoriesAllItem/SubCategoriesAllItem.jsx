import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";

const SubCategoriesAllItem = () => {
  const loaderData = useLoaderData();

  return (
    <div className="mt-14">
      <Helmet>
        <title>Sculpture Sub Category Page | MasTria</title>
      </Helmet>
      <h1 className="text-4xl md:text-6xl text-center font-dm">
        Explore Detailed Collections
      </h1>
      <p className="text-xl w-full md:w-[70%] mx-auto text-center mt-5 font-serif">
        Dive into the immersive world of Sculpture Specialties, where every
        collection offers a captivating journey through the depths of artistic
        expression. Delve into meticulously curated selections, each
        representing the pinnacle of craftsmanship within your chosen category.
        Uncover the stories, intricacies, and boundless creativity encapsulated
        within these remarkable works of art.
      </p>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loaderData.map((item) => (
          <div key={item._id} className="container">
            <div className="content ">
              <div>
                <div className="content-overlay "></div>
                <img
                  className="content-image  h-full md:h-80"
                  src={item.Image}
                  alt="/404.jpg"
                />
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title text-2xl md:text-3xl font-serif">
                    {item.Item_Name}
                  </h3>
                  <p className="font-serif text-xl md:text-2xl ">
                    <span className="font-semibold ">subcategory Name : </span>
                    {item.Subcategory_Name}
                  </p>
                  <div className="flex justify-center items-center gap-5">
                    <p className=" font-serif text-xl md:text-2xl">
                      <span className="font-semibold">Price : </span>
                      {item.Price}
                    </p>
                    <p className=" font-serif text-xl md:text-2xl">
                      <span className="font-semibold">Rating : </span>
                      {item.Rating}
                    </p>
                  </div>

                  <Link to={`/craftItemDetail/${item._id}`}>
                    <button className="btn mt-2 md:mt-4  hover:text-white hover:bg-[#3C2317] transition-all">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubCategoriesAllItem;
