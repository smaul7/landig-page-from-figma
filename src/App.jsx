import React from "react";
import Navbar from "./components/Navbar";
import background from "./assets/background.png";

export default function App() {
  return (
    <>
      <div style={{ backgroundImage: `url(${background})` }} className="bg-cover">
        <div className="max-w-7xl mx-auto">
          <Navbar />
        </div>
      </div>
    </>
  );
}
