import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";
// import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import { ProjectContext } from "../../hooks/provider/ArtProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const { createUser } = useContext(ProjectContext);

  const handleError = (er) => {
    toast.error(er, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const handleShowPassword = () => {
    setShowPass(!showPass);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { name, email, password, url } = data;

    if (!/@.*\.com$/.test(email)) {
      handleError("Email must contain with '.com' at the end!");
      return;
    } else if (!password.length > 6) {
      handleError("Password must be at least 6 characters long!");
      return;
    } else if (!/[A-Z]/.test(password)) {
      handleError("Password must contain at least one uppercase letter!");
      return;
    } else if (!/[a-z]/.test(password)) {
      handleError("Password must contain at least one lowercase letter!");
      return;
    } else if (!/[$&+,:;=?@#|'<>.^*()%!-]/.test(password)) {
      handleError("Password must contain at least one special character!");
      return;
    } else if (!/\d.*\d/.test(password)) {
      handleError("Password must contain at least 2 digit numbers!");
      return;
    }

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        Swal.fire({
          title: "Congratulation!",
          text: "You Have Successfully Registered!",
          icon: "success",
        });
        updateProfile(user, {
          displayName: name,
          photoURL: url,
        });

        reset();
      })
      .catch((error) => {
        console.log(error.message);
        const err = error.message
          .split("/")
          .pop()
          .replace(/^\w/, (c) => c.toUpperCase());
        Swal.fire({
          icon: "error",
          title: "Sorry...",
          text: err,
        });
      });
  };

  return (
    <div className="hero min-h-screen bg-[#628E90]  py-24  mt-24">
      <div className="hero-content flex   gap-5 flex-col lg:flex-row  w-full">
        <div className=" flex-1 w-full rounded-xl">
          <div
            className="hero min-h-screen rounded-xl"
            style={{
              backgroundImage: "url(/register.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-40 rounded-xl"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-lg">
                <h1 className="mb-5 text-4xl md:text-5xl font-bold font-dm">
                  Join the Community of Art Enthusiasts
                </h1>
                <p className="mb-5 font-serif">
                  Welcome to the vibrant world of sculpting! Dive into a realm
                  where creativity knows no bounds and imagination takes shape
                  in the form of clay, stone, metal, and more. Whether
                  you&apos;re a seasoned sculptor or just starting on your
                  artistic journey, our registration page opens the door to a
                  community of like-minded individuals passionate about
                  sculpting.
                  <br />
                  <br />
                  Unlock a plethora of resources, from expert tutorials and tips
                  to engaging forums where you can share your latest creations
                  and seek inspiration from fellow sculptors. Connect with
                  artists from around the globe, each with their own unique
                  style and perspective, and embark on a collaborative journey
                  that celebrates the beauty of three-dimensional art. Join us
                  today and become part of a supportive network that nurtures
                  creativity, fosters growth, and celebrates the diverse
                  artistry of sculpture. Sign up now to unleash your artistic
                  potential and sculpt your dreams into reality!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card flex-1 w-full ">
          <div className=" bg-[#F5EFE6] rounded-2xl">
            <h1 className="text-center mb-2 mt-2 border-b-2 w-[70%] border-[#543A3A] mx-auto pb-6 text-5xl font-semibold font-dm text-[#3D3B40]">
              REGISTER NOW!
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body font-serif"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="input input-bordered border-[#543A3A]"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="mt-2 text-red-800">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">URL</span>
                </label>
                <input
                  type="url"
                  name="url"
                  placeholder="Enter Your Photo URL"
                  className="input input-bordered border-[#543A3A]"
                  {...register("url", { required: true })}
                />
                {errors.url && (
                  <span className="mt-2 text-red-800">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered border-[#543A3A]"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="mt-2 text-red-800">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  placeholder="Enter Your Password"
                  className="input input-bordered border-[#543A3A]"
                  {...register("password", { required: true })}
                />
                <span
                  onClick={handleShowPassword}
                  className="absolute bottom-3 right-5 text-2xl cursor-pointer"
                >
                  {showPass ? <IoMdEyeOff /> : <IoEye />}
                </span>
              </div>
              {errors.password && (
                <span className="mt-2 text-red-800">
                  This field is required
                </span>
              )}
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn bg-[#628E90] text-lg hover:bg-[#3C2317] text-white transition-all"
                >
                  REGISTER
                </button>
                <ToastContainer />
              </div>
            </form>
            <div className="mb-5">
              <h1 className="text-center font-serif text-lg">
                Already Have An Account ? Please{" "}
                <Link className="text-blue-700 underline" to="/login">
                  Login
                </Link>{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
