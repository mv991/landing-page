import React from "react";
import Image from "next/image";
import AmenityCard from "./AmenityCard";
const Section2 = () => {
  return (
    <div className="w-screen h-screen bg-white">
      <div className="bg-[#F4F9FF] w-full h-[230px] flex justify-center items-center md:gap-[150px] gap-[100px] md:p-0 px-12 xl:gap-[180px] overflow-x-scroll ">
        <Image width={170} height={100} alt="img" src={"/book.png"} />
        <Image width={170} height={100} alt="img" src={"/payment.png"} />
        <Image width={140} height={80} alt="img" src={"/handover.png"} />
        <Image width={170} height={100} alt="img" src={"/area.png"} />
      </div>
      <h1>HARBOUR</h1>
      <h1>LIGHTS</h1>
      <p>de GRISOGONO</p>
      <p>GENEVE</p>

      <p>Features & Ameneties</p>
      <p className="text-center">
        Harbour Lights beautifully honours maritime voyages while embracing an
        opulent seafront lifestyle. Its maritime-inspired amenities provide an
        unmatched seaside experience, offering a life of tranquility and bliss.
      </p>
      <div className="lg:w-[1100px] mx-auto grid lg:grid-cols-4 sm:grid-cols-2 justify-items-center">
        <AmenityCard img={"/Group 133.png"} p={"pools"} text={"Floating"} />
        <AmenityCard img={"/Group 134.png"} p={"pools"} text={"Floating"} />
        <AmenityCard img={"/Group 135.png"} p={"pools"} text={"Floating"} />
        <AmenityCard img={"/Group 136.png"} p={"pools"} text={"Floating"} />
      </div>
    </div>
  );
};

export default Section2;
