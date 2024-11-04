import aiLogo from "../assets/aiLogo.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from "react";

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useGSAP(() => {
    gsap.to("#nav", { opacity: 1, delay: 1 });
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLinkClick = () => {
    setIsNavOpen(false); // Close the nav when a link is clicked
  };

  return (
    <header id="nav" className="opacity-0 w-[90%] m-auto">
      <nav className="text-white flex justify-between items-center">
        <div>
          <img className="aiLogo" src={aiLogo} alt="AiLogo" />
        </div>
        <button className="w-10 h-8 ml-40 mb-2 sm:hidden" onClick={toggleNav}>
          ☰
        </button>
        <div className="flex items-center">
          <ul className="text-base backdrop-blur-xl bg-[#58585861] rounded-full p-4 hidden sm:flex sm:static">
            <li>
              <a href="/" onClick={handleLinkClick}>Home</a>
            </li>
            <li>
              <a href="#Definition" onClick={handleLinkClick}>What is AI?</a>
            </li>
            <li>
              <a href="#Application" onClick={handleLinkClick}>Application's</a>
            </li>
            <li>
              <a href="#Ressource's" onClick={handleLinkClick}>Ressource's</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          {isNavOpen && (
            <>
              <ul className="text-base backdrop-blur-xl bg-[#58585861] w-80 h-96 z-10 text-center p-4 absolute right-0 top-24 sm:flex sm:static">
                <li className="mb-2">
                  <a href="/" onClick={handleLinkClick}>Home</a>
                </li>
                <li className="mb-2">
                  <a href="#Definition" onClick={handleLinkClick}>What is AI?</a>
                </li>
                <li className="mb-2">
                  <a href="#Application" onClick={handleLinkClick}>Application's</a>
                </li>
                <li className="mb-2">
                  <a href="#Ressource's" onClick={handleLinkClick}>Ressource's</a>
                </li>
              </ul>

              <button className="navButton absolute left-28 bottom-36 z-10 sm:flex sm:static">
                <a
                  href="https://www.youtube.com/watch?v=efam9B6VKwo"
                  target="_blank"
                  onClick={handleLinkClick}
                >
                  AI Roadmap
                </a>
              </button>
            </>
          )}
          <button className="navButton hidden sm:block">
            <a
              href="https://www.youtube.com/watch?v=efam9B6VKwo"
              target="_blank"
              onClick={handleLinkClick}
            >
              AI Roadmap
            </a>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
