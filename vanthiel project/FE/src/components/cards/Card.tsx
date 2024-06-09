import React from "react";
import { updateChoice } from "@SRC/store/slices/productsSlice";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Product } from "@SRC/utils/types/types";

const Card: React.FC<Product> = (item) => {
  const dispatch = useDispatch();
  return (
    <Link
      to={`/products/${item.userType}/${item.id}`}
      className="mb-1"
      onClick={() => dispatch(updateChoice(["id", item.id]))}
    >
      <div
        className="h-[250px] maxWidth-[25] bg-scream mb-4 flex justify-center relative"
        style={{
          height: "0",
          width: "100%",
          paddingBottom: "100%",
        }}
      >
        <img
          src={item.img[0]}
          alt={item.title}
          className="object-contain w-full h-full absolute border border-4"
        />
      </div>

      <span className="font-base text-dark font-bold">{item.title}</span>
      <p className="font-base text-dark font-medium text-sm">${item.price}</p>
    </Link>
  );
};

export default Card;
