import React from "react";
import image from "../assets/Image/img-05.jpg";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Overview = () => {
  return (
    <div className=" container max-w-[1180px] mx-auto px-3 py-20">
      <div>
        <div className=" flex gap-10  flex-col lg:flex-row items-center">
          <div
            className=" flex-1 flex flex-col gap-10"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h2 className=" text-xl lg:text-3xl text-darkText">
              the building overview
            </h2>
            <p>
              Introducing MaisonCo, the stunning new addition to the downtown
              Manhattan skyline. A perfect blend of breathtaking architecture
              designed, with awe-inspiring interiors envisioned
            </p>
            <p>
              Sleek and sophisticated, Costix offers qualities always coveted,
              but rarely obtained in the finest New York rental residences – a
              unique blend of generously proportioned interiors and the
              enjoyment of Nassau Club over 10,000 square feet of indoor and
              outdoor amenities creatively conceived to enhance your exceptional
              FiDi lifestyle.
            </p>
          </div>
          <div className="flex-1" data-aos="zoom-in" data-aos-duration="1000">
            <img src={image} />
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000"
        >
          <ul className=" uppercase flex justify-between">
            <li className="  py-20">
              <CountUp
                className=" text-4xl font-semibold"
                start={0}
                end={3450}
              />
              <p className=" text-globalTextColor mt-2 text-sm">square Areas</p>
            </li>
            <li className="  py-20">
              <CountUp
                className=" text-4xl font-semibold"
                start={0}
                end={2422}
              />
              <p className=" text-globalTextColor mt-2 text-sm">car parking</p>
            </li>
            <li className="  py-20">
              <CountUp
                className=" text-4xl font-semibold"
                start={0}
                end={1890}
              />
              <p className=" text-globalTextColor mt-2 text-sm">apartments</p>
            </li>
            <li className="  py-20">
              <CountUp
                className=" text-4xl font-semibold"
                start={0}
                end={1234}
              />
              <p className=" text-globalTextColor mt-2 text-sm">rooms</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Overview;
