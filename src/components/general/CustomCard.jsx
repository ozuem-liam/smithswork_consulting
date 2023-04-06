import React from 'react';

const CustomCard = ({image, title, description, shadowStyle=true}) => {
  return (
    <div className={`bg-white rounded-lg overflow-hidden mb-4 ${shadowStyle && "shadow-md"}`} >
      {image && (<img src={image} alt={title} className="w-full h-48 object-cover" />)}
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default CustomCard;