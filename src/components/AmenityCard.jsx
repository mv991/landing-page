import React from "react";
import Image from "next/image";
const AmenityCard = ({ img, text, p }) => {
  return (
    <div className="flex flex-col w-[230px] h-fit text-[#00357B] font-[500] bg-white shadow-xl cursor-pointer text-center amenity-card pb-6 hover:scale-110 ">
      <Image src={img} alt="img" width={300} height={300} className="w-full " />
      <h1 className="mt-3">{text}</h1>
      <p>{p}</p>
    </div>
  );
};

export default AmenityCard;
