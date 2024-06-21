'use client'
import Image from "next/image"
import React,{useRef,useEffect} from "react"
export default function LightHouse({img,open,setOpen}) {

    const modalWrapperRef = useRef(null)
    const handleClickOutside = (event) => {
     
      if (modalWrapperRef.current && !modalWrapperRef.current.contains(event.target)) {
           document.body.style.overflowY = "scroll"
          setOpen(false);
         
      }
       
       ; 
      
    
    };
    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, [open]);

    return(<>

    <div className="fixed top-0 left-0 h-screen w-screen backdrop flex justify-center items-center z-[7]">
              <Image src={img} alt="main-img" width={400} height={400} className="w-auto h-auto max-w-[90%] max-h-[90%]"   ref={modalWrapperRef}/>
    </div>

    </>)
}