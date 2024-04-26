const Register = () => {
  return (
    <div className="hero min-h-screen bg-base-200 py-24 ">
      <div className="hero-content flex   gap-5 flex-col lg:flex-row  w-full">
        <div className=" flex-1 w-full rounded-xl">
          <div
            className="hero min-h-screen rounded-xl"
            style={{
              backgroundImage:
                "url(/register.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-40 rounded-xl"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-lg">
                <h1 className="mb-5 text-4xl md:text-5xl font-bold font-dm">Join the Community of Art Enthusiasts</h1>
                <p className="mb-5 font-serif">
                Welcome to the vibrant world of sculpting! Dive into a realm where creativity knows no bounds and imagination takes shape in the form of clay, stone, metal, and more. Whether you're a seasoned sculptor or just starting on your artistic journey, our registration page opens the door to a community of like-minded individuals passionate about sculpting.
                <br />
                <br />

Unlock a plethora of resources, from expert tutorials and tips to engaging forums where you can share your latest creations and seek inspiration from fellow sculptors. Connect with artists from around the globe, each with their own unique style and perspective, and embark on a collaborative journey that celebrates the beauty of three-dimensional art.

Join us today and become part of a supportive network that nurtures creativity, fosters growth, and celebrates the diverse artistry of sculpture. Sign up now to unleash your artistic potential and sculpt your dreams into reality!







                </p>
                
              </div>
            </div>
          </div>
        </div>
        <div className="card flex-1 w-full  shadow-2xl">
            <h1 className="text-center mb-10 text-5xl font-semibold font-dm text-[#3D3B40]">REGISTER NOW!</h1>
            
         <div className=" bg-base-100">

         <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
