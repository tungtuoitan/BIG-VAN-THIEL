import DirectoryTree from "@SRC/components/DirectoryTree";
import Button from "@SRC/components/buttons/Button";
import ToggleButtons from "@SRC/components/buttons/ToggleButtons";
import NumField from "@SRC/components/fields/NumField";
import Layout from "@SRC/components/layout/Layout";
import data from "@SRC/db/data";
import { Product, addChoiceToCard } from "@SRC/store/slices/productsSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Detail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const item = data.find((item: Product) => item.id === parseInt(id as string));
  const [mainImg, setMainImg] = useState(0);
  const addToCart = () => {
    dispatch(addChoiceToCard());
    //API ở đây
    toast(
      <div className="flex flex-col justify-center gap-2 p-4">
        <p className="text-center font-bold">Successfully Add to your Cart</p>
        <Button title="View your Cart" handleClick={() => navigate("/cart")} />
      </div>
    );
  };

  return (
    <Layout>
      <main>
        <div className="flex justify-center min-h-screen">
          <div className="w-full lg:w-[1360px] px-[22px] lg:px-24">
            <DirectoryTree />
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className="">
                <img
                  src={item?.img[mainImg]}
                  className="border border-gray-200 w-full"
                />
                <div className="flex gap-1 mt-1">
                  {item?.img.map((item: string, index: number) => {
                    return (
                      <img
                        src={item}
                        className="w-[100px] border border-gray-20"
                        key={index}
                        onClick={() => setMainImg(index)}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="md:grid-span-2">
                <div className="mb-6">
                  <h1 className="text-xl">{item?.title}</h1>
                  <p className="text-base20">${item?.price.toFixed(2)}</p>
                  <p>
                    <span className="font-bold text-sm">• Color: </span>
                    {item?.colors[0]}
                  </p>
                  <p>
                    <span className="font-bold text-sm">• Brand: </span>
                    {item?.brand}
                  </p>
                </div>
                <div className="flex flex-col">
                  <NumField fieldType="amount" />
                  <div className="mb-4"></div>
                  <Button title="ADD TO CART" handleClick={addToCart} />
                  <div className="mt-8 mb-2">
                    <ToggleButtons
                      type="color"
                      array={item?.colors as string[]}
                    />
                  </div>
                  <ToggleButtons type="size" array={item?.sizes as string[]} />
                </div>
                <p className="font-light text-sm mt-8">{item?.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Detail;
