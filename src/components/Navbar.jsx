import aiLogo from "../assets/aiLogo.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Nav = () => {
  useGSAP(() => {
    gsap.to("#nav", { opacity: 1, delay: 1 });
  }, []);

  return (
    <header id="nav" className="opacity-0">
      <nav className="text-white flex justify-between">
        <div>
          <img className="aiLogo" src={aiLogo} alt="AiLogo" />
        </div>
        <div className="flex items-center">
          <ul className="flex text-base backdrop-blur-xl bg-[#58585861] rounded-full p-4">
            <li>Home</li>
            <li><a href="#Definition">What is AI?</a></li>
            <li><a href="#Application">Application's</a></li>
            <li><a href="#Ressource's">Ressource's</a></li>
          </ul>
        </div>
        <div className="flex items-center">
          <button className="navButton">
            <a href="">Contact Us</a>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
