import { useState } from 'react';
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
  { img: Chatgbt, name: "ChatGPT", description: "A conversational AI model by OpenAI." },
  { img: Bard, name: "Bard", description: "Google's conversational AI." },
  { img: Waston, name: "Watson", description: "IBM's AI for business applications." },
  { img: Siri, name: "Siri", description: "Apple's virtual assistant." },
  { img: JasperAi, name: "Jasper AI", description: "AI content generation tool." },
  { img: Deepmind, name: "DeepMind", description: "AI research lab owned by Alphabet." },
  { img: Copilot, name: "Copilot", description: "GitHub's AI-powered coding assistant." },
  { img: Codex, name: "Codex", description: "OpenAI's code generation model." },
  { img: Gemeni, name: "Gemini", description: "AI platform by Google." },
  { img: HugingFace, name: "Hugging Face", description: "Transformers library for NLP." },
  { img: TestFx, name: "TestFx", description: "AI-driven testing tool." },
  { img: Monica, name: "Monica", description: "Personal relationship manager." },
  { img: Notion, name: "Notion", description: "All-in-one workspace for notes and tasks." },
  { img: Scikit, name: "Scikit-learn", description: "Machine learning library for Python." },
  { img: QuillBot, name: "QuillBot", description: "AI paraphrasing tool." },
  { img: TensorFlow, name: "TensorFlow", description: "Open-source machine learning framework." },
  { img: Jenni, name: "Jenni", description: "AI writing assistant." },
  { img: Bizway, name: "Bizway", description: "Business insights platform." },
  { img: LongShot, name: "LongShot", description: "AI tool for long-form content." },
  { img: Copy, name: "Copy.ai", description: "AI content generator." },
  { img: AIVA, name: "AIVA", description: "AI music composition software." },
  { img: Claude, name: "Claude", description: "Anthropic's AI assistant." },
  { img: BlackBox, name: "BlackBox", description: "AI coding assistant." },
  { img: SemRush, name: "SemRush", description: "SEO and marketing tool." },
  { img: Runway, name: "Runway", description: "AI-powered video editing." },
  { img: Synthesia, name: "Synthesia", description: "AI video generation platform." },
  { img: EleutherAI, name: "EleutherAI", description: "Open-source AI research." },
  { img: Zo, name: "Zo", description: "Conversational AI by Microsoft." },
  { img: DataR, name: "DataRobot", description: "Automated machine learning platform." },
  { img: DeepAI, name: "DeepAI", description: "AI research and development." },
];

const Ressources = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="mt-20">
      <div>
        <p className="text-4xl font-bold text-center text-gray-200 mb-10" style={{ fontFamily: "Roboto, sans-serif" }}>
          AI Tools Resources
        </p>
        <div>
          {[0, 10, 20].map(startIndex => (
            <div className="p-4 flex justify-center" key={startIndex}>
              <div className="scroll-container">
                {aiTools.slice(startIndex, startIndex + 10).map((tool, index) => (
                  <div
                    key={index}
                    className="card relative group"
                    onMouseEnter={() => setHoveredIndex(startIndex + index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <img src={tool.img} className="rounded-xl" style={{ height: 200 }} />
                    {hoveredIndex === startIndex + index && (
                      <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white rounded-xl">
                        <h3 className="text-lg font-bold">{tool.name}</h3>
                        <p className="text-sm text-center p-8">{tool.description}</p>
                        <button className="mt-2 bg-blue-500 px-4 py-1 rounded">Learn More</button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ressources;
