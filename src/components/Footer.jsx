import React from "react";
import avatar from "../assets/Image/avatar_footer.png";
const Footer = () => {
  return (
    <footer
      className=" bg-darkText py-20 px-6 "
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1000"
    >
      <div className=" gap-14 container mx-auto max-w-[1140px] flex flex-col">
        <div className=" flex flex-col text-white">
          <span className=" text-center text-3xl">Are you interested</span>
          <span className=" text-center text-5xl">IT'S TIME TO DISCOVER</span>
          <span className=" text-center text-3xl">THE BUILDING</span>
        </div>
        <div
          className="grid gap-10
         text-serviceBg lg:grid-cols-3"
        >
          <div
            className=" flex flex-col gap-5"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1000"
          >
            <h2>BUILDING LOCATION</h2>
            <p>
              Motivation can take you far, but it can take you even further if
              you first find your vision. Your vision will motivate and guide
              you on
            </p>
            <span>
              ADDRESS: Logan Barker, 865 Oak Boulevard, Elk Grove, Vermont 95184{" "}
            </span>
            <span>PHONE: 012-345-6788</span>
            <span>email@support.com</span>
          </div>
          <div
            className=" flex flex-col gap-3"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1000"
          >
            <h2>Contact Agent</h2>
            <div className=" flex flex-col gap-5">
              <div className="flex items-center gap-5">
                {" "}
                <div>
                  <img src={avatar} alt="" />
                </div>
                <div>
                  <p>William jacobs</p>
                  <p>Certified Agent</p>
                </div>
              </div>
              <span>2134568789</span>
              <span>agent.name@example.com</span>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1000"
          >
            <form className=" text-white flex flex-col gap-3">
              <input
                className=" border border-gold p-3 outline-none bg-transparent"
                type="text"
                placeholder="Yourname"
              />
              <input
                className=" border border-gold p-3 outline-none bg-transparent"
                type="text"
                placeholder="Phone number"
              />
              <input
                className=" border border-gold p-3 outline-none bg-transparent"
                type="email"
                placeholder="Your e-mail"
              />
              <textarea
                className=" resize-none h-[120px] border border-gold p-3 outline-none bg-transparent"
                placeholder="How can we help you?"
              ></textarea>
              <input
                className="border hover:text-serviceBg hover:bg-gold bg-serviceBg duration-200 py-2 text-gold cursor-pointer "
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        </div>
        <div className=" text-lightText text-center">
          <span className=" text-white"> © MAISONCO.</span> ALL RIGHTS RESERVED.{" "}
          <span className=" text-gold cursor-pointer">TERMS OF USE</span> AND{" "}
          <span className=" text-gold cursor-pointer">PRIVACY POLICY</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
