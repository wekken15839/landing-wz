"use client"
import Logo from "../Logo";
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai"
import EmailToast from "../EmailToast";
const notify = () => toast.success('Here is your toast.');

export default function Footer() {

  return (<div className="min-h-[200px] bg-[#263238] flex flex-col  md:flex-row text-white w-full px-10 py-5 items-center lg:px-20 md:gap-5">
    <div className="flex flex-col w-full h-full justify-center pb-5 md:items-start">
      <div className="flex justify-center lg:justify-start items-center mb-3">
        <Logo width={40} height={40} />
        <h5 className="text-base md:text-lg font-bold">Web Zeppelin</h5>
      </div>
      <div className="flex justify-center md:items-center lg:justify-start text-2xl sm:text-3xl gap-3 pl-1">
        <AiFillInstagram />
        <AiFillFacebook />
        <AiFillTwitterCircle />
        <AiFillYoutube />
      </div>
    </div>
    <div className="grid grid-cols-2 place-items-center gap-10 w-full pb-5">
      <div className="flex flex-col md:flex-row gap-1">
        <div className="flex flex-col gap-1 md:gap-2">
          <h5 className="text-base md:text-lg font-bold">Company</h5>
          <small>About us</small>
          <small>Blog</small>
          <small>Pricing</small>
          <small>Contact Us</small>
          <small>Testimonials</small>
        </div>
      </div>
      <div className="flex flex-col gap-1 md:gap-2">
        <h5 className="text-base md:text-lg font-bold">Support</h5>
        <small>Help center</small>
        <small>Terms of service</small>
        <small>Legal</small>
        <small>Privacy policy</small>
        <small>Status</small>

      </div>
    </div>
    <div className="flex flex-col items-center  gap-1 md:gap-2  w-full h-full md:w-2/4  ">
      <h5 className="text-base md:text-lg font-bold">Stay to update</h5>
      <div className="flex relative">
        <input type="email" className="bg-blue-gray-800 text-white pl-2 rounded-md" placeholder="Your email address" />
        <EmailToast />
      </div>
    </div>
  </div>);
};  