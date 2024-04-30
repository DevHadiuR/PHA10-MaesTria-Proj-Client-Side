import { Helmet } from "react-helmet-async";
import { IoReturnDownBackSharp } from "react-icons/io5";
import { useLoaderData, useNavigate } from "react-router-dom";

const CraftItemDetail = () => {
  const loaderData = useLoaderData();
  const navigate = useNavigate();
  const {
    Image,
    Item_Name,
    Subcategory_Name,
    Short_Description,
    Price,
    Rating,
    Customization,
    Processing_Time,
    Stock_Status,
    User_Email,
    User_Name,
  } = loaderData;

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <section>
      <Helmet>
        <title>Craft Items Detail Page | MasTria</title>
      </Helmet>
      <div className="hero min-h-screen ">
        <div className="hero-content flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/2  flex-1 bg-amber-700 relative h-screen">
            <img
              src={Image}
              className="  w-full   lg:translate-x-8 lg:translate-y-8 shadow-xl h-full md:h-screen"
            />
          </div>
          <div className="w-full lg:w-1/2 font-serif border-2 border-amber-800  space-y-5  md:px-10 p-5 mt-8">
            <h1 className="text-4xl font-bold font-dm border-2  border-amber-800 p-2">
              {Item_Name}
            </h1>
            <p className="my-2 text-lg w-full border-2  border-amber-800 p-2">
              {Short_Description}
            </p>

            <h1 className="text-xl border-2  border-amber-800 p-2">
              <span className="font-semibold">Subcategory</span> :{" "}
              {Subcategory_Name}
            </h1>
            <h1 className="text-xl border-2  border-amber-800 p-2">
              <span className="font-semibold">Stock Status</span> :{" "}
              {Stock_Status}
            </h1>
            <h1 className="text-xl border-2  border-amber-800 p-2">
              <span className="font-semibold">Customization</span> :{" "}
              {Customization}
            </h1>
            <h1 className="text-xl border-2  border-amber-800 p-2">
              <span className="font-semibold">Processing Time</span> :{" "}
              {Processing_Time}
            </h1>
            <div className="flex  gap-5 border-2  border-amber-800 p-2">
              <h1 className="text-xl">
                <span className="font-semibold">Price</span> : {Price}
              </h1>
              <h1 className="text-xl">
                <span className="font-semibold">Rating</span> : {Rating}
              </h1>
            </div>
            <h1 className="text-xl border-2  border-amber-800 p-2">
              <span className="font-semibold">User Name</span> : {User_Name}
            </h1>
            <h1 className="text-xl border-2  border-amber-800 p-2">
              <span className="font-semibold">User Email</span> : {User_Email}
            </h1>
          </div>
        </div>
      </div>
      <div className="text-center mt-16">
        <button
          onClick={handleGoBack}
          className="btn bg-[#628E90] text-white px-10 text-xl hover:bg-[#3C2317]"
        >
          {" "}
          <IoReturnDownBackSharp className="text-3xl mt-1 mr-4" />
          Go Back
        </button>
      </div>
    </section>
  );
};

export default CraftItemDetail;
