import Carousel from "./Carousel";
import ServicesComponent from "./ServicesComponent";


const ProductComponent = () => {
    return ( 
        <>
        <div className="pt-14 py-32 text-center">
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