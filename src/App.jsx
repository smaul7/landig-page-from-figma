import React from "react";
import Wrapper from "./components/Wrapper";
import background from "./assets/background.png";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutOurApp from "./components/AboutOurApp";

export default function App() {
  return (
    <>
      <div style={{ backgroundImage: `url(${background})` }} className="bg-cover min-h-screen">
        <Wrapper>
          <Navbar />
          <HeroSection />
        </Wrapper>
      </div>
      <Wrapper>
        <AboutOurApp />
      </Wrapper>
    </>
  );
}
