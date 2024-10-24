import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Nav from "./components/Navbar";
import Hero from "./components/Hero";
import AiSection from "./components/AiSection";
import "./index.css";
import Application from "./components/Application";
import Ressources from "./components/Ressources";
import Footer from "./components/Footer"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Nav />
    <Hero />
    <AiSection />
    <Application />
    <Ressources />
    <Footer />
  </StrictMode>
);
