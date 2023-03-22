import { Link } from "react-router-dom";
import { useState } from "react";
import EDelivery from "../components/CarouselComponents/EDelivery"
import HealthCare from "../components/CarouselComponents/HealthCare"
import Retail from "../components/CarouselComponents/Retail"



const Carousel = () => {

    const [filter, setFilter] = useState('register')

    const isActive = "border-t-2 border-secondary transition duration-300 font-semibold"

    
    return ( 
        <>
        <div className=" md:mx-[30px]">
            <div className="lg:flex sm:hidden md:flex ">
                <Link onClick={()=>setFilter('register')} className={`md:px-[70px] px-[150px] lg:py-4 font-semibold text-lg text-black cursor-pointer ${filter === 'register' ? isActive : "bg-gray-200 "}`}>
                E-Register & E-Service Delivery
                </Link>
                <Link 
                onClick={()=>setFilter('health')}
                className={`md:px-[70px] px-[150px] lg:py-4 font-semibold text-lg text-black ${filter === 'health' ? isActive : "bg-gray-200"}`}>Heathcare Services </Link>
                <Link
                onClick={()=>setFilter('retail')} className={`md:px-[70px] px-[150px] lg:py-4 font-semibold text-lg text-black ${filter === 'retail' ? isActive : "bg-gray-200"}`}>Retail & Ecommerce</Link>
            </div>

            <div className="lg:hidden sm:flex md:hidden">

                <div className="px-10">
                <p className="my-12">
                <Link onClick={()=>setFilter('register')} 
                className={` text-xl text-black  py-7  px-3 p-7  ${filter === 'register' ? isActive : "bg-gray-200"}`}
                >
                E-Register & E-Service Delivery
                </Link>
                </p>

                <p className="my-12">
                <Link onClick={()=>setFilter('health')}
                className={` text-xl text-black py-5 p-6  ${filter === 'health' ? isActive : "bg-gray-200"}`}
                >
                Heathcare Services
                </Link>
                </p>

                <p className="my-12">
                <Link onClick={()=>setFilter('retail')} 
                className={`text-xl text-black  py-5 p-6 ${filter === 'retail' ? isActive : "bg-gray-200"}`}
                >
                Retail & Ecommerce
                </Link>
                </p>
                </div>

            </div>
            { filter === 'register' && <EDelivery/>}
            {filter === 'health' && <HealthCare />}
            {filter === 'retail' && <Retail/>}

        </div>

        {/* <div className="lg:hidden sm:flex">
            carousel min
        </div> */}
        </>
     );
}
 
export default Carousel;