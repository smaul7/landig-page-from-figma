import React from "react";

export default function Wrapper({ children }) {
  return <div className="w-full mx-auto max-w-[1232px] px-4 md:px-6">{children}</div>;
}
