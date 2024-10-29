import { useState, useEffect } from "react";
import Chatgbt from "../assets/Chatgbt.png";
import Bard from "../assets/Bard.png";
import Waston from "../assets/Waston.png";
import Siri from "../assets/Siri.png";
import JasperAi from "../assets/JasperAi.png";
import Deepmind from "../assets/Deepmind.png";
import Copilot from "../assets/Copilot.png";
import Codex from "../assets/Codex.png";
import Gemeni from "../assets/Gemeni.png";
import HugingFace from "../assets/HugingFace.png";
import TestFx from "../assets/TestFx.png";
import Monica from "../assets/Monica.png";
import Notion from "../assets/Notion.png";
import Scikit from "../assets/Scikit.png";
import QuillBot from "../assets/QuillBot.png";
import TensorFlow from "../assets/TensorFlow.png";
import Jenni from "../assets/Jenni.png";
import Bizway from "../assets/Bizway.png";
import LongShot from "../assets/LongShot.png";
import Copy from "../assets/Copy.png";
import AIVA from "../assets/AIVA.png";
import Claude from "../assets/Claude.png";
import BlackBox from "../assets/BlackBox.png";
import SemRush from "../assets/SemRush.png";
import Runway from "../assets/Runway.png";
import Synthesia from "../assets/Synthesia.png";
import EleutherAI from "../assets/EleutherAI.png";
import Zo from "../assets/Zo.png";
import DataR from "../assets/DataR.png";
import DeepAI from "../assets/DeepAI.png";


const aiTools = [
  { img: Chatgbt, name: "ChatGPT", link: "https://chatgpt.com/"},
  { img: Bard, name: "Bard", link: "https://gemini.google.com/" },
  { img: Waston, name: "Watson", link: "https://www.ibm.com/watson"},
  { img: Siri, name: "Siri", link: "https://www.apple.com/siri/" },
  { img: JasperAi, name: "Jasper AI", link: "https://www.jasper.ai/free-trial?_from=ads&fp_sid=1-g-EAIaIQobChMI56eX4rCpiQMVJD8GAB0I9jteEAAYASAAEgLgj_D_BwE&gad_source=1"},
  { img: Deepmind, name: "DeepMind", link: "https://deepmind.google/" },
  { img: Copilot, name: "Copilot", link: "https://copilot.microsoft.com/" },
  { img: Codex, name: "Codex", link: "https://openai.com/index/openai-codex/"},
  { img: Gemeni, name: "Gemini", link: "https://gemini.google.com/"},
  { img: HugingFace, name: "Hugging Face", link: "https://huggingface.co/"},
  { img: TestFx, name: "TestFx", link: "https://textfx.withgoogle.com/"},
  { img: Monica, name: "Monica", link: "https://monica.im/"},
  { img: Notion, name: "Notion", link: "https://www.notion.so/product/ai"},
  { img: Scikit, name: "Scikit-learn", link: "https://scikit-learn.org/stable/"},
  { img: QuillBot, name: "QuillBot", link: "https://quillbot.com/"},
  { img: TensorFlow, name: "TensorFlow", link: "https://www.tensorflow.org/?hl=fr"},
  { img: Jenni, name: "Jenni", link: "https://jenni.ai/"},
 { img: Bizway, name: "Bizway", link: "https://www.bizway.io/"},
  { img: LongShot, name: "LongShot", link: "https://www.longshot.ai/"},
  { img: Copy, name: "Copy.ai", link: "https://www.copy.ai/"} ,
  { img: AIVA, name: "AIVA", link: "https://www.aiva.ai/"},
  { img: Claude, name: "Claude", link: "https://claude.ai/"},
  { img: BlackBox, name: "BlackBox", link: "https://www.blackbox.ai/"}, 
 { img: SemRush, name: "SemRush", link: "https://fr.semrush.com/"},
  { img: Runway, name: "Runway", link: "https://runwayml.com/"},
  { img: Synthesia, name: "Synthesia", link: "https://www.synthesia.io/fr"},
  { img: EleutherAI, name: "EleutherAI", link: "https://www.eleuther.ai/"},
 { img: Zo, name: "Zo", link: "https://www.andcompany.com/case-study/zo"},
  { img: DataR, name: "DataRobot", link: "https://www.datarobot.com/"},
  { img: DeepAI, name: "DeepAI", link: "https://deepai.org/"}
];


const Ressources = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);
    
    document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.querySelectorAll('.card').forEach(card => {
        card.removeEventListener('mouseenter', handleMouseEnter);
        card.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <section id="Ressource's" className="mt-20 w-[90%] m-auto">
      <div>
        <p className="text-4xl font-bold text-center text-gray-200 mb-10" style={{ fontFamily: "Roboto, sans-serif" }}>
          AI Tools Resources
        </p>
        <div>
          {[0, 10, 20].map((startIndex, rowIndex) => (
            <div className="flex justify-center" key={startIndex}>
              <div className={`scroll-container`}>
                <div className={`scroll-inner ${rowIndex === 1 ? 'middle' : ''} ${isPaused ? 'paused' : ''}`}>
                  {aiTools.slice(startIndex, startIndex + 10).map((tool, index) => (
                    <div
                      key={index}
                      className="card relative group"
                      onMouseEnter={() => setHoveredIndex(startIndex + index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <img src={tool.img} className="rounded-xl" style={{ height: 120, width: 120 }} />
                      {hoveredIndex === startIndex + index && (
                        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white rounded-xl">
                          <h3 className="text-lg font-bold mr-5">{tool.name}</h3>
                          <button className="mt-2 bg-blue-500  py-1 mr-5 rounded"><a href={tool.link} target="_blank">Learn More</a></button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ressources;