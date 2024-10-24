import DevIcon from "../assets/DevIcon.png";
import HealthCareIcon from "../assets/HealthCareIcon.png";
import MarketingIcon from "../assets/MarketingIcon.png";
import SupportIcon from "../assets/SupportIcon.png";
import GeneralWorkIcon from "../assets/GeneralWorkIcon.png";
import BgImage from "../assets/BgImage.png";

const Application = () => {
  return (
    <section>
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
              <p className="mt-4 text-white text-sm font-bold text-center">
                Software Developers
              </p>
            </div>
            <div>
              <p className="text-white mt-4 p-3 rounded-3xl bg-blue-500 font-medium">
                20-24 million
              </p>
            </div>
          </div>
          <div class="rounded-2xl flex justify-center items-center flex-col p-4  backdrop-blur-xl bg-[#58585861]">
            <div>
              <img src={HealthCareIcon} className="w-12" alt="icon" />
            </div>
            <div>
              <p className="mt-4 text-white text-sm font-bold">
                Healthcare Workers
              </p>
            </div>
            <div>
              <p className="text-white mt-6 p-3 rounded-3xl bg-blue-500 font-medium">
                8-10 million
              </p>
            </div>
          </div>
          <div class="rounded-2xl flex justify-center items-center flex-col p-4 backdrop-blur-xl bg-[#58585861]">
            <div>
              <img src={MarketingIcon} className="w-12" alt="icon" />
            </div>
            <div>
              <p className="mt-4 text-white text-sm font-bold">
                Marketing Agent
              </p>
            </div>
            <div>
              <p className="text-white mt-6 p-3 rounded-3xl bg-blue-500 font-medium">
                10-15 million
              </p>
            </div>
          </div>
          <div class="rounded-2xl flex justify-center items-center flex-col p-4 backdrop-blur-xl bg-[#58585861]">
            <div>
              <img src={SupportIcon} className="w-12" alt="icon" />
            </div>
            <div>
              <p className="mt-4 text-white text-sm font-bold">
                Customer Support{" "}
              </p>
            </div>
            <div>
              <p className="text-white mt-6 p-3 rounded-3xl bg-blue-500 font-medium">
                5-10 million
              </p>
            </div>
          </div>
          <div class="rounded-2xl flex justify-center items-center flex-col p-4 backdrop-blur-xl bg-[#58585861]">
            <div>
              <img src={GeneralWorkIcon} className="w-12" alt="icon" />
            </div>
            <div>
              <p className="mt-4 text-white text-sm font-bold">
                General Workforce
              </p>
            </div>
            <div>
              <p className="text-white mt-6 p-3 rounded-3xl bg-blue-500 font-medium">
                300 million
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 mt-16">
        <div className="col-span-5 rounded-lg flex justify-center items-center">
          <img src={BgImage} className="rounded-lg" />
        </div>
        <div className="col-span-7 rounded-lg p-4 flex justify-center gap-4 text-white">
          <div id="hero" className="col-span-3 rounded-lg p-4 backdrop-blur-xl bg-[#58585861] ">
            <div>
              <h4 className="text-center font-bold my-4">AI Application</h4>
            </div>
            <div>
              <p className="text-center text-gray-400">
                AI applications leverage artificial intelligence to solve
                real-world problems across various industries, enhancing
                efficiency .
              </p>
            </div>
            <div className="flex justify-center">
                <button className="p-2"><a href="#">Learn More</a></button>
            </div>
          </div>
          <div id="hero" className="col-span-3 rounded-lg p-4 backdrop-blur-xl bg-[#58585861]">
            <div>
              <h4 className="text-center font-bold my-4">AI Technologies</h4>
            </div>
            <div>
              <p className="text-center text-gray-400">
                AI technologies involve tools and methods like machine learning,
                natural language processing, and computer vision.
              </p>
            </div>
            <div className="flex justify-center">
                <button className="p-2"><a href="#">Learn More</a></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Application;
