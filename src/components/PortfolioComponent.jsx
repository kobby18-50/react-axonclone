import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import GITMIS from "../assets/images/portfolio/gitmis3_img.svg"
import BVMS from "../assets/images/portfolio/bvms_img.svg"
import PAYROLL from "../assets/images/portfolio/axonpayroll_img.svg"
import SSMAS from "../assets/images/portfolio/ssmas_img.svg"
import HEALTH from "../assets/images/portfolio/healthpro_img.svg"
import GWTS from "../assets/images/portfolio/gwts_img.svg"
import { BsFillStarFill } from "react-icons/bs";

import Testimonial1 from "../assets/images/testimonials/author-01.png"
import Testimonial2 from "../assets/images/testimonials/author-02.png"
import Testimonial3 from "../assets/images/testimonials/author-03.png"

import EC from "../assets/images/clients/ec_banner.svg"
import GRA from "../assets/images/clients/gra_banner.svg"
import UG from "../assets/images/clients/ug_hospital_banner.svg"
import VODA from "../assets/images/clients/vodafone_banner.svg"
import NMDS from "../assets/images/clients/nmds_banner.svg"
import MARITIME from '../assets/images/clients/maritime_banner.svg'

import { TfiLocationPin } from "react-icons/tfi";
import { AiOutlineMail } from "react-icons/ai";


