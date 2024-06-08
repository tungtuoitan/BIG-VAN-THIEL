import React from "react";
import ButtonLink from "@SRC/components/buttons/ButtonLink";
import { Product } from "@SRC/store/slices/productsSlice";

const DisplayItem: React.FC<Product> = (item) => {
  return (
    <div className="mb-4">
      <img src={item.img[0]} alt="person" />
      <h3 className="text-base20 text-dark my-2">
        {item.userType.toUpperCase()} SHOES COLLECTIONS
      </h3>
      <p className="text-sm text-dark font-light mb-4">
        Constructed from luxury nylons, leathers, and custom hardware, featuring
        sport details such as hidden breathing vents, waterproof + antimicrobial
        linings, and more.
      </p>
      <ButtonLink title={`SHOP ${item.userType.toUpperCase()}`} />
    </div>
  );
};

export default DisplayItem;
