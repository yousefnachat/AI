import DevIcon from "../assets/DevIcon.png";
import HealthCareIcon from "../assets/HealthCareIcon.png";
import MarketingIcon from "../assets/MarketingIcon.png";
import SupportIcon from "../assets/SupportIcon.png";
import GeneralWorkIcon from "../assets/GeneralWorkIcon.png";
import BgImage from "../assets/BgImage.png";

const Application = () => {
  return (
    <section id="Application" className="w-[90%] m-auto">
      <div className="pt-16">
        <h1
          className="text-4xl font-bold text-center text-gray-200 mb-10"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          What's The Application Of AI?
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <div class="grid grid-cols-5 gap-4 w-full max-w-4xl">
          <div class="rounded-2xl flex justify-center items-center flex-col p-4  backdrop-blur-xl bg-[#58585861]">
            <div>
              <img src={DevIcon} className="w-10" alt="icon" />
            </div>
            <div>
              <p className="sm:mt-4 mt-5 text-white text-center font-bold  text-xs sm:text-sm">
                Software Developers
              </p>
            </div>
            <div>
              <p className="text-white mt-4 p-2 sm:p-3 rounded-3xl bg-blue-500 text-center font-medium ">
                20-24 million
              </p>
            </div>
          </div>
          <div class="rounded-2xl flex justify-center items-center flex-col p-4  backdrop-blur-xl bg-[#58585861]">
            <div>
              <img src={HealthCareIcon} className="w-12" alt="icon" />
            </div>
            <div>
              <p className="mt-4 text-white  text-center font-bold text-xs sm:text-sm">
                Healthcare Workers
              </p>
            </div>
            <div>
              <p className="text-white mt-6 p-2 sm:p-3 rounded-3xl bg-blue-500 text-center font-medium">
                8-10 million
              </p>
            </div>
          </div>
          <div class="rounded-2xl flex justify-center items-center flex-col p-4 backdrop-blur-xl bg-[#58585861]">
            <div>
              <img src={MarketingIcon} className="w-12" alt="icon" />
            </div>
            <div>
              <p className="mt-4 text-white  text-center font-bold text-xs sm:text-sm">
                Marketing Agent
              </p>
            </div>
            <div>
              <p className="text-white mt-6 p-2 sm:p-3 rounded-3xl bg-blue-500 text-center font-medium">
                10-15 million
              </p>
            </div>
          </div>
          <div class="rounded-2xl flex justify-center items-center flex-col p-4 backdrop-blur-xl bg-[#58585861]">
            <div>
              <img src={SupportIcon} className="w-12" alt="icon" />
            </div>
            <div>
              <p className="mt-4 text-white  text-center font-bold text-xs sm:text-sm">
                Customer Support
              </p>
            </div>
            <div>
              <p className="text-white mt-6 p-2 sm:p-3 rounded-3xl bg-blue-500 text-center font-medium">
                5-10 million
              </p>
            </div>
          </div>
          <div class="rounded-2xl flex justify-center items-center flex-col p-4 backdrop-blur-xl bg-[#58585861]">
            <div>
              <img src={GeneralWorkIcon} className="w-12" alt="icon" />
            </div>
            <div>
              <p className="mt-4 text-white  text-center font-bold text-xs sm:text-sm">
                General Workforce
              </p>
            </div>
            <div>
              <p className="text-white mt-6 p-2 sm:p-3 rounded-3xl bg-blue-500 text-center font-medium">
                300 million
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 mt-16">
        <div className="sm:col-span-5 col-span-12 rounded-lg flex justify-center items-center">
          <img src={BgImage} className="rounded-lg" />
        </div>
        <div className="sm:col-span-7 col-span-12 rounded-lg p-4 flex justify-center gap-4 text-white">
          <div
            id="hero"
            className="col-span-3 rounded-lg p-4 backdrop-blur-xl bg-[#58585861] "
          >
            <div>
              <h4 className="text-center font-bold my-4">AI Application</h4>
            </div>
            <div>
              <p className="text-center text-gray-300  sm:text-base ">
                AI applications leverage artificial intelligence to solve
                real-world problems across various industries, enhancing.
              </p>
            </div>
            <div className="flex justify-center">
              <button className="p-2">
                <a
                  href="https://www.techtarget.com/searchenterpriseai/definition/AI-Artificial-Intelligence#:~:text=Artificial%20intelligence%20is%20the%20simulation,speech%20recognition%20and%20machine%20vision."
                  target="_blank"
                >
                  Learn More
                </a>
              </button>
            </div>
          </div>
          <div
            id="hero"
            className="col-span-3 rounded-lg p-4 backdrop-blur-xl bg-[#58585861]"
          >
            <div>
              <h4 className="text-center font-bold my-4">AI Technologies</h4>
            </div>
            <div>
              <p className="text-center text-gray-300  sm:text-base ">
                AI technologies involve tools and methods like machine learning,
                natural language processing, and computer vision.
              </p>
            </div>
            <div className="flex justify-center">
              <button className="p-2">
                <a
                  href="https://www.techtarget.com/searchenterpriseai/definition/AI-Artificial-Intelligence#:~:text=Artificial%20intelligence%20is%20the%20simulation,speech%20recognition%20and%20machine%20vision."
                  target="_blank"
                >
                  Learn More
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Application;
