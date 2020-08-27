import React from "react";

export default function ImageGalleryItem({ image, onClickModal }) {
  const { webformatURL, id, tags, largeImageURL } = image;

  return (
    <li key={id} className="ImageGalleryItem">
      <img
        src={webformatURL}
        srcSet={largeImageURL}
        alt={tags}
        className="ImageGalleryItem-image"
        onClick={onClickModal}
      />
    </li>
  );
}
