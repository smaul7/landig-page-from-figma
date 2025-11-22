import React from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutOurApp from "./components/AboutOurApp";
import SiteBackgound from "./components/SiteBackground";
import AppFeatures from "./components/AppFeatures";
import Interface from "./components/Interface/Interface";
import DownloadAppNow from "./components/DownloadAppNow";
import HowToUse from "./components/HowToUse";
import OurReativeTeam from "./components/OurReativeTeam";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

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
      <Interface />
      <Wrapper>
        <DownloadAppNow />
      </Wrapper>
      <HowToUse />
      <Wrapper>
        <OurReativeTeam />
        <Blog />
      </Wrapper>
      <Footer />
    </>
  );
}
