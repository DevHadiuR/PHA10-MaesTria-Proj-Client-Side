import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FaSquareInstagram, FaSquareTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <section className="mt-32">
      <div className="footer p-10 py-28 bg-[#3F3F3F] font-serif text-lg text-white">
        <aside>
          <img className="w-64" src="/log3.jpg" alt="" />
          <br />
          <p>
            MaesTria Meusium Co.
            <br />
            Providing reliable Sculpture Artifact since 2002
          </p>
        </aside>
        <nav className="space-y-5">
          <h6 className="footer-title">Contact Us</h6>
          <a className="link link-hover flex items-center gap-3">
            <BsFillTelephoneFill /> +999-111-0000
          </a>
          <a className="link link-hover flex items-center gap-3">
            <MdEmail className="text-2xl" /> Maestria@007.com
          </a>
          <a className="link link-hover flex items-center gap-5">
            <FaFacebook className="text-3xl" />{" "}
            <FaSquareInstagram className="text-3xl" />{" "}
            <FaLinkedinIn className="text-3xl" />{" "}
            <FaSquareTwitter className="text-3xl" />
          </a>
        </nav>
        <nav className="space-y-9">
          <h6 className="footer-title">Newsletter</h6>
          <label className="input text-black input-bordered flex items-center gap-2">
            Email
            <input type="text" className="grow" placeholder="yourEmail@.com" />
          </label>
         
     <button className="btn bg-[#525CEB] text-white border-none w-[50%]">Subscribe</button>
        </nav>
      </div>
      <div className="footer items-center px-4 py-10 bg-[#333333] text-neutral-content ">
        <aside className="items-center grid-flow-col">
         
          <p className="text-lg">Copyright © 2024 - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
         <p className="text-xl">Privacy Policy</p>
        </nav>
      </div>
    </section>
  );
};

export default Footer;
