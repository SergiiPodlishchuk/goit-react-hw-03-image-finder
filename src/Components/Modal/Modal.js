import React from "react";

export default function Modal({ BigImage, tags }) {
  return (
    <div className="Overlay">
      <div className="Modal">
        <img src={BigImage} alt={tags} />
      </div>
    </div>
  );
}
