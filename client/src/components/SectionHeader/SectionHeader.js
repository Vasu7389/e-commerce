import React from "react";
import "./SectionHeader.css";

function SectionHeader({ text }) {
  const [firstWord, secondWord] = text.split(" ");
  return (
    <div className="sectionHeader__container">
      {firstWord}{" "}
      <div style={{ fontWeight: "400", marginLeft: "5px" }}>{secondWord}</div>
    </div>
  );
}

export default SectionHeader;
