import { BsCheck2Circle } from "react-icons/bs";
import { HiArrowNarrowRight } from "react-icons/hi";
import ServicesBG from "../assets/images/about/special_pattern.svg"
const ServicesComponent = () => {
  const collapses = [
    {
      title: "Enterprise Solution Development",
      lists: [
        {
          logo: <BsCheck2Circle />,
          title: "Biometric Knowledge",
          text: "Specializing in the various biometric technologies, their strengths and limitations, and the ability to choose the right biometric modality for a given scenario.",
        },

        {
          logo: <BsCheck2Circle />,
          title: "Data Science and Machine Learning",
          text: "Knowledge of statistical and machine learning algorithms to develop and optimize recognition models.",
        },

        {
          logo: <BsCheck2Circle />,
          title: "Data Security",
          text: "Expertise in secure coding practices, encryption, and cybersecurity to ensure the system is secure and resistant to attacks such as spoofing.",
        },

        {
          logo: <BsCheck2Circle />,
          title: "Legal Compliance",
          text: "Understanding of legal and regulatory requirements related to biometric data, including data protection and privacy laws.",
        },
      ],
    },

    {
      title: "Saas Product Development",
      lists: [
        {
          logo: <BsCheck2Circle />,
          title: "Healthcare Domain Knowledge",
          text: " A deep understanding of healthcare workflows, terminology, regulations, and data privacy laws.",
        },

        {
          logo: <BsCheck2Circle />,
          title: "Quality Assurance",
          text: " Expertise in testing, debugging, and ensuring the software meets the highest standards for reliability, security, and performance.",
        },

        {
          logo: <BsCheck2Circle />,
          title: "Data Analytics",
          text: " Capability to process, analyze, and visualize healthcare data to derive insights and support evidence-based decision making.",
        },

        {
          logo: <BsCheck2Circle />,
          title: "Optimized Data Management",
          text: " Ensuring expendient data management structures to expidite the dispersing of quick and efficient healthcare delivery.",
        },
      ],
    },

    {
      title: "Web & Mobile Development",
      lists: [
        {
          logo: <BsCheck2Circle />,
          title: "Biometrics Knowledge",
          text: "Specializing in the various biometric technologies, their strengths and limitations, and the ability to choose the right biometric modality for a given scenario.",
        },

        {
          logo: <BsCheck2Circle />,
          title: "Data Science and Machine Learning",
          text: "Knowledge of statistical and machine learning algorithms to develop and optimize recognition models.",
        },

        {
          logo: <BsCheck2Circle />,
          title: "Data Security",
          text: "Expertise in secure coding practices, encryption, and cybersecurity to ensure the system is secure and resistant to attacks such as spoofing.",
        },

        {
          logo: <BsCheck2Circle />,
          title: "Legal Compliance",
          text: "Understanding of legal and regulatory requirements related to biometric data, including data protection and privacy laws.",
        },
      ],
    },

    {
      title: "System-to-System Integration",
      lists: [
        {
          logo: <BsCheck2Circle />,
          title: "Biometrics Knowledge",
          text: "Specializing in the various biometric technologies, their strengths and limitations, and the ability to choose the right biometric modality for a given scenario.",
        },

        {
          logo: <BsCheck2Circle />,
          title: "Data Science and Machine Learning",
          text: "Knowledge of statistical and machine learning algorithms to develop and optimize recognition models.",
        },

        {
          logo: <BsCheck2Circle />,
          title: "Data Security",
          text: "Expertise in secure coding practices, encryption, and cybersecurity to ensure the system is secure and resistant to attacks such as spoofing.",
        },

        {
          logo: <BsCheck2Circle />,
          title: "Legal Compliance",
          text: "Understanding of legal and regulatory requirements related to biometric data, including data protection and privacy laws.",
        },
      ],
    },

    {
      title: "Business Digitalization",
      lists: [
        {
          logo: <BsCheck2Circle />,
          title: "Biometrics Knowledge",
          text: "Specializing in the various biometric technologies, their strengths and limitations, and the ability to choose the right biometric modality for a given scenario.",
        },

        {
          logo: <BsCheck2Circle />,
          title: "Data Science and Machine Learning",
          text: "Knowledge of statistical and machine learning algorithms to develop and optimize recognition models.",
        },

        {
          logo: <BsCheck2Circle />,
          title: "Data Security",
          text: "Expertise in secure coding practices, encryption, and cybersecurity to ensure the system is secure and resistant to attacks such as spoofing.",
        },

        {
          logo: <BsCheck2Circle />,
          title: "Legal Compliance",
          text: "Understanding of legal and regulatory requirements related to biometric data, including data protection and privacy laws.",
        },
      ],
    },

    {
      title: "From Idea to MVP",
      lists: [
        {
          logo: <BsCheck2Circle />,
          title: "Biometrics Knowledge",
          text: "Specializing in the various biometric technologies, their strengths and limitations, and the ability to choose the right biometric modality for a given scenario.",
        },

        {
          logo: <BsCheck2Circle />,
          title: "Data Science and Machine Learning",
          text: "Knowledge of statistical and machine learning algorithms to develop and optimize recognition models.",
        },

        {
          logo: <BsCheck2Circle />,
          title: "Data Security",
          text: "Expertise in secure coding practices, encryption, and cybersecurity to ensure the system is secure and resistant to attacks such as spoofing.",
        },

        {
          logo: <BsCheck2Circle />,
          title: "Legal Compliance",
          text: "Understanding of legal and regulatory requirements related to biometric data, including data protection and privacy laws.",
        },
      ],
    },
  ];
  return (
    <div>
      <div className="border bg-gray-300">
        <div className="lg:mx-[200px] sm:mx- mt-[100px] sm:mx-10">
          <div className="text-center mb-[60px]">
            <h1 className="font-semibold text-lg text-primary mb-2">
              Services
            </h1>
            <h1 className="font-medium text-3xl text-dark capitalize">
              industry expertises
            </h1>
            <p className="text-lg text-body-color lg:mx-[300px]">
              Axon, for more than 20 years, specializes in the development of
              world-class applications and systems for different sectors and
              enterprises in Government Digitalization, Healthcare, Retail and
              other industries.
            </p>
          </div>
          {/* collapse */}

          <div className="grid lg:grid-cols-2 gap-4">
            {collapses.map((collapse, index) => (
              <div key={index} className="my-4">
                <div className="collapse collapse-arrow">
                  <input type="checkbox" className="peer" id="" />
                  <div className="collapse-title bg-white  text-primary peer-checked:bg-white text-lg peer-checked:text-primary rounded-lg">
                    {collapse.title}
                  </div>

                  <div className="collapse-content bg-primary text-primary-content peer-checked:text-black peer-checked:bg-white">
                    {collapse.lists.map((list, index) => (
                      <div key={index} className="py-2">
                        <div className="inline-flex space-x-2">
                          <div className="text-secondary text-lg">
                            {list.logo}
                          </div>
                          <div className="font-semibold">{list.title}</div>
                        </div>
                        <div>{list.text}</div>
                      </div>
                    ))}
                    <div className="inline-flex  hover:text-secondary hover:cursor-pointer transition duration-300 space-x-3">
                      <span>Learn more</span>
                      <span className="pt-1.5">
                        <HiArrowNarrowRight />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* end of collapse */}

        <div className="bg-primary text-white mt-[100px]">
          <div className="text-center py-10">
            <h1 className="text-3xl font-medium pb-5">
              Boost your productivity today.
            </h1>
            <p className="capitalize">
              take the next step. Let's build your custom solution together!
            </p>

            <div className="btn capitalize text-[16px] bg-white text-primary hover:bg-secondary hover:text-white border-none mt-5 px-10">
              Tell Us Your Software Needs
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
