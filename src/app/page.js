import Card from "@/components/Card";
import Section2 from "@/components/Section2";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen home" >
          <div className="flex md:flex-row flex-col h-full w-[80%] mx-auto pt-[60px]">
            <div className="md:w-1/2 w-full flex flex-col   h-full pt-[160px]">
                <h1 className="text-3xl w-[350px] text-white font-bold">HARBOUR LIGHTS<br/>DE  <span className="text-[#17ABFF]"> GRESOGONO</span></h1>
                <p className="text-white font-semibold text-xl mt-4 w-[380px] max-w-full">1, 2 & 3 Bedrooms Seaside Apartments in Dubai Maritime City</p>
            </div>
            <div className="w-1/2 h-full items-center justify-end flex pt-12">
              <Card/>
            </div>
          </div>
     </div>
     <Section2/>
     </>
  );
}
