import Carousel from "./Carousel";
import ServicesComponent from "./ServicesComponent";

import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";


const ProductComponent = () => {

   useEffect(()=>{
      AOS.init({
         duration : 1500
      })
   },[])
    return ( 
        <>
        <div className="pt-14 py-32 text-center" data-aos="fade-up">
           <h1 className="text-primary font-semibold text-md ">
            Products & Solutions
           </h1>
           <p className="font-medium text-3xl text-dark mb-4">Ready to dive in?</p>
           <p className="text-lg text-body-color">Clean and simple design, comes with everything you need to get started</p>


           {/* carousel */}
        </div>
          
           <div className="lg:mx-[200px]">
           <Carousel/>
           </div>

         {/* services */}

           <ServicesComponent/>
           
        </>
     );
}
 
export default ProductComponent;