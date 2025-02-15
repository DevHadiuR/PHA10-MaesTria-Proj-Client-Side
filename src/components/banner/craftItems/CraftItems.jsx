import { useContext } from "react";
import { ProjectContext } from "../../../hooks/provider/ArtProvider";

import "./CraftItems.css";
import { Link } from "react-router-dom";
const CraftItems = () => {
  const { craftItems } = useContext(ProjectContext);
  const sliceCraft = craftItems.slice(0, 6);

  return (
    <div>
      <h1 className="text-5xl md:text-6xl  text-center font-dm ">
        Latest Craft Items
      </h1>

      <p className="text-xl mt-4 w-[80%] text-center font-serif mx-auto">
        Step into the world of craftsmanship with our Latest Craft Items.
        Delight in six meticulously curated pieces, each a testament to artistry
        and dedication. From intricate sculptures to exquisite textiles, immerse
        yourself in the beauty of human creativity and skill.
      </p>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sliceCraft.map((item) => (
          <div key={item._id} className="container">
            <div className="content">
              <div>
                <div className="content-overlay "></div>
                <img
                  className="content-image  h-full md:h-80"
                  src={item.Image}
                  alt="/404.jpg"
                />
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title text-2xl font-serif">
                    {item.Item_Name}
                  </h3>
                  <p className="content-text font-serif">
                    {item.Short_Description}
                  </p>

                  <Link to={`/craftItemDetail/${item._id}`}>
                    <button className="btn mt-5 text-base font-serif">
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

export default CraftItems;
