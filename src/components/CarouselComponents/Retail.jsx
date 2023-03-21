import { AiOutlineCloudUpload } from "react-icons/ai";
// import ProductImg from "../../assets/images/loggggg.svg"
import { GiPadlock, GiDatabase } from "react-icons/gi";
import CarouselImg from "../../assets/images/carousel.png"

const Retail = () => {
  const deliveries = [
    {
      heading: "E-registers",
      title: "Biometric Voter Management",
      list: [
        {
          logo: <AiOutlineCloudUpload />,
          sub: "Push to deploy",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, adipisci! Voluptates pariatur provident, quibusdam non sapiente quam ad saepe dolores.",
        },

        {
          logo: <GiPadlock />,
          sub: "SSL certificates",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, adipisci! Voluptates pariatur provident, quibusdam non sapiente quam ad saepe dolores.",
        },

        {
          logo: <GiDatabase />,
          sub: "Database backups",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, adipisci! Voluptates pariatur provident, quibusdam non sapiente quam ad saepe dolores.",
        },
      ],
    },

    // {
    //   heading: "E-Service Delivery",
    //   title: "integrated tax management",
    //   list: [
    //     {
    //       logo: <AiOutlineCloudUpload />,
    //       sub: "Push to deploy",
    //       text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, adipisci! Voluptates pariatur provident, quibusdam non sapiente quam ad saepe dolores.",
    //     },

    //     {
    //       logo: <GiPadlock />,
    //       sub: "SSL certificates",
    //       text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, adipisci! Voluptates pariatur provident, quibusdam non sapiente quam ad saepe dolores.",
    //     },

    //     {
    //       logo: <GiDatabase />,
    //       sub: "Database backups",
    //       text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, adipisci! Voluptates pariatur provident, quibusdam non sapiente quam ad saepe dolores.",
    //     },
    //   ],
    // },
  ];
  return (

   
    <div>
      <div className="grid lg:grid-cols-2">
        <div className="">
          {deliveries.map((delivery, index) => (
            <div key={index} className="my-10 sm:mx-10">
              <h1 className="text-indigo-600 font-semibold">
                {delivery.heading}
              </h1>
              <p className="mt-2 text-2xl font-bold text-gray-900 uppercase">
                {delivery.title}
              </p>
              <div className="mt-4">
                {delivery.list.map((list, index) => (
                  <div key={index} className="flex flex-wrap space-x-2 py-3">
                    <div className="text-indigo-600">{list.logo}</div>
                    <div className="text-gray-900 font-semibold">
                      {list.sub}
                    </div>
                    <div className="text-gray-600">{list.text}</div>
                  </div>
                ))}
              <button className="btn capitalize bg-white text-primary rounded-md border-gray-300 shadow-sm px-5 py-3 font-medium hover:bg-primary hover:text-white hover:shadow-lg transition duration-400 ease-in-out mt-8">
                Learn More
              </button>
              </div>
              <div>
          {/* <img src={CarouselImg} alt="" /> */}
        </div>
            </div>



            
          ))}
        </div>
        <div className="m-[30px]">
          <img src={CarouselImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Retail;
