import HeroImg from "../assets/images/hero/feature-1.svg"
import Dotes1 from "../assets/images/hero/hero-img-dots1.svg"
import Dotes2 from "../assets/images/hero/hero-img-dots2.svg"
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos"
import "aos/dist/aos.css"


const Hero = () => {

//     const [anime,setAnime] = useState(false)

//   const changeAnime = () => {
//     if (window.scrollY >= 90){
//       setAnime(true)
//     }else{
//       setAnime(false)
//     }
//   }

//   window.addEventListener('scroll', changeAnime)

useEffect(() =>{
AOS.init({
    duration : 1500
})
},[])

    return ( 
        <div>
            <div>
                <div className= "top-0 bg-gradient-to-bl from-[#188FC3]/80 via-[#1E67C2]/90 to-[#1E67C2]" >
                    <h1 className="text-[60px] sm:text-4xl sm:font-normal font-medium text-white  pt-[120px] text-center" data-aos="fade-up">
                      
                      <h1 className="py-4">
                      Creating Digital Products 
                         <br />
                         From Innovative Ideas
                      </h1>
                    <span className="text-lg">
                        Engage your businesses growth with our proven development and products to achieve zero latency and quality services.
                    </span>
                    <p>

                    
                    <Link to={'/contact-us'}>
                    <button className=" mt-10 btn border-none px-6 bg-white hover:text-white hover:bg-secondary hover:shadow-xl font-medium rounded-md transition duration-300 ease-in-out text-primary text-base mb-40">
                        <span className="capitalize">Contact Us</span>
                    </button>
                    </Link>
                    </p>
                
                    </h1>
                    {/*  */}

                    <div className="flex lg:mx-[300px] justify-between">
                        <img src={Dotes1} alt="" />
                        <img src={Dotes2} alt="" className="-mb-[160px]" />
                    </div>



                </div>
                    {/* end of dots */}

                    {/* start of hero img */}

                    <div className="grid lg:grid-cols-2  md:grid-cols-2 bg-primary">

                        <img src={HeroImg} alt="" className="md:h-full" />

                            {/* hero side text */}
                        <div className="text-white py-24 lg:px-[120px] sm:px-10">
                            <h1 className="text-secondary font-semibold text-xl">Boost your digital transformation today.</h1>
                            <p className="mt-2 font-medium text-4xl">We're here to help</p>
                            <p className="mt-6 text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel beatae nihil quia consequuntur rerum illo sit amet assumenda dolore dignissimos.</p>

                            <div className="flex mt-14 capitalize font-semibold gap-x-16">
                                <Link to={'/about-us'} className="flex hover:text-secondary hover:underline transition duration-300 ease-in-out ">
                                    <span>who we are</span>
                                    <span className="text-lg pt-1 pl-2"><HiArrowNarrowRight/></span>
                                </Link>
                                <Link to={'/about-us'} className="flex hover:text-secondary hover:underline transition duration-300 ease-in-out">
                                    <span>what we do</span>
                                    <span className="text-lg pt-1 pl-2"><HiArrowNarrowRight/></span>

                                </Link>
                            </div>
                        </div>


                    </div>

                
            </div>
        </div>
     );
}
 
export default Hero;