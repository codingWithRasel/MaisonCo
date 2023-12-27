import React from "react";
const arr = [
  { title: "Cheap Apartments" },
  { title: "Cheap Apartments" },
  { title: "Cheap Apartments" },
  { title: "Cheap Apartments" },
  { title: "Cheap Apartments" },
  { title: "Cheap Apartments" },
  { title: "Cheap Apartments" },
  { title: "Cheap Apartments" },
  { title: "Cheap Apartments" },
  { title: "Cheap Apartments" },
  { title: "Cheap Apartments" },
  { title: "Cheap Apartments" },
];
const Apartment = () => {
  return (
    <div>
      <div className=" text-lg font-bold text-white py-20 bg-apartBg flex justify-center items-center flex-col">
        <h2 className=" mb-4">APARTMENTS</h2>
        <p className=" text-gold">Home. Apartments</p>
      </div>
      <div className="container max-w-[1180px] mx-auto px-3 py-20">
        <div className=" grid lg:grid-cols-3 gap-10">
          {arr.map((e, i) => (
            <div
              className="bg-bg h-[250px] object-cover hover:scale-105 duration-300 border flex justify-center items-center flex-col"
              key={i}
            >
              <p className=" text-white text-xl">{e.title}</p>
              <p className=" text-gold">Explore</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apartment;