const PortfolioComponent = () => {

    const cards = [
        {
            img : GITMIS,
            title : "ghana integrated tax management & integration system (gitmis 3)",
            sub : "Ghana Revenue Authority"
        },

        {
            img : BVMS,
            title : "biometric voter registration & management solution (bvrms)",
            sub : "Electoral Commission of Ghana"
        },

        {
            img : SSMAS,
            title : "student sponsorship management & administration systems (ssmas)",
            sub : "NMDS - Lesotho"
        },

        {
            img : GWTS,
            title : "Ghana Wood Tracking System (GWTS)",
            sub : "Forestry Commission of Ghana"
        },

        {
            img : HEALTH,
            title : "Axon Health PRO Solutions",
            sub : "University of Ghana Medical Center"
        },

        {
            img : PAYROLL,
            title : "Axon Payroll Solutions",
            sub : "KPMG, Ghana"
        },

        {
            img : GWTS,
            title : "Student Loan Trust Fund Management System",
            sub : "SLTF, Ghana"
        }
    ]

    const clients = [
        {
            logo : EC,
            link : "https://ec.gov.gh/"
        },

        {
            logo : GRA,
            link : "https://gra.gov.gh"
        },

        {
            logo : UG,
            link : "https://ugmedicalcentre.org"
        },

        {
            logo : VODA,
            link : "https://vodafone.com.gh/home/"
        },

        {
            logo : NMDS,
            link : "https://www.gov.ls/"
        },

        {
            logo : MARITIME,
            link : "https://ghanamaritime.org/home/"
        },
    ]
    return ( 
        <div>
            <div className="lg:mx-[200px] sm:mx-10">

           <div className="mt-[100px]">
            <h1 className="text-primary font-medium mt-10 mb-3 text-lg">Porfolio</h1>

            <h1 className="text-3xl">Case Studies</h1>

            <div className="lg:flex justify-between py-3 ">
            <p className="text-body-color">
            There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
            </p>

            <Link to = {'/portfolio'}>
            <button className="btn text-primary bg-white capitalize hover:bg-primary hover:text-white px-7 shadow-sm py-3 hover:shadow-lg space-x-3 sm:my-10 border-gray-200">
               <span> Our Porfolio</span>
               <span><HiArrowNarrowRight/></span>
            </button>
            </Link>
            </div>
           </div>

            

            {/* cards */}

           <div className="grid lg:grid-cols-3">
            {
                cards.filter((card,index)=>(
                    index < 3
                ))
                .map((card,map) => (
                    <div className="card lg:w-[400px] my-5">
                        <figure>
                            <img src={card.img} alt="cards" className="rounded-md" />
                        </figure>

                        <div className="-mt-[80px] border bg-white w-[80%] mx-10 py-10 px-3 rounded-lg text-center shadow-lg" >
                            <h1 className="font-bold capitalize">{card.title}</h1>
                            <p className="text-primary text-sm mb-5">{card.sub}</p>
                            <button className="btn text-primary bg-white capitalize hover:bg-primary hover:text-white px-5 shadow-sm py-3 hover:shadow-lg border-gray-200">
               <span> View Details</span>
               
            </button>
                        </div>
                    </div>
                ))
            }
           </div>





            </div>
           {/* end of cards */}


          

           <div className="border bg-[#f2f7fd]">
            <div className="text-center mt-[100px]">
                <h1 className="font-semibold text-lg text-primary mb-2">Testimonials</h1>
                <h1 className="font-medium text-3xl text-dark">What our Clients Say</h1>
                <p className="text-lg text-body-color  sm:mx-10  lg:mx-[300px]">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
            </div>

            <div className="grid lg:grid-cols-3 sm:mb-10 lg:space-x-10 my-[100px] lg:mx-[200px] sm:mx-10">
                {/* card1 */}
                <div className="shadow-lg bg-white p-4 lg:max-w-md sm:max-w-xs max-h-[200px] sm:mb-10">
                    <div className="flex text-secondary">
                        <div><BsFillStarFill/></div>
                        <div><BsFillStarFill/></div>
                        <div><BsFillStarFill/></div>
                        <div><BsFillStarFill/></div>
                        <div><BsFillStarFill/></div>
                    </div>

                    <p className="text-base text-body-color pt-1">“Our members are so impressed. It's intuitive. It's clean.
                It's distraction free. If you're building a community.</p>

                <div className="flex space-x-3 mt-5">
                        <figure>
                            <img src={Testimonial1} alt="test1" />
                            
                        </figure>

                        <div>
                            <p className="font-semibold text-sm">Sabo Masties</p>
                            <p className="text-[#969696] text-xs">Founder @ Rolex</p>
                        </div>
                    </div>

                </div>
                


                {/* card2 */}

                <div className="shadow-lg bg-white p-4 lg:max-w-md sm:max-w-xs max-h-[200px]  sm:mb-10">
                    <div className="flex text-secondary">
                        <div><BsFillStarFill/></div>
                        <div><BsFillStarFill/></div>
                        <div><BsFillStarFill/></div>
                        <div><BsFillStarFill/></div>
                        <div><BsFillStarFill/></div>
                    </div>

                    <p className="text-base text-body-color pt-1">“Our members are so impressed. It's intuitive. It's clean.
                It's distraction free. If you're building a community.</p>

                <div className="flex space-x-3 mt-5">
                        <figure>
                            <img src={Testimonial2} alt="test1" />
                            
                        </figure>

                        <div>
                        <p className="font-semibold text-sm">Margin Gesmu</p>
                            <p className="text-[#969696] text-xs">Founder @ UI Hunter</p>
                        </div>
                    </div>

                </div>


                {/* card 3 */}
                <div className="shadow-lg bg-white p-4 lg:max-w-md sm:max-w-xs max-h-[200px] ">
                    <div className="flex text-secondary">
                        <div><BsFillStarFill/></div>
                        <div><BsFillStarFill/></div>
                        <div><BsFillStarFill/></div>
                        <div><BsFillStarFill/></div>
                        <div><BsFillStarFill/></div>
                    </div>

                    <p className="text-base text-body-color pt-1">“Our members are so impressed. It's intuitive. It's clean.
                It's distraction free. If you're building a community.</p>

                <div className="flex space-x-3 mt-5">
                        <figure>
                            <img src={Testimonial1} alt="test1" />
                            
                        </figure>

                        <div>
                            <p className="font-semibold text-sm">William Smith</p>
                            <p className="text-[#969696] text-xs">Founder @ Trorex</p>
                        </div>
                    </div>

                </div>
                

                {/* end of cards */}
                <div className="mt-[100px]">
                    <div>
                        <h1 className="text-sm font-normal text-body-color">Some of Our Clients </h1>
                    </div>

                    <div className="lg:flex sm:block ml-14 lg:space-x-14 sm:mx-20">
                        {
                            clients.map((client,index) => (
                                <div className="mt-5">
                                    <Link to={client.link}>
                                        <img src={client.logo} alt="logo" className="max-w-[140px] grayscale hover:filter-none hover:transition hover:duration-300 hover:ease-in-out" />
                                    </Link>
                                </div>
                            ))
                        }
                    </div>

                   
                </div>
            </div>
           </div>

            {/* end of testimonials */}

            <div className="bg-primary">
                <div className="pb-[150px]">
                <div className="lg:mx-[150px] sm:mx-10 py-20">
                    <h1 className="font-semibold text-lg text-secondary mb-5">Contact Us</h1>
                    <p className="text-[35px] font-semibold text-white">Lets talk about</p>
                    <p className="text-[35px] font-semibold text-white">Love to hear from you!</p>
                </div>

                <div className="hidden sm:block md:hidden">
                    <div className="grid grid-rows-2">
                    <div>
                            <div className="flex space-x-4 mx-20">
                                

                                <div className="block">
                                    <p className="text-lg font-semibold mb-6">Our Location</p>
                                    <p className="text-body-color">401 Broadway, 24th Floor, Orchard Cloud View, London</p>
                                </div>

                            </div>
                        </div>

                        <div>
                            <div className="flex space-x-4 mx-20">
                                

                                <div className="block my-5">
                                    <p className="text-lg font-semibold mb-6">How Can We Help?</p>
                                    <p className="text-body-color">
                                    info@yourdomain.com <br />
                                    contact@yourdomain.com
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>


                {/* form */}

                

                
                </div>
            </div>
            <div className="lg:mx-[150px] lg:mt-[100px] ">
                    <div className="lg:grid lg:grid-cols-3">
                    <div className="sm:hidden lg:flex">
                            <div className="flex space-x-4">
                                <div className="text-primary text-3xl"><TfiLocationPin/></div>

                                <div className="block">
                                    <p className="text-lg font-semibold mb-6">Our Location</p>
                                    <p className="text-body-color">401 Broadway, 24th Floor, Orchard Cloud View, London</p>
                                </div>

                            </div>
                        </div>


                        <div className="sm:hidden lg:flex">
                            <div className="flex space-x-4">
                                <div className="text-primary text-3xl"><AiOutlineMail/></div>

                                <div className="block">
                                    <p className="text-lg font-semibold mb-6">How Can We Help?</p>
                                    <p className="text-body-color">info@yourdomain.com <br />
                                    contact@yourdomain.com</p>
                                </div>

                            </div>
                        </div>


                        <div className="py-20">

                    <form className="shadow-lg rounded-lg bg-white py-10 px-8 lg:max-w-md sm:max-w-xs sm:mx-10 lg:-mt-[400px] sm:-mt-[100px]">
                        <h1 className="font-semibold mb-8 text-2xl">Send us a Message</h1>
 
                       <div className="mb-6">
                       <label className="text-xs text-dark">Full Name*</label><br />
                        <input type="text" className="w-full border-0 border-b border-[#f1f1f1] focus:border-primary focus:outline-none py-4 " placeholder="Adam Gelius" />
                       </div>

                       <div className="mb-6">
                       <label className="text-xs text-dark">Email*</label><br />
                        <input type="text" className="w-full border-0 border-b border-[#f1f1f1] focus:border-primary focus:outline-none py-4 " placeholder="example@yourmail.com" />
                       </div>

                       <div className="mb-6">
                       <label className="text-xs text-dark">Phone*</label><br />
                        <input type="text" className="w-full border-0 border-b border-[#f1f1f1] focus:border-primary focus:outline-none py-4 " placeholder="+885 1254 5211 552" />
                       </div>

                       <div className="mb-6">
                       <label className="text-xs text-dark">Message*</label><br />
                        <input type="text" className="w-full border-0 border-b border-[#f1f1f1] focus:border-primary focus:outline-none py-4 " placeholder="type your message here" />
                       </div>

                       <div class="mb-0 ">
                <button type="submit"
                  class="w-full items-center justify-center py-4 px-6 rounded text-white bg-primary text-base font-medium hover:bg-secondary transition duration-300 ease-in-out">
                  Send Message
                </button>
              </div>

                       
                    </form>
                </div>
                    </div>
                </div>
        </div>
     );
}
 
export default PortfolioComponent;