import React from "react";

export default function Button({ onClick }) {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
  return (
    <button className="Button" type="button" onClick={onClick}>
      Load more
    </button>
  );
}
