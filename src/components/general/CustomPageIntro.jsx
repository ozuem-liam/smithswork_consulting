import React from "react";

const CustomPageIntro = ({ image, title, descriptions, listTitle, lists }) => {
  return (
    <div className="bg-white h-full relative overflow-hidden">
      {image && (
        <div className="relative w-full">
          <div className="absolute w-full h-full bg-black opacity-50 z-10 top-0 left-0"></div>
          <h1 className="text-white font-bold inset-x-0 text-lg absolute top-1/2 flex justify-center z-20">{title}</h1>
          <div className="w-full">
            <img src={image} alt={title} className="md:h-1/2 object-cover" />
          </div>
        </div>
      )}
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        {descriptions.map((description, idx) => (
          <p key={idx} className="text-gray-700 text-base">
            {description}
          </p>
        ))}
        {listTitle && (
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{listTitle}</h2>
            <ul>
              {lists.map((list, idx) => (
                <li className="ml-2 mb-2" key={idx}>{list}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomPageIntro;
