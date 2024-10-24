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
  { img: Chatgbt, name: "ChatGPT"},
  { img: Bard, name: "Bard" },
  { img: Waston, name: "Watson"},
  { img: Siri, name: "Siri" },
  { img: JasperAi, name: "Jasper AI"},
  { img: Deepmind, name: "DeepMind" },
  { img: Copilot, name: "Copilot" },
  { img: Codex, name: "Codex"},
  { img: Gemeni, name: "Gemini"},
  { img: HugingFace, name: "Hugging Face"},
  { img: TestFx, name: "TestFx"},
  { img: Monica, name: "Monica"},
  { img: Notion, name: "Notion"},
  { img: Scikit, name: "Scikit-learn"},
  { img: QuillBot, name: "QuillBot"},
  { img: TensorFlow, name: "TensorFlow"},
  { img: Jenni, name: "Jenni"},
 { img: Bizway, name: "Bizway"},
  { img: LongShot, name: "LongShot"},
  { img: Copy, name: "Copy.ai"} ,
  { img: AIVA, name: "AIVA"},
  { img: Claude, name: "Claude"},
  { img: BlackBox, name: "BlackBox"}, 
 { img: SemRush, name: "SemRush"},
  { img: Runway, name: "Runway"},
  { img: Synthesia, name: "Synthesia"},
  { img: EleutherAI, name: "EleutherAI"},
 { img: Zo, name: "Zo"},
  { img: DataR, name: "DataRobot"},
  { img: DeepAI, name: "DeepAI"}
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
    <section id="Ressource's" className="mt-20">
      <div>
        <p className="text-4xl font-bold text-center text-gray-200 mb-10" style={{ fontFamily: "Roboto, sans-serif" }}>
          AI Tools Resources
        </p>
        <div>
          {[0, 10, 20].map((startIndex, rowIndex) => (
            <div className="p-4 flex justify-center" key={startIndex}>
              <div className={`scroll-container`}>
                <div className={`scroll-inner ${rowIndex === 1 ? 'middle' : ''} ${isPaused ? 'paused' : ''}`}>
                  {aiTools.slice(startIndex, startIndex + 10).map((tool, index) => (
                    <div
                      key={index}
                      className="card relative group"
                      onMouseEnter={() => setHoveredIndex(startIndex + index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <img src={tool.img} className="rounded-xl" style={{ height: 150 }} />
                      {hoveredIndex === startIndex + index && (
                        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white rounded-xl">
                          <h3 className="text-lg font-bold">{tool.name}</h3>
                          <button className="mt-2 bg-blue-500 px-4 py-1 rounded">Learn More</button>
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