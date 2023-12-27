import React from "react";
import img1 from "../assets/Image/gallery/gallery-1.jpg";
import img2 from "../assets/Image/gallery/gallery-2.jpg";
import img3 from "../assets/Image/gallery/gallery-3.jpg";
import img5 from "../assets/Image/gallery/gallery-5.jpg";
import img6 from "../assets/Image/gallery/gallery-6.jpg";
import img7 from "../assets/Image/gallery/gallery-7.jpg";
import img8 from "../assets/Image/gallery/gallery-8.jpg";
import img9 from "../assets/Image/gallery/gallery-9.jpg";
import img10 from "../assets/Image/gallery/gallery-10.jpg";
import img11 from "../assets/Image/gallery/gallery-11.jpg";
import img12 from "../assets/Image/gallery/gallery-12.jpg";
import img13 from "../assets/Image/gallery/gallery-13.jpg";
import img14 from "../assets/Image/gallery/gallery-14.jpg";
import img15 from "../assets/Image/gallery/gallery-15.jpg";
import "../App.css";
const Gallery = () => {
  return (
    <div>
      <div className=" text-lg font-bold text-white py-20 bg-apartBg flex justify-center items-center flex-col">
        <h2 className=" mb-4">Gallery</h2>
        <p className=" text-gold">Home. Gallery</p>
      </div>
      <div className="container max-w-[1180px] mx-auto px-3 py-20">
        <div className=" grid grid-cols-3 res">
          <div className=" group overflow-hidden ">
            <img
              className=" duration-500  group-hover:scale-105 w-full h-full object-cover"
              src={img1}
            />
          </div>
          <div className=" group overflow-hidden ">
            <img
              className=" duration-500  group-hover:scale-105 w-full h-full object-cover"
              src={img2}
            />
          </div>
          <div className=" group overflow-hidden ">
            <img
              className=" duration-500  group-hover:scale-105 w-full h-full object-cover"
              src={img3}
            />
          </div>
          <div className=" group overflow-hidden ">
            <img
              className=" duration-500  group-hover:scale-105 w-full h-full object-cover"
              src={img5}
            />
          </div>
          <div className=" group overflow-hidden ">
            <img
              className=" duration-500  group-hover:scale-105 w-full h-full object-cover"
              src={img6}
            />
          </div>
          <div className=" group overflow-hidden ">
            <img
              className=" duration-500  group-hover:scale-105 w-full h-full object-cover"
              src={img7}
            />
          </div>
          <div className=" group overflow-hidden ">
            <img
              className=" duration-500  group-hover:scale-105 w-full h-full object-cover"
              src={img8}
            />
          </div>
          <div className=" group overflow-hidden ">
            <img
              className=" duration-500  group-hover:scale-105 w-full h-full object-cover"
              src={img9}
            />
          </div>
          <div className=" group overflow-hidden ">
            <img
              className=" duration-500  group-hover:scale-105 w-full h-full object-cover"
              src={img10}
            />
          </div>
          <div className=" group overflow-hidden ">
            <img
              className=" duration-500  group-hover:scale-105 w-full h-full object-cover"
              src={img11}
            />
          </div>
          <div className=" group overflow-hidden ">
            <img
              className=" duration-500  group-hover:scale-105 w-full h-full object-cover"
              src={img12}
            />
          </div>
          <div className=" group overflow-hidden ">
            <img
              className=" duration-500  group-hover:scale-105 w-full h-full object-cover"
              src={img13}
            />
          </div>
          <div className=" group overflow-hidden ">
            <img
              className=" duration-500  group-hover:scale-105 w-full h-full object-cover"
              src={img14}
            />
          </div>
          <div className=" group overflow-hidden ">
            <img
              className=" duration-500  group-hover:scale-105 w-full h-full object-cover"
              src={img15}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
