const About = () => {
  return (
    <div>
      <h1 className="text-4xl md:text-6xl text-center font-dm border-b-4 md:border-r-4 md:border-b-4 border-black md:w-[25%] mx-auto pb-5 pl-6">
        About Us
      </h1>

      <div className="hero mt-14">
        <div className="hero-content flex flex-col lg:flex-row-reverse">
          <div className="w-full flex-1 flex  flex-col md:flex-row justify-center gap-5">
            <span className="space-y-5">
              <img src="/c1.jpg" className="rounded-lg max-w-[350px] w-[90%]" />
              <img src="/c2.jpg" className="rounded-lg max-w-[350px] w-[90%]" />
            </span>
            <span className="space-y-5">
              <img src="/c3.jpg" className="rounded-lg max-w-[350px] w-[90%]" />
              <img src="/c4.jpg" className="rounded-lg max-w-[350px] w-[90%]" />
            </span>
          </div>
          <div className="w-full flex-1 ">
            <h1 className="text-3xl md:text-5xl font-dm font-medium">
              ---- Welcome
            </h1>
            <p className="py-6 text-xl">
              With over 10 years of experience, We create sculptures that make a
              positive and memorable impression and appeal to the imagination of
              my viewers.
              <br /> <br />
              For over 25 years we have been creating award-winning stone,
              bronze, and clay sculpture works that are exhibited in selected
              New York galleries. I work in a variety of genres and I am always
              open to new ideas and suggestions.
            </p>
            <div className="mt-5">
              <h1 className="list-disc flex text-xl gap-8">
                <span>
                  <li>6 Scuplture Awards</li>
                  <li>5 Best Projects</li>
                  <li>4 International Awards</li>
                </span>
                <span>
                  <li>3 metal craft award</li>
                  <li>4 Local Medel</li>
                  <li>Happy Artisian</li>
                </span>
              </h1>
            </div>
            <h1 className="mt-5 text-xl">
              In our portfolio, there are hundreds of successful sculpture works
              and dozens of satisfied customers. Most of the projects we’ve been
              working on were recognized innovative and won numerous awards.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
