import About1 from "../assets/images/about/feature-2.svg"
import About2 from "../assets/images/about/feature-1.svg"
import Dots from "../assets/images/team/dotted-shape.svg"
import Circle from "../assets/images/team/shape-2.svg"
import Team1 from "../assets/images/team/team-01.png"
import Team2 from "../assets/images/team/team-02.png"
import Team3 from "../assets/images/team/team-03.png"
import { FaFacebookF,FaTwitter,FaInstagram} from "react-icons/fa";
import { BsCheck2Circle } from "react-icons/bs";



const AboutUs = () => {
    return ( 
        <div>
            <div>
                <div>
                    {/* hero */}
                   <div className="backAbout2">
                    
                   <div className=" text-center bg-gradient-to-bl from-[#188FC3]/80 via-[#1E67C2]/90 to-[#1E67C2] pt-[160px] pb-[100px] ">
                       <div className="">
                       <h1 className="font-bold text-3xl text-white mb-4">Who We Are</h1>
                        <p className="text-lg text-white sm:mx-[30px]">Axon Information offers our customers a wealth of technical and business expertise </p>
                       </div>
                    </div>
                   </div>


                </div>


                <div className="backAbout">

                    <div className="bg-white/95">

                        <div className="grid lg:grid-cols-2 lg:mx-[200px] sm:mx-[30px] gap-8 my-[100px]">
                        <div className="text-black">
                        <h1 className="mb-4 text-3xl font-bold">We are Custom Software Developers</h1>
                        <p className="mb-8 text-lg ">We have built a reputation for the delivery of outstanding professional services to both public and private businesses in and outside Ghana, working to establish standards on all assignments.</p>

                        <div className="divider w-[80%] border-gray-300"/>

                        <div>
                            <h1 className="pb-4">This Is Who We Are</h1>
                            <div className="flex space-x-3">
                                <div className="text-secondary text-xl"><BsCheck2Circle/></div>
                                <div>Reliable Long Term Relationship</div>
                            </div>

                            <div className="flex space-x-3 py-3">
                                <div className="text-secondary text-xl"><BsCheck2Circle/></div>
                                <div>A Wealth of Technical and Business Expertise</div>
                            </div>

                            <div className="flex space-x-3">
                                <div className="text-secondary text-xl"><BsCheck2Circle/></div>
                                <div>Delivery of the Best Solutions</div>
                            </div>
                        </div>
                    </div>

                    <figure className="lg:block sm:hidden">
                        <img src={About1} alt="customdev" className="w-[80%]" />
                    </figure>
                    
                        </div>

                        {/* new card */}

                        <div className="grid lg:grid-cols-2 lg:mx-[200px] sm:mx-[30px] gap-8 my-[100px]">

                        <figure className="lg:block sm:hidden">
                        <img src={About2} alt="customdev" className="w-[80%]" />
                    </figure>
                        <div className="text-black">
                        <h1 className="mb-4 text-3xl font-bold">We invest in the world's potential</h1>
                        <p className="mb-8 text-lg ">We create diverse, complex, web and mobile solutions for any business need. Our knowledge and experience translate to added value and peace of mind for our customers.With Axon you get quality softwware and perfect service every time </p>

                        <div className="divider w-[80%] border-gray-300"/>

                        <div>
                            <h1 className="pb-4">This Is What We Do </h1>
                            <div className="flex space-x-3">
                                <div className="text-secondary text-xl"><BsCheck2Circle/></div>
                                <div>Templates for everyone</div>
                            </div>

                            <div className="flex space-x-3 py-3">
                                <div className="text-secondary text-xl"><BsCheck2Circle/></div>
                                <div>Development workflow</div>
                            </div>

                            <div className="flex space-x-3">
                                <div className="text-secondary text-xl"><BsCheck2Circle/></div>
                                <div>Limitless business automation</div>
                            </div>

                            <div className="flex space-x-3 pt-3">
                                <div className="text-secondary text-xl"><BsCheck2Circle/></div>
                                <div>Knowledge management</div>
                            </div>
                        </div>
                    </div>

                    
                    {/* end */}
                        </div>
                    <div className="mb-[100px]">
                        <div className="text-center">
                            <h1 className="text-primary font-bold">Our Team</h1>
                            <h1 className="font-bold sm:text-3xl text-4xl">Meet our Team</h1>
                            <p className="text-body-color text-lg py-3 sm:mx-[30px]">There are many variations of passages of Lorem Ipsum available <br /> but the majority have suffered alteration in some form</p>
                        </div>


                        {/* cards */}

                        <div className="lg:mx-[200px] sm:mx-[120px] grid lg:grid-cols-4">
                            <div>
                                <figure className="flex">
                                    <img src={Dots} alt="dots" />
                                    <img src={Team1} alt="team1" className="-ml-16 w-[160px] pt-16" />
                                    <img src={Circle} alt="circle" className="pt-[180px] -ml-5" />
                                </figure>

                                <div className="block pt-3 ">
                                    <p className="font-semibold text-lg">Adveen Desuza</p>
                                    <p className="mx-5 text-body-color text-sm">UI Designer</p>

                                    <div className=" inline-flex text-gray-400 space-x-10 mt-3 justify-center items-center">
                                        <div><FaFacebookF/></div>
                                        <div><FaTwitter/></div>
                                        <div><FaInstagram/></div>
                                    </div>

                                </div>
                            </div>



                            {/* card2 */}

                            <div>
                                <figure className="flex">
                                    <img src={Dots} alt="dots" />
                                    <img src={Team2} alt="team1" className="-ml-16 w-[160px] pt-16" />
                                    <img src={Circle} alt="circle" className="pt-[180px] -ml-5" />
                                </figure>

                                <div className="block pt-3 ">
                                    <p className="font-semibold text-lg">Jezmin Uniya</p>
                                    <p className="mx-5 text-body-color text-sm">Product Designer</p>

                                    <div className=" inline-flex text-gray-400 space-x-10 mt-3 justify-center items-center">
                                        <div><FaFacebookF/></div>
                                        <div><FaTwitter/></div>
                                        <div><FaInstagram/></div>
                                    </div>

                                </div>
                            </div>



                            {/* card3 */}

                            <div>
                                <figure className="flex">
                                    <img src={Dots} alt="dots" />
                                    <img src={Team3} alt="team1" className="-ml-16 w-[160px] pt-16" />
                                    <img src={Circle} alt="circle" className="pt-[180px] -ml-5" />
                                </figure>

                                <div className="block pt-3 ">
                                    <p className="font-semibold text-lg">Andrieo Gloree</p>
                                    <p className="mx-5 text-body-color text-sm">App Developer</p>

                                    <div className=" inline-flex text-gray-400 space-x-10 mt-3 justify-center items-center">
                                        <div><FaFacebookF/></div>
                                        <div><FaTwitter/></div>
                                        <div><FaInstagram/></div>
                                    </div>

                                </div>
                            </div>


                            {/* card4 */}
                            <div>
                                <figure className="flex">
                                    <img src={Dots} alt="dots" />
                                    <img src={Team1} alt="team1" className="-ml-16 w-[160px] pt-16" />
                                    <img src={Circle} alt="circle" className="pt-[180px] -ml-5" />
                                </figure>

                                <div className="block pt-3 ">
                                    <p className="font-semibold text-lg">Jackie Sanders</p>
                                    <p className="mx-5 text-body-color text-sm">Content Writer</p>

                                    <div className=" inline-flex text-gray-400 space-x-10 mt-3 justify-center items-center">
                                        <div><FaFacebookF/></div>
                                        <div><FaTwitter/></div>
                                        <div><FaInstagram/></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    </div>

                    

                    

                </div>
            </div>
        </div>
     );
}
 
export default AboutUs;