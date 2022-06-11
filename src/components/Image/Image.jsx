import React from "react";
const Image = ({ desktopImage, mobileImage, alt, className }) => {
  return (
    <picture>
      <source media="(min-width: 760px)" srcSet={desktopImage} />
      <img
        className={className}
        src={mobileImage}
        alt={alt}
        width="115px"
        height="115px"
      />
    </picture>
  );
};
export default Image;
