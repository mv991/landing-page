import React from "react";
import Image from "next/image";
const AmenityCard = ({ img, text, p }) => {
  return (
    <div className="flex flex-col w-[200px] h-fit bg-white shadow-xl text-center rounded-t-full rounded-b-2xl">
      <Image src={img} alt="img" width={100} height={100} className="w-full " />
      <h1 className="mt-3">{text}</h1>
      <p>{p}</p>
    </div>
  );
};

export default AmenityCard;
