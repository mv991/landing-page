"use client"
import React,{useState} from "react";
import Image from "next/image";
import LightHouse from "./LightHouse";
export const Section3 = () => {
     const [mainImg,setMainImg] = useState("/Rectangle 89.jpg");
     const [images,setImages] = useState(["/sec1.jpg","/sec2.jpg","/sec3.jpg","/sec4.jpg"]);
     const [open,setOpen] = useState(false)
     function handleImageChange(img) {
        const newImgs = images.filter((image,index) => image!==img);
        setImages([...newImgs,mainImg]);
        setMainImg(img);
 
     }
    return (<><div className="lg:w-full w-[97%] mx-auto h-fit flex flex-col">
        <div className="w-full h-fit relative">
             <Image src={mainImg} height={900} width={900} alt="img" className="w-full h-auto max-h-[600px] object-cover lg:rounded-xl rounded-md cursor-pointer" onClick={() => {setOpen(true); document.body.style.overflow = "hidden"}}/>  
             <div className="m-2 absolute left-[10px] top-[50%] bg-white rounded-ful w-[40px] h-[40px] flex items-center justify-center rounded-full" onClick={() => handleImageChange(images[0])}>
             <Image src={"/left-arrow.svg"} width={15} height={20} alt="arrow" className="cursor-pointer " />
             </div>
             <div className="m-2 absolute right-[10px] top-[50%] bg-white rounded-ful w-[40px] h-[40px] flex items-center justify-center rounded-full" onClick={() => handleImageChange(images[3])}>
             <Image src={"/right-arrow.svg"} width={15} height={15} alt="arrow" className="cursor-pointer"/>    
             </div>
        </div>
        <div className="flex w-full max-w-full justify-between mt-4">
            {images.map((img,index) => <Image src={img} width={900} height={900} alt="img" className="w-[24%] sm:rounded-2xl rounded-md bg-cover cursor-pointer" onClick={() => {handleImageChange(img)}} key={index}></Image>)}

        </div>

    </div>
   {open && <LightHouse setOpen={setOpen} img={mainImg} open={open}/>}
    </>
    )
}