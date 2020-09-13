import React from "react";
import ImageGalleryItem from "./ImageGalleryItem";

export default function ImageGallery({ arrayImages, imageClick }) {
  return (
    <>
      <ul className="ImageGallery">
        {arrayImages.map((image) => (
          <ImageGalleryItem
            key={image.id}
            image={image}
            onClickModal={imageClick}
          />
        ))}
      </ul>
    </>
  );
}
