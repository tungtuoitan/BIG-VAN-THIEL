import React from "react";
import ButtonLink from "@SRC/components/buttons/ButtonLink";
import { Product } from "@SRC/store/slices/productsSlice";

const DisplayCard: React.FC<Product> = (item) => {
  return (
    <div className="mb-4">
      <img src={item.img[0]} alt="person" />
      <h3 className="text-base20 text-dark my-2">
        {item.userType.toUpperCase()} SHOES COLLECTIONS
      </h3>
      <p className="text-sm text-dark font-light mb-8">{item.desc}</p>
      <ButtonLink title={`SHOP ${item.userType.toUpperCase()}`} />
    </div>
  );
};

export default DisplayCard;
