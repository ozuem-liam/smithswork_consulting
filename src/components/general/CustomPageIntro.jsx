import React from "react";

const CustomPageIntro = ({ image, title, descriptions, listTitle, lists }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden">
      {image && (<img src={image} alt={title} className="w-full h-48 object-cover" />)}
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
