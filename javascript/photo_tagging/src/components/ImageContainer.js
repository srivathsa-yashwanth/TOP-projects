import React from "react";
import mainImage from "../assets/images/rickandmortywaldo.webp";

const ImageContainer = () => {

  const handleClick = (e) => {
    console.log('page', e.pageX, e.pageY);
  };

  return (
    <div>
      <img src={mainImage} onClick={handleClick} alt="main waldo" />
    </div>
  );
};

export default ImageContainer;
