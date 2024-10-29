import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import FirstElement from "../assets/FirstElement.png";
import AiDesign from "../assets/AiDesign.png";
import AiGrammer from "../assets/AiGrammer.png";
import AiVideos from "../assets/AiVideos.png";

const AiSection = () => {
  useGSAP(() => {
    gsap.to("#AiEntery", { opacity: 1, delay: 1 });
  }, []);

  return (
    <section id="Definition" className="w-[90%] m-auto">
      <div className="grid grid-cols-1 w-full text-white mt-10 text-center">
        <h1 id="AiEntery" className="text-4xl font-bold text-center text-gray-200 mb-10" style={{ fontFamily: 'Roboto, sans-serif' }}>
          What Is AI?
        </h1>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1  mt-6 text-white  gap-6">
        <div className="cols-span-1">
          <div className="grid grid-cols-1">
            <div className="flex justify-center ">
              <img src={FirstElement} style={{ borderRadius: 10, width: 400, height:213.24 }} />
            </div>
          </div>
        </div>
        <div
          className="cols-span-1 flex items-center  backdrop-blur-xl bg-[#58585861] sm:ml-4 "
          style={{ borderRadius: 10 }}
        >
          <div className="grid grid-cols-1">
            <div className="text-justify sm:px-8 p-4">
              <p>
                Artificial Intelligence (AI) refers to the simulation of human
                intelligence processes by computer systems. These processes
                include learning (the acquisition of information and rules for
                using it), reasoning (the ability to solve problems and make
                decisions), and self-correction.
              </p>
            </div>
          </div>
        </div>
        <div className="cols-span-1">
          <div className="grid grid-cols-1">
            <div className="flex justify-center">
              <img src={AiVideos} style={{ borderRadius: 10, width: 400, height:213.24 }} />
            </div>
          </div>
        </div>
        <div
          className="cols-span-1 flex items-center  backdrop-blur-xl bg-[#58585861] sm:ml-4 "
          style={{ borderRadius: 10 }}
        >
          <div className="grid grid-cols-1">
            <div className="text-justify sm:px-8 p-4">
              <p>
                In the context of generating videos, Artificial Intelligence
                (AI) refers to the use of algorithms and machine learning
                techniques to automate and enhance video creation processes. AI
                can generate videos from text prompts, create animations, and
                even synthesize realistic human-like avatars for presentations.
              </p>
            </div>
          </div>
        </div>
        <div className="cols-span-1">
          <div className="grid grid-cols-1">
            <div className="flex justify-center">
              <img src={AiDesign} style={{ borderRadius: 10, width: 400, height:213.24 }} />
            </div>
          </div>
        </div>
        <div
          className="cols-span-1 flex items-center  backdrop-blur-xl bg-[#58585861] sm:ml-4 "
          style={{ borderRadius: 10 }}
        >
          <div className="grid grid-cols-1">
            <div className="text-justify sm:px-8 p-4">
              <p>
                In design, Artificial Intelligence (AI) refers to the use of
                algorithms and machine learning techniques to enhance and
                automate creative processes. AI can assist designers by
                analyzing data to generate insights, automating repetitive
                tasks, personalizing user experiences, and even generating
                design elements or layouts.
              </p>
            </div>
          </div>
        </div>
        <div className="cols-span-1">
          <div className="grid grid-cols-1">
            <div className="flex justify-center">
              <img src={AiGrammer} style={{borderRadius: 10, width: 400, height:213.24 }} />
            </div>
          </div>
        </div>
        <div
          className="cols-span-1 flex items-center  backdrop-blur-xl bg-[#58585861] sm:ml-4 "
          style={{ borderRadius: 10 }}
        >
          <div className="grid grid-cols-1">
            <div className="text-justify sm:px-8 p-4">
              <p>
                In learning and education, Artificial Intelligence (AI) refers
                to the use of technology to enhance teaching and learning
                experiences. AI can personalize educational content by adapting
                to individual students' learning styles and paces, providing
                tailored recommendations and resources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiSection;
