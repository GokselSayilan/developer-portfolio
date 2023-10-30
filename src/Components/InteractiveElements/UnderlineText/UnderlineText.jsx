import React, { useState } from "react";
import "./underlineText.css";

function UnderlineText({
  colorText = "whiteText",
  colorBg = "greenBg",
  label = "text",
}) {
  const [isHover, setIsHover] = useState();
  return (
    <div
      className="underlineText"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <p className={`text boldWeight ${isHover ? 'greenText' : colorText}`}>{label}</p>
      <div className={`underline ${colorBg}`} />
    </div>
  );
}

export default UnderlineText;
