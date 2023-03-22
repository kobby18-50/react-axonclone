import AXON from "../assets/images/logo/logo-white.png"

import { FaFacebookF,FaTwitter,FaInstagram,FaLinkedin} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <div className="bg-black">
            <div className="lg:mx-[200px] sm:mx-10 text-white pt-[120px]">


                <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-5">
                    <div>
                        <figure>
                            <img src={AXON} alt="LOGO" className="max-w-[200px] mb-6" />
                        </figure>

                        <p className="mb-6 ml-4">We create digital experiences for brands and companies by using technology</p>
                        <div className="flex space-x-10 mb-10 ml-4">
                            <FaFacebookF/>
                            <FaTwitter/>
                            <FaInstagram/>
                            <FaLinkedin/>
                        </div>
                    </div>

                    

                    <div className="grid lg:grid-cols-2 md:grid-cols-2">
                    <div>
                        <h1 className="font-semibold text-lg mb-9 ">
                            <Link to={'/about-us'}>About Us</Link>
                        </h1>
                        <ul className="pb-10">
                            <li className="mb-2 hover:text-primary hover:transition hover:duration-300 hover:ease-in-out">
                               <Link to={'/'}> Home</Link>
                            </li>
                            <li className="mb-2 hover:text-primary hover:transition hover:duration-300 hover:ease-in-out">
                               <Link to={'/'}> Features</Link>
                            </li> 
                            <li className="mb-2 hover:text-primary hover:transition hover:duration-300 hover:ease-in-out" >
                               <Link to={'/about-us'}> About</Link>
                            </li> 
                            <li className="mb-2 hover:text-primary hover:transition hover:duration-300 hover:ease-in-out">
                               <Link to={'/'}>Testimonial</Link>
                            </li>
                            </ul>
                    </div>


                    <div>
                        <h1 className="font-semibold text-lg mb-9">
                            <Link to={'/products'}>Our Products</Link>
                        </h1>
                        <ul>
                            <li className="mb-2 hover:text-primary hover:transition hover:duration-300 hover:ease-in-out">
                               <Link to={'/'}> LineIcons</Link>
                            </li>
                            <li className="mb-2 hover:text-primary hover:transition hover:duration-300 hover:ease-in-out">
                               <Link to={'/'}>Ecommerce HTML</Link>
                            </li> 
                            <li className="mb-2 hover:text-primary hover:transition hover:duration-300 hover:ease-in-out" >
                               <Link to={'/'}> Ayro UI</Link>
                            </li> 
                            <li className="mb-2 hover:text-primary hover:transition hover:duration-300 hover:ease-in-out">
                               <Link to={'/'}>PlainAdmin</Link>
                            </li>
                            </ul>
                    </div>
                   


                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;