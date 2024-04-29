import { useContext, useEffect, useState } from "react";
import { ProjectContext } from "../../hooks/provider/ArtProvider";

import "./myCraft.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyCraft = () => {
  const { user } = useContext(ProjectContext);
  const { email: User_Email } = user || {};
  const [refresh, setRefresh] = useState(false);

  const [myCrafts, setMyCrafts] = useState([]);
  const [sortData, setSortData] = useState([]);

  const handleCustomyzation = (poke) => {
    const data = myCrafts.filter((craft) => craft.Customization === poke);
    setSortData(data);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/addedSculptures/byEmail/${User_Email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyCrafts(data);
        setSortData(data);
      });
  }, [User_Email, refresh]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/addedSculptures/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              console.log(data);
              setRefresh(!refresh);
            }
          });
      }
    });
  };

  return (
    <section>
      <div
        className="hero h-[450px]"
        style={{ backgroundImage: "url(/addcraft3.jpg)" }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl ">
            <h1 className="mb-5 text-4xl md:text-6xl font-dm text-white opacity-90 ">
              {" "}
              Your Exclusive Showcase
            </h1>
            <p className="mb-5 text-xl font-serif ">
              Welcome to your Craftsman&apos;s Workshop, where creativity
              thrives and control is at your fingertips. Showcase, edit, and
              delete your craft creations with ease. This personalized studio
              empowers you to curate and refine your portfolio, shaping your
              artistic legacy with every stroke.
            </p>
          </div>
        </div>
      </div>

      <div className="text-end my-12 mr-16 mb-24">
        <details className="dropdown ">
          <summary className="m-1 cursor-pointer p-2 rounded-xl text-xl font-serif bg-[#628E90] text-white hover:bg-[#628E90] ">
            Sort By Customization
          </summary>
          <ul className="p-2  menu dropdown-content z-[1]  rounded-box right-28 md:right-4 w-32 text-center">
            <li
              onClick={() => {
                handleCustomyzation("Yes");
              }}
              className="bg-[#628E90] text-white hover:bg-[#3C2317] mb-2 rounded-xl text-base font-bold pl-7"
            >
              <a>YES</a>
            </li>
            <li
              onClick={() => {
                handleCustomyzation("No");
              }}
              className="bg-[#628E90] text-white hover:bg-[#3C2317] rounded-xl text-base font-bold  pl-7"
            >
              <a>NO</a>
            </li>
          </ul>
        </details>
      </div>

      <div className="mt-16">
        {sortData.map((item) => (
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
                  <h3 className="content-title text-2xl font-serif">
                    {item.Item_Name}
                  </h3>
                  <p className="content-text font-serif text-xl">
                    <span className="font-semibold">Customization : </span>
                    {item.Customization}
                  </p>
                  <div className="flex justify-center gap-5 my-0 md:my-2">
                    <p className="content-text font-serif text-xl">
                      <span className="font-semibold">Price : </span>
                      {item.Price}
                    </p>
                    <p className="content-text font-serif text-xl">
                      <span className="font-semibold">Rating : </span>
                      {item.Rating}
                    </p>
                  </div>
                  <p className="content-text font-serif text-xl">
                    <span className="font-semibold">Stock Status : </span>
                    {item.Stock_Status}
                  </p>

                  <Link to={`/updateMyCraft/${item._id}`}>
                    <button className="btn mt-0 md:mt-4 bg-[#628E90] text-white hover:bg-[#3C2317] transition-all">
                      UPDATE
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn ml-4 bg-[#628E90] text-white hover:bg-[#3C2317] transition-all"
                  >
                    DELETE
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyCraft;
