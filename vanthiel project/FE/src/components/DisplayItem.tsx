import React from "react";
import PersonImg from "@PUBLIC/person1.jpeg";

const DisplayItem: React.FC = () => {
  return (
    <div className="mb-4">
      <img src={PersonImg} alt="person" />
      <h3 className="text-base20 text-dark my-2">MEN SHOES COLLECTIONS</h3>
      <p className="text-sm text-dark font-light mb-2">
        Constructed from luxury nylons, leathers, and custom hardware, featuring
        sport details such as hidden breathing vents, waterproof + antimicrobial
        linings, and more.
      </p>
      <button className="bg-gray-800 hover:bg-black px-[20px] py-[10px] text-white rounded">
        SHOP KID
      </button>
    </div>
  );
};

export default DisplayItem;
