import GITMIS from "../assets/images/portfolio/gitmis3_img.svg"
import BVMS from "../assets/images/portfolio/bvms_img.svg"
import PAYROLL from "../assets/images/portfolio/axonpayroll_img.svg"
import SSMAS from "../assets/images/portfolio/ssmas_img.svg"
import HEALTH from "../assets/images/portfolio/healthpro_img.svg"
import GWTS from "../assets/images/portfolio/gwts_img.svg"
import BackToTopButton from "../components/BackToTopButton"
const Portfolio = () => {

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
    
    return ( 
        <div>
             <div className="backAbout2" >
            <div className=" text-center bg-gradient-to-bl from-[#188FC3]/80 via-[#1E67C2]/90 to-[#1E67C2] pt-[160px] pb-[100px] " >
              <div className="" data-aos="fade-up">
                <h1 className="font-bold text-3xl text-white mb-4">
                  Our Portfolio
                </h1>
                <p className="text-lg text-white sm:mx-[30px]">
                  We have built more than 50 state-of-art registers, information systems & delivered other projects across 4 countries
                </p>
              </div>
            </div>
          </div>
        
        <div className="lg:mx-[200px] sm:mx-[30px]">
            {/* cards */}

           <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3">
            {
                cards.map((card,map) => (
                    <div className="card lg:w-[400px] sm:w-[300px] my-5">
                        <figure>
                            <img src={card.img} alt="cards" className="rounded-md" />
                        </figure>

                        <div className=" -mt-[80px] border bg-white w-[80%] sm:mx-7 lg:mx-10 py-10 px-3 rounded-lg text-center" >
                            <h1 className="font-bold capitalize">{card.title}</h1>
                            <p className="text-primary text-sm mb-5">{card.sub}</p>
                            <button className="btn text-primary bg-white capitalize hover:bg-primary hover:text-white px-5 shadow-sm py-3 hover:shadow-lg ">
               <span> View Details</span>
               
            </button>
                        </div>
                    </div>
                ))
            }
           </div>

           <BackToTopButton/>
        </div>
        </div>
     );
}
 
export default Portfolio;