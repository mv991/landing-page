import React from "react";

const Card = () => {
  return (
    <div className="card w-[300px] h-[300px] text-white md:mb-0 mb-12">
      <div className="w-full px-6 h-[80%] py-8">
        <p className="text-[12px] font-[300] mb-2 tracking-[4px]">PRICING STARTS FROM</p>
        <p className="text-5xl font-[500]">$ 425,000</p>
        <p className="text-xl my-3 font-oswald">AED 1.3 Million</p>
        <button className="text-white  py-4 w-full mx-auto text-[12px] rounded-md mt-2 font-[500] tracking-[2px] bg-[#17ABFF]">
          GET A PRESENTATION
        </button>
        <div></div>
      </div>
      <div className="h-[20%]  border-t-2 flex items-center justify-center">
        <p className="text-[12.5px]  w-[79.8%] mx-auto text-[#98C5E8] font-[300] ">
          Get an Expert’s Presentation of Real Estate in Dubai for Life and
          investment
        </p>
      </div>
    </div>
  );
};

export default Card;
