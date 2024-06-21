import Card from "@/components/Card";
import Section2 from "@/components/Section2";
import { Section3 } from "@/components/Section3";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-screen min-h-screen h-fit home" >
          <div className="flex md:flex-row flex-col min-h-screen h-fit items-center md:pt-0  sm:pt-[230px] pt-[200px]  lg:w-[80%] w-[90%] mx-auto pt-[60px] lg:max-w-[1300px]">
            <div className="md:w-1/2 w-full flex flex-col  h-1/2 ">
                <h1 className="text-5xl 2xl:text-7xl md:w-[370px] 2xl:w-[550px] text-white font-semibold leading-[60px] tracking-[2px]">HARBOUR LIGHTS<br/>DE  <span className="text-[#17ABFF]"> GRESOGONO</span></h1>
                <p className="text-white font-semibold text-2xl mt-4 md:w-[530px] 2xl:w-[650px] max-w-full font-poppins">1, 2 & 3 Bedrooms Seaside Apartments in Dubai Maritime City</p>
                <div className="h-fit w-[360px] card p-3 mt-[50px] font-[200] border-l-2 border-[#17ABFF] text-white max-w-[90%] font-poppins">Rental Returns of <span className="font-[400]">UPTO 11%**</span></div>
                <div className="h-fit w-[360px] card p-3 mt-3 font-[200] border-l-2 border-[#17ABFF] text-white font-poppins max-w-[90%]">Capital Appreciation of  <span className="font-[400]">UPTO 32%**</span></div>
            </div>
            <div className="md:w-1/2 w-full h-1/2  md:justify-end flex ">
              <Card/>
            </div>
          </div>
     </div>
     <Section2/>
     
     </>
  );
}
