import { useContext } from "react";
import { ProjectContext } from "../../hooks/provider/ArtProvider";
import { Link } from "react-router-dom";

const AllCraft = () => {
  const { craftItems } = useContext(ProjectContext);
  return (
    <section>
      <div
        className="hero h-[450px]"
        style={{ backgroundImage: "url(/allcraft1.jpg)" }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl ">
            <h1 className="mb-5 text-4xl md:text-6xl font-dm text-white opacity-90 ">
              {" "}
              Explore Our Complete Collection
            </h1>
            <p className="mb-5 text-xl font-serif ">
              Explore our Gallery of Wonders, a curated collection of sculptures
              from artists worldwide. Each piece embodies unique stories and
              exceptional craftsmanship. Dive into art that inspires and
              enriches.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 mx-3 md:mx-8">
        {craftItems.map((item) => (
          <div
            key={item._id}
            className="card card-compact shadow-xl hover:bg-[#628E90] transition-all bg-[#3C2317]"
          >
            <figure className=" p-6">
              <img
                className="rounded-box h-72 w-full"
                src={item.Image}
                alt="/404.jpg"
              />
            </figure>
            <div className="card-body flex flex-col text-white">
              <div className="overflow-x-auto flex-grow font-serif">
                <table className="table text-white">
                  {/* head */}
                  <thead>
                    <tr className="text-white text-lg">
                      <th>Item Name</th>
                      <th>Price</th>
                      <th>Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr className="text-lg">
                      <td>{item.Item_Name}</td>
                      <td>{item.Price}</td>
                      <td>{item.Rating}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-5 mb-3">
                <Link to={`/craftItemDetail/${item._id}`}>
                  <button className="btn w-full text-lg hover:bg-[#3C2317] hover:text-white transition-all">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllCraft;
