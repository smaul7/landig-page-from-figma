import React from "react";
import background from "../assets/background.png";
import Wrapper from "./Wrapper";

export default function SiteBackgound({ children }) {
  return (
    <div style={{ backgroundImage: `url(${background})` }} className="bg-cover">
      <Wrapper>{children}</Wrapper>
    </div>
  );
}
