import React from "react";
import LayoutGrid from "./components/LayoutGrid";
import Navbar from "./components/Navbar";
import background from "./assets/background.png";
import HeroSection from "./components/HeroSection";

export default function App() {
  return (
    <>
      <div style={{ backgroundImage: `url(${background})` }} className="bg-cover min-h-screen">
        <div className="w-full mx-auto max-w-[1232px] px-4 md:px-6">
          <Navbar />
          <HeroSection />
        </div>
      </div>
    </>
  );
}
