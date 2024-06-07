import React from "react";
import PairShoes from "@PUBLIC/pair.png";

const MainItem: React.FC = () => {
  return (
    <div className="mb-1">
      <div
        className="h-[250px] maxWidth-[25] bg-scream mb-4 flex justify-center relative"
        style={{
          height: "0",
          width: "100%",
          paddingBottom: "100%",
        }}
      >
        <img
          src={PairShoes}
          alt="pair shoes"
          className="object-contain w-full h-full absolute"
        />
      </div>

      <span className="font-base text-dark font-bold">
        Nike air zoom pegasus 35
      </span>
      <p className="font-base text-dark font-medium text-sm">$452</p>
    </div>
  );
};

export default MainItem;
