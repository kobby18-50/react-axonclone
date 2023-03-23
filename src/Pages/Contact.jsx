import { TfiLocationPin } from "react-icons/tfi";
import { AiOutlineMail } from "react-icons/ai";
import BackToTopButton from "../components/BackToTopButton";
const Contact = () => {
    return ( 
        <div>
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
                                <div className="text-secondary text-3xl"><TfiLocationPin/></div>

                                <div className="block">
                                    <p className="text-lg font-semibold mb-6">Our Location</p>
                                    <p className="text-body-color">401 Broadway, 24th Floor, Orchard Cloud View, London</p>
                                </div>

                            </div>
                        </div>


                        <div className="sm:hidden lg:flex">
                            <div className="flex space-x-4">
                                <div className="text-secondary text-3xl"><AiOutlineMail/></div>

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

                <BackToTopButton/>
        </div>
     );
}
 
export default Contact;