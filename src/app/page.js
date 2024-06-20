import Card from "@/components/Card";
import Section2 from "@/components/Section2";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-screen min-h-screen h-fit home" >
          <div className="flex md:flex-row flex-col h-full w-[80%] mx-auto pt-[60px]">
            <div className="md:w-1/2 w-full flex flex-col   h-full md:pt-[160px] pt-[60px]">
                <h1 className="text-5xl md:w-[370px] text-white font-semibold leading-[60px] tracking-[2px]">HARBOUR LIGHTS<br/>DE  <span className="text-[#17ABFF]"> GRESOGONO</span></h1>
                <p className="text-white font-semibold text-2xl mt-4 md:w-[530px] max-w-full font-poppins">1, 2 & 3 Bedrooms Seaside Apartments in Dubai Maritime City</p>
            </div>
            <div className="md:w-1/2 w-full h-full items-center md:justify-end flex pt-12">
              <Card/>
            </div>
          </div>
     </div>
     <Section2/>
     </>
  );
}
