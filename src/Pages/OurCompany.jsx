import BackToTopButton from "../components/BackToTopButton";
import Pic1 from "../assets/images/about/feature-3.svg";
import Pic2 from "../assets/images/about/feature-2.svg";
import LOGO from "../assets/images/logo/logo-white.png";
const OurCompany = () => {
  return (
    <div>
      <div>
        <div>
          {/* hero */}
          <div className="backAbout2">
            <div className=" text-center bg-gradient-to-bl from-[#188FC3]/80 via-[#1E67C2]/90 to-[#1E67C2] pt-[160px] pb-[100px] ">
              <div className="">
                <h1 className="font-bold text-3xl text-white mb-4">
                  Our Company
                </h1>
                <p className="text-lg text-white sm:mx-[30px]">
                  Axon Information offers our customers a wealth of technical
                  and business expertise{" "}
                </p>
              </div>
            </div>
          </div>

          {/* end of banner */}
          <div className="backAbout">
            <div className="bg-white/95">
              <div className="grid lg:grid-cols-2 gap-20 mt-[100px] md:mx-[100px] sm:mx-[30px]">
                <div className="flex">
                  <div>
                    <p className="">
                      Axon Information Systems was form in 2004 by a Dental
                      Surgeon and an Information System Engineer with a wide
                      range of experience in software development and
                      implementation. Axon is a fully Ghanaian custom software
                      development company with wholly Ghanaian staff.
                    </p>

                    <p>
                      <button className="btn w-full text-primary bg-white capitalize hover:bg-primary hover:text-white transition duration-300 border-gray-300 mt-10 ">
                        Get In Touch
                      </button>
                    </p>
                  </div>

                  <div className="divider divider-horizontal bg-gray-200 w-[1px] h-[15rem]" />
                </div>

                <div>
                  <figure>
                    <img src={Pic1} alt="figure" className="rounded-lg sm:hidden lg:flex" />
                  </figure>
                </div>

                <div className="companybg rounded-xl lg:my-10 ">
                  <div className="bg-gradient-to-bl from-[#188FC3]/90 via-[#1E67C2]/95 to-[#1E67C2] rounded-xl">
                    <div className="pt-36 px-5">
                      <figure>
                        <img src={LOGO} alt="" className="h-12" />
                      </figure>

                      <p className="py-7 text-white">
                        "Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Optio hic natus et deleniti. Vitae libero odit
                        nemo modi vel, perspiciatis quam harum beatae ducimus,
                        omnis sit architecto quisquam praesentium provident quo
                        exercitationem maxime sunt dolores corporis obcaecati,
                        delectus consequatur officia. Impedit quam dignissimos
                        incidunt libero, enim maxime, ad eaque et praesentium
                        excepturi iure adipisci eos aliquid itaque ut, odit
                        eligendi."
                      </p>

                      <p className="text-base text-white pb-3">
                        <span className="font-medium ">Dr. Slyva Vortia,</span>{" "}
                        CEO at AXON
                      </p>
                    </div>
                  </div>
                </div>

                <div className="block text-base my-10">
                  <div>
                    <h1 className="text-primary pb-5 font-bold">Our values</h1>

                    <h1 className="font-bold text-2xl">
                      On a mission to empower Africa
                    </h1>

                    <p className="py-3">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Necessitatibus totam, ad delectus, exercitationem dolore
                      dolorem nam, numquam nemo unde sit placeat. Earum
                      voluptatibus laborum odit saepe laboriosam nesciunt
                      obcaecati sit modi deserunt esse! Pariatur delectus
                      dolorem eveniet et architecto voluptate consequatur
                      corrupti ipsum, sunt similique labore deleniti a mollitia?
                      Ea repudiandae animi saepe. Blanditiis, possimus quas eum
                      molestiae neque officia laboriosam eveniet itaque
                      provident error vero quod rem voluptatum commodi
                      laudantium tenetur minima cumque accusantium voluptates
                      reprehenderit cum dolorum nemo libero natus. Natus at, ex
                      animi dolorem fugiat necessitatibus illo magni quia odio
                      aut commodi placeat reiciendis laudantium, hic soluta?
                    </p>

                    <div className="divider divider-vertical" />

                    <div className="grid md:grid-cols-4 sm:grid-cols-2 font-bold">
                      <div>
                        <h1 className="text-sm">Founded</h1>
                        <p className="text-3xl py-2">1995</p>
                      </div>

                      <div>
                        <h1 className="text-sm">Employees</h1>
                        <h1 className="text-3xl py-2">187</h1>
                      </div>

                      <div>
                        <h1 className="text-sm">Countries</h1>
                        <p className="text-3xl py-2">9</p>
                      </div>

                      <div>
                        <h1 className="text-sm">Projects</h1>
                        <p className="text-3xl py-2">25</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* start */}
              <div>
                <div className="backAbout2">
                  <div className="bg-gradient-to-bl from-[#188FC3]/90 via-[#1E67C2]/95 to-[#1E67C2] py-24">
                    <div className="text-white px-8">
                        <h1 className="font-medium text-4xl">Work with us</h1>

                        <p className="mt-6 text-gray-300 max-w-4xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nam sint laboriosam, molestiae, ducimus quam harum sapiente pariatur eligendi praesentium nihil, minima consequuntur expedita obcaecati officia impedit nemo corrupti sunt?</p>


                        <div className="grid lg:grid-cols-4 md:grid-cols-4 mt-6 font-semibold gap-y-6">
                            <div>
                                Open roles <span>&rarr;</span>
                            </div>

                            <div>
                                Internship program <span>&rarr;</span>
                            </div>

                            <div>
                                Our values <span>&rarr;</span>
                            </div>

                            <div>
                               Meet our leadership <span>&rarr;</span>
                            </div>
                        </div>

                    </div>
                        <div>

                            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 text-white px-8 pt-8 md:mt-10"   >
                                <div>
                                    <h1 className="md:font-bold font-extrabold text-xl">12</h1>
                                    <p className="text-gray-300">Offices worldwide</p>
                                </div>

                                <div>
                                    <h1 className=" md:font-bold font-extrabold text-xl">300+</h1>
                                    <p  className="text-gray-300">Full-time colleagues</p>
                                </div>

                                <div>
                                    <h1 className=" md:font-bold font-extrabold text-xl">40</h1>
                                    <p  className="text-gray-300">Hours per week</p>
                                </div>

                                <div>
                                    <h1 className=" md:font-bold font-extrabold text-xl">Unlimited</h1>
                                    <p  className="text-gray-300">Paid time off</p>
                                </div>
                            </div>

                        </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackToTopButton />
    </div>
  );
};

export default OurCompany;
