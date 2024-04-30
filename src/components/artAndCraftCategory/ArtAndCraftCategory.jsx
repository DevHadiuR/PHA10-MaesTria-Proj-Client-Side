import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ArtAndCraftCategory = () => {
  const [subSculptures, SetSubSculptures] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/subSculptures")
      .then((res) => res.json())
      .then((data) => SetSubSculptures(data));
  }, []);

  console.log(subSculptures);

  return (
    <div>
      <h1 className="text-4xl md:text-6xl text-center font-dm">
        Select Your Inspiration
      </h1>
      <p className="text-xl w-full md:w-[60%] mx-auto text-center mt-5 font-serif">
        Browse our Craft Categories to find your perfect artistic niche. Each
        selection guides you to a unique collection of sculptures, tailored to
        inspire and engage your creative spirit.
      </p>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subSculptures.map((item) => (
          <Link
            to={`/subCategoriesAllItem/${item.Subcategory_Name}`}
            key={item._id}
          >
            <h1 className="text-2xl text-center font-serif font-medium lg:hidden">
              {" "}
              {item.Subcategory_Name}
            </h1>
            <div className="container">
              <div className="content">
                <div>
                  <div className="content-overlay "></div>
                  <img
                    className="content-image  h-full md:h-80"
                    src={item.Image}
                    alt="/404.jpg"
                  />
                  <div className="content-details fadeIn-bottom">
                    <h3 className="content-title text-3xl font-serif">
                      {item.Subcategory_Name}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ArtAndCraftCategory;
