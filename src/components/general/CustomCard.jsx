import React from "react";

const CustomCard = ({
  image,
  title,
  description,
  shadowStyle = true,
  reverse = false,
  rounded = false,
}) => {
  return (
    <div
      className={`md:flex w-full bg-white rounded-lg overflow-hidden md:h-full ${
        shadowStyle && "shadow-md"
      } ${reverse && "md:flex-row-reverse"}`}
    >
      {image && (
        <div className="xs:p-10 md:p-20 md:w-1/2 md:h-screen flex items-center justify-center">
          <img
            src={image}
            alt={title}
            className={`w-[350px] md:w-full h-[350px] md:h-full object-cover  ${rounded && "rounded-full"}`}
          />
        </div>
      )}
      <div className="flex flex-col p-20 md:w-1/2">
        <h2 className="text-2xl text-center font-bold md:mt-20 mb-10 md:mb-20">{title}</h2>
        <p className="text-gray-700 text-center text-base">{description}</p>
      </div>
    </div>
  );
};

export default CustomCard;
