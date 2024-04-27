import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
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
    const { email, password } = data;

    console.log(email, password);
  };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(/login.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content">
        <div className="hero min-h-screen ">
          <div className="hero-content flex flex-col lg:flex-row-reverse gap-10">
            <div className="text-center w-full flex-1 ">
              <h1 className="text-4xl md:text-6xl font-bold text-white opacity-90 font-dm">
                Log In to Your Account
              </h1>
              <p className="py-6 font-serif text-lg text-white opacity-85">
                &quot;Welcome back! Please sign in to access your account. Enter
                your email address and password to proceed. If you don&apos;t
                have an account yet, you can easily create one by clicking on
                the &apos;Sign Up&apos; link. Stay connected with us and explore
                the latest updates and features of our platform. &quot;
              </p>
            </div>
            <div className="card flex-1 w-full ">
              <div className=" rounded-2xl">
                <h1 className="text-center mt-2  w-[70%]  mx-auto  text-5xl font-semibold font-dm text-white opacity-90]">
                  LOGIN NOW!
                </h1>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="card-body font-serif"
                >
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white text-xl">
                        Email
                      </span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                      className="input input-accent text-white text-lg  border-[#ffff] bg-transparent"
                      {...register("email", { required: true })}
                    />
                    {errors.email && (
                      <span className="mt-2 text-yellow-300">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="form-control relative">
                    <label className="label">
                      <span className="label-text text-white text-xl">
                        Password
                      </span>
                    </label>
                    <input
                      type={showPass ? "text" : "password"}
                      name="password"
                      placeholder="Enter Your Password"
                      className="input input-accent text-white text-lg  border-[#ffff] bg-transparent"
                      {...register("password", { required: true })}
                    />
                    <span
                      onClick={handleShowPassword}
                      className="absolute bottom-3 right-5 text-2xl cursor-pointer"
                    >
                      {showPass ? (
                        <IoMdEyeOff className="text-white" />
                      ) : (
                        <IoEye className="text-white" />
                      )}
                    </span>
                  </div>
                  {errors.password && (
                    <span className="mt-2 text-yellow-300">
                      This field is required
                    </span>
                  )}
                  <div className="form-control mt-6">
                    <button
                      type="submit"
                      className="btn bg-transparent text-xl hover:bg-[#628E90] text-white transition-all"
                    >
                      LOGIN
                    </button>
                  </div>
                </form>
                <p className="text-white text-xl text-center font-semibold">
                  OR
                </p>
                <div className="text-white border-t-2 pt-5 mt-6 w-[60%] mx-auto ">
                  <div className="flex justify-center items-center mb-5 gap-6">
                    <span
                      // onClick={handleGoogleLogin}
                      className=" border-2 p-2 border-white rounded-full"
                    >
                      <FcGoogle className="text-2xl cursor-pointer hover:scale-125 transition-all" />
                    </span>
                    <span
                      // onClick={handleGithubLogin}
                      className="border-2 p-2 border-white rounded-full"
                    >
                      <FaGithub className="text-2xl cursor-pointer hover:scale-125 transition-all" />
                    </span>
                    <span
                      // onClick={handleTwitterLogin}
                      className="border-2 p-2 border-white rounded-full"
                    >
                      <FaTwitter className="text-2xl cursor-pointer hover:scale-125 transition-all text-blue-500" />
                    </span>
                  </div>
                </div>
                <div className="mb-5">
                  <h1 className="text-center text-lg font-serif text-white">
                    New To This Website ? Please{" "}
                    <Link
                      className="text-blue-500 underline cursor-pointer hover:scale-110 transition-all"
                      to="/register"
                    >
                      Register
                    </Link>{" "}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
