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
    <section>
      <div className="grid grid-cols-1 w-full text-white mt-10 text-center">
        <h1 id="AiEntery" className="text-4xl font-bold text-center text-gray-200 mb-10" style={{ fontFamily: 'Roboto, sans-serif' }} /* className="text-5xl opacity-0"*/>
          What Is AI?
        </h1>
      </div>
      <div className="grid grid-cols-2 mt-6 text-white  gap-6">
        <div className="cols-span-1">
          <div className="grid grid-cols-1">
            <div className="flex justify-center">
              <img src={FirstElement} style={{ borderRadius: 10 }} />
            </div>
          </div>
        </div>
        <div
          className="cols-span-1 flex items-center backdrop-blur-xl bg-[#58585861] ml-4 "
          style={{ borderRadius: 10 }}
        >
          <div className="grid grid-cols-1">
            <div className="text-justify px-8">
              <p>
                Artificial Intelligence (AI) refers to the simulation of human
                intelligence processes by computer systems. These processes
                include learning (the acquisition of information and rules for
                using it), reasoning (the ability to solve problems and make
                decisions), and self-correction. AI can manifest in various
                forms, such as machine learning, natural language processing,
                and robotics, enabling machines to perform tasks that typically
                require human intelligence, such as understanding language,
                recognizing patterns, and making predictions.
              </p>
            </div>
          </div>
        </div>
        <div className="cols-span-1">
          <div className="grid grid-cols-1">
            <div className="flex justify-center">
              <img src={AiVideos} style={{ borderRadius: 10 }} />
            </div>
          </div>
        </div>
        <div
          className="cols-span-1 flex items-center backdrop-blur-xl bg-[#58585861] ml-4 "
          style={{ borderRadius: 10 }}
        >
          <div className="grid grid-cols-1">
            <div className="text-justify px-8">
              <p>
                In the context of generating videos, Artificial Intelligence
                (AI) refers to the use of algorithms and machine learning
                techniques to automate and enhance video creation processes. AI
                can generate videos from text prompts, create animations, and
                even synthesize realistic human-like avatars for presentations.
                It can analyze existing video content to suggest edits, generate
                subtitles, or create personalized video experiences based on
                user preferences. AI-powered video generation tools can
                significantly reduce production time and costs, making it easier
                for creators to produce high-quality content.
              </p>
            </div>
          </div>
        </div>
        <div className="cols-span-1">
          <div className="grid grid-cols-1">
            <div className="flex justify-center">
              <img src={AiDesign} style={{ borderRadius: 10 }} />
            </div>
          </div>
        </div>
        <div
          className="cols-span-1 flex items-center backdrop-blur-xl bg-[#58585861] ml-4 "
          style={{ borderRadius: 10 }}
        >
          <div className="grid grid-cols-1">
            <div className="text-justify px-8">
              <p>
                In design, Artificial Intelligence (AI) refers to the use of
                algorithms and machine learning techniques to enhance and
                automate creative processes. AI can assist designers by
                analyzing data to generate insights, automating repetitive
                tasks, personalizing user experiences, and even generating
                design elements or layouts based on predefined parameters. This
                integration of AI allows for more efficient workflows,
                innovative design solutions, and the ability to create highly
                customized and responsive user interfaces, ultimately enhancing
                the overall design process.
              </p>
            </div>
          </div>
        </div>
        <div className="cols-span-1">
          <div className="grid grid-cols-1">
            <div className="flex justify-center">
              <img src={AiGrammer} style={{ borderRadius: 10 }} />
            </div>
          </div>
        </div>
        <div
          className="cols-span-1 flex items-center backdrop-blur-xl bg-[#58585861] ml-4 "
          style={{ borderRadius: 10 }}
        >
          <div className="grid grid-cols-1">
            <div className="text-justify px-8">
              <p>
                In learning and education, Artificial Intelligence (AI) refers
                to the use of technology to enhance teaching and learning
                experiences. AI can personalize educational content by adapting
                to individual students' learning styles and paces, providing
                tailored recommendations and resources. It can also automate
                administrative tasks, such as grading and attendance tracking,
                allowing educators to focus more on teaching. Additionally,
                AI-powered tools can offer real-time feedback, support virtual
                tutoring, and analyze learning data to identify trends and areas
                for improvement, ultimately fostering a more effective and
                engaging educational environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiSection;
