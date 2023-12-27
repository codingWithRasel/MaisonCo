import React from "react";
import image from "../assets/Image/slide-amenties2.jpg";
const Amenities = () => {
  return (
    <div>
      <div className=" py-10 flex flex-col lg:flex-row items-center px-10 gap-y-10 gap-x-28">
        <div data-aos="fade-right" data-aos-duration="1000">
          <img src={image} />
        </div>
        <div
          className=" flex-1 flex flex-col gap-10"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <h2 className=" uppercase text-xl lg:text-3xl text-darkText">
            Building Amentities
          </h2>
          <p className=" w-1/2 text-lightText">
            From the vibrant ground level plaza to the terraces, private
            gardens, balconies and lush rooftop work spaces, Costix offers an
            array of amenities …
          </p>
          <ul className="flex  gap-20">
            <div className=" space-y-5">
              <li>Business Services</li>
              <li>Courtesy Newspaper</li>
              <li>Fitness Facility</li>
              <li>Meeting & Event</li>
            </div>
            <div className=" space-y-5">
              <li>Swimming pool</li>
              <li>Restaurant</li>
              <li>Community Center</li>
              <li>Spa Facility</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
