import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import { ProjectContext } from "../../hooks/provider/ArtProvider";
import { Helmet } from "react-helmet-async";

const AddCraft = () => {
  const { user } = useContext(ProjectContext);
  const { displayName, email } = user;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
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
    } = data;

    fetch("https://sculpture-web-proj-server-site.vercel.app/addSculpture", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((value) => {
        console.log(value);
        if (value.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "Sculpture is Successfully added!",
            icon: "success",
          });
          reset();
        }
      })
      .catch(console.log);
  };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(/addcraft2.jpg)",
      }}
    >
      <Helmet>
        <title>Add Craft Items Page | MasTria</title>
      </Helmet>
      <div className="hero-overlay bg-opacity-35"></div>
      <div className="hero-content">
        <div className="hero min-h-screen ">
          <div className="hero-content flex flex-col  gap-6">
            <div className="text-center w-full flex-1 ">
              <h1 className="text-4xl md:text-5xl font-bold text-white opacity-85  font-dm">
                Craft Your Masterpieces
              </h1>
              <p className="py-6 w-full md:w-[80%] mx-auto font-serif text-lg md:text-xl text-white opacity-85">
                Welcome to our craft addition page! Here, you can unleash your
                creativity and add your unique sculpture items to our
                collection. Share your passion for art with the world by
                contributing your masterpieces directly to our database. Let
                your imagination soar as you showcase your talent and add to our
                vibrant community of artists.
              </p>
            </div>
            <div className="card flex-1 w-full ">
              <div className=" rounded-2xl">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="card-body font-serif p-0"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white text-xl font-semibold">
                          Item_Name
                        </span>
                      </label>
                      <input
                        type="text"
                        name="Item_Name"
                        placeholder="Enter Your Item_Name"
                        className="input input-accent text-white text-lg  border-[#ffff] bg-transparent"
                        {...register("Item_Name", { required: true })}
                      />
                      {errors.Item_Name && (
                        <span className="mt-2 text-yellow-300">
                          This field is required
                        </span>
                      )}
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white text-xl font-semibold">
                          Image
                        </span>
                      </label>
                      <input
                        type="url"
                        name="Image"
                        placeholder="Enter Your Image "
                        className="input input-accent text-white text-lg  border-[#ffff] bg-transparent"
                        {...register("Image", { required: true })}
                      />
                      {errors.Image && (
                        <span className="mt-2 text-yellow-300">
                          This field is required
                        </span>
                      )}
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white text-xl font-semibold">
                          Subcategory_Name
                        </span>
                      </label>
                      <select
                        name="Subcategory_Name"
                        id="Subcategory_Name"
                        className="select select-accent text-white text-lg  border-[#ffff] bg-transparent"
                        {...register("Subcategory_Name", { required: true })}
                      >
                        <option className="bg-accent text-xl ">
                          Clay Sculpture
                        </option>
                        <option className="bg-accent text-xl">
                          Stone Sculpture
                        </option>
                        <option className="bg-accent text-xl">
                          Metal Sculpture
                        </option>
                        <option className="bg-accent text-xl">
                          Food carving
                        </option>
                        <option className="bg-accent text-xl">
                          Natural Material Sculpture
                        </option>
                        <option className="bg-accent text-xl">
                          Beaded Sculpture
                        </option>
                      </select>

                      {errors.Subcategory_Name && (
                        <span className="mt-2 text-yellow-300">
                          This field is required
                        </span>
                      )}
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white text-xl font-semibold">
                          Stock_Status
                        </span>
                      </label>
                      <input
                        type="text"
                        name="Stock_Status"
                        placeholder="Enter Your Stock_Status"
                        className="input input-accent text-white text-lg  border-[#ffff] bg-transparent"
                        {...register("Stock_Status", { required: true })}
                      />
                      {errors.Stock_Status && (
                        <span className="mt-2 text-yellow-300">
                          This field is required
                        </span>
                      )}
                    </div>

                    <div className="form-control col-span-1 md:col-span-2">
                      <label id="Short_Description" className="label">
                        <span className="label-text text-white text-xl font-semibold">
                          Short_Description
                        </span>
                      </label>
                      <textarea
                        id="Short_Description"
                        rows="6"
                        type="text"
                        name="Short_Description"
                        placeholder="Enter Your Short_Description"
                        className="input-accent text-white text-lg border p-3 rounded-2xl  border-[#ffff] bg-transparent my-5"
                        {...register("Short_Description", { required: true })}
                      />
                      {errors.Short_Description && (
                        <span className="mt-2 text-yellow-300">
                          This field is required
                        </span>
                      )}
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white text-xl font-semibold">
                          Price
                        </span>
                      </label>
                      <input
                        type="text"
                        name="Price"
                        placeholder="Enter Item Price "
                        className="input input-accent text-white text-lg  border-[#ffff] bg-transparent"
                        {...register("Price", { required: true })}
                      />
                      {errors.Price && (
                        <span className="mt-2 text-yellow-300">
                          This field is required
                        </span>
                      )}
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white text-xl font-semibold">
                          Rating
                        </span>
                      </label>
                      <input
                        type="text"
                        name="Rating"
                        placeholder="Enter Your Rating"
                        className="input input-accent text-white text-lg  border-[#ffff] bg-transparent"
                        {...register("Rating", { required: true })}
                      />
                      {errors.Rating && (
                        <span className="mt-2 text-yellow-300">
                          This field is required
                        </span>
                      )}
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white text-xl font-semibold">
                          Customization
                        </span>
                      </label>
                      <input
                        type="text"
                        name="Customization"
                        placeholder="Is It Customized ?"
                        className="input input-accent text-white text-lg  border-[#ffff] bg-transparent"
                        {...register("Customization", { required: true })}
                      />
                      {errors.Customization && (
                        <span className="mt-2 text-yellow-300">
                          This field is required
                        </span>
                      )}
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white text-xl font-semibold">
                          Processing_Time
                        </span>
                      </label>
                      <input
                        type="text"
                        name=" Processing_Time"
                        placeholder="Enter The Item  Processing Time"
                        className="input input-accent text-white text-lg  border-[#ffff] bg-transparent"
                        {...register("Processing_Time", { required: true })}
                      />
                      {errors.Processing_Time && (
                        <span className="mt-2 text-yellow-300">
                          This field is required
                        </span>
                      )}
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white text-xl font-semibold">
                          User_Name
                        </span>
                      </label>
                      <input
                        type="text"
                        defaultValue={displayName}
                        readOnly
                        name="User_Name"
                        placeholder="Enter Your"
                        className="input input-accent text-white text-lg  border-[#ffff] bg-transparent"
                        {...register("User_Name", { required: true })}
                      />
                      {errors.User_Name && (
                        <span className="mt-2 text-yellow-300">
                          This field is required
                        </span>
                      )}
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white text-xl font-semibold">
                          User_Email
                        </span>
                      </label>
                      <input
                        type="email"
                        defaultValue={email}
                        readOnly
                        name="User_Email"
                        placeholder="Enter Your"
                        className="input input-accent text-white text-lg  border-[#ffff] bg-transparent"
                        {...register("User_Email", { required: true })}
                      />
                      {errors.User_Email && (
                        <span className="mt-2 text-yellow-300">
                          This field is required
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="form-control mt-10 mb-6">
                    <button
                      type="submit"
                      className="btn bg-transparent text-2xl hover:bg-[#628E90] text-white transition-all"
                    >
                      ADD ITEM
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCraft;
