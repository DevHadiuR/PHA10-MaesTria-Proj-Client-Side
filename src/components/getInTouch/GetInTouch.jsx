const GetInTouch = () => {
  return (
    <div>
      <h1 className="text-5xl font-dm w-[90%] mx-auto">--- GET IN TOUCH</h1>

      <div className="mt-16 py-20 bg-base-200">
      <label className="input input-bordered flex items-center gap-2 text-2xl font-semibold border-t-0 pb-10 border-gray-400 border-x-0 w-full md:w-[80%] mx-auto mb-16 bg-transparent">
  Name*
  <input type="text" className="grow " placeholder="Enter Your Full Name" />
</label>
      <label className="input input-bordered flex items-center gap-2 text-2xl font-semibold border-t-0 pb-10 border-gray-400 border-x-0 w-full md:w-[80%]  mx-auto mb-16 bg-transparent">
  Email*
  <input type="text" className="grow " placeholder="Enter Your Email" />
</label>
      <label className="input input-bordered flex items-center gap-2 text-2xl font-semibold border-t-0 pb-10 border-gray-400 border-x-0 w-full md:w-[80%]  mx-auto mb-16 bg-transparent">
  Phone*
  <input type="text" className="grow " placeholder="Phone Number" />
</label>
      <label className="input input-bordered flex items-center gap-2 text-2xl font-semibold border-t-0 pb-10 bg-transparent border-0 border-x-0 w-full md:w-[80%]  mx-auto">
  Message*
  <input type="text"  className="grow break-all" placeholder="Message Here" />
</label>
<div className="mt-10 w-full md:w-[80%]  mx-auto pt-14 border-t border-gray-400">
    <button className="btn px-5 ml-16 bg-[#628E90] text-white text-xl">Send Message</button>
</div>
      </div>
    </div>
  );
};

export default GetInTouch;
