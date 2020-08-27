import React from "react";
import ImageGalleryItem from "./ImageGalleryItem";

export default function ImageGallery({ arrayImages, onClickModal }) {
  return (
    <>
      <ul className="ImageGallery">
        {arrayImages.map((image) => (
          <ImageGalleryItem
            key={image.id}
            image={image}
            onClickModal={onClickModal}
          />
        ))}
      </ul>
    </>
  );
}
