import AiVideo from "../assets/AiVideo.mp4";
import Capture from "../assets/Capture.png";
import Designify from "../assets/Designify.png";
import Pictory from "../assets/Pictory.png";
import Grammarly from "../assets/Grammarly.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect } from "react";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleEnded = () => {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    };

    const video = videoRef.current;
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#ai", { opacity: 1, delay: 1.5 });
    gsap.to("#hero", { opacity: 1, delay: 1.7 });
    gsap.to("#hero1", { opacity: 1, delay: 1.9 });
    gsap.to("#hero2", { opacity: 1, delay: 2.2 });
    gsap.to("#hero3", { opacity: 1, delay: 2.4 });
  }, []);

  return (
    <section>
      <div className="flex grid-cols-12 justify-around text-white text-center gap-8">
        <div id="ai" style={{ opacity: 0 }} className="col-span-6">
          <video
            ref={videoRef}
            className="pointer-events-none"
            autoPlay
            muted
            playsInline
          >
            <source src={AiVideo} type="video/mp4" />
          </video>
        </div>
        <div className="grid grid-row-2 col-span-5 w-1/2 gap-4">
          <div class="grid grid-cols-12 gap-4">
            <div id="hero" style={{ opacity: 0 }} class="col-span-6 backdrop-blur-xl bg-[#58585861] p-4 rounded-3xl">
              <div>
                <div className="flex justify-center">
                  <img
                    className="w-9 mr-4 rounded-lg"
                    src={Capture}
                    alt="ChatGPT logo"
                  />
                  <div className="my-auto">
                    <p>ChatGPT</p>
                  </div>
                </div>
                <div>
                  <p className="mt-5 text-sm">
                    ChatGPT, an AI language model created by OpenAI. My main
                    purpose is to engage in conversations
                  </p>
                </div>
                <div>
                  <button>Learn more</button>
                </div>
              </div>
            </div>
            <div id="hero1" style={{ opacity: 0 }} class="col-span-6 backdrop-blur-xl bg-[#58585861] p-4 rounded-3xl">
              <div className="flex justify-center">
                <img
                  className="w-9 mr-4 rounded-lg"
                  src={Designify}
                  alt="Designify logo"
                />
                <div className="my-auto">
                  <p>Designify</p>
                </div>
              </div>
              <div>
                <p className="mt-5 text-sm">
                  This tool enhances images using AI, automating background
                  removal and applying design effects.
                </p>
              </div>
              <div>
                <button className="mt-5">Learn more</button>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-12 gap-4">
            <div id="hero2" style={{ opacity: 0 }} class="col-span-6 backdrop-blur-xl bg-[#58585861] p-4 rounded-3xl">
              <div className="flex justify-center">
                <img
                  className="w-12 rounded-lg"
                  src={Pictory}
                  alt="Pictory logo"
                />
                <p>Pictory</p>
              </div>
              <div>
                <p className="mt-5 text-sm">
                  An AI tool that helps users create short videos from long-form
                  content, automatically extracting.
                </p>
              </div>
              <div>
                <button>Learn more</button>
              </div>
            </div>
            <div id="hero3" style={{ opacity: 0 }} class="col-span-6 backdrop-blur-xl bg-[#58585861] p-4 rounded-3xl">
              <div className="flex justify-center">
                <img
                  className="w-12 mr-4 rounded-lg"
                  src={Grammarly}
                  alt="Grammarly logo"
                />
                <p>Grammarly</p>
              </div>
              <div>
                <p className="mt-3 text-sm">
                  An AI-powered writing assistant that helps students improve
                  their writing by providing grammar.
                </p>
              </div>
              <div>
                <button>Learn more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
