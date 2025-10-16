import React from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutOurApp from "./components/AboutOurApp";
import SiteBackgound from "./components/SiteBackground";
import AppFeatures from "./components/AppFeatures";
import DownloadAppNow from "./components/DownloadAppNow";

export default function App() {
  return (
    <>
      <SiteBackgound>
        <Header />
        <HeroSection />
      </SiteBackgound>
      <Wrapper>
        <AboutOurApp />
      </Wrapper>
      <SiteBackgound>
        <AppFeatures />
      </SiteBackgound>
      <Wrapper>
        <DownloadAppNow />
      </Wrapper>
    </>
  );
}
