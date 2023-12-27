import React from "react";
import "../App.css";

const Hero = () => {
  return (
    <div
      className=" text-white gap-y-6 uppercase h-[90vh] flex-col flex bg-fixed  justify-center
       items-center
        anim"
    >
      <h1 className="  text-6xl ">
        Smart livingwith <br /> 5-star services{" "}
      </h1>
      <p>
        {" "}
        convenient location-best price <br /> -2 or 3 Bedroom apartment.{" "}
      </p>
    </div>
  );
};

export default Hero;
