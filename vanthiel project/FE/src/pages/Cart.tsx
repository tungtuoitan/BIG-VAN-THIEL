import Button from "@SRC/components/buttons/Button";
import Layout from "@SRC/components/layout/Layout";
import data from "@SRC/db/data";
import { removeChoiceFromCart } from "@SRC/store/slices/productsSlice";
import { RootState } from "@SRC/store/store";
import toFix from "@SRC/utils/function/toFix";
import upperCaseFirstChar from "@SRC/utils/function/upperCaseFirstChar";
import { Choice, Product } from "@SRC/utils/types/types";
import { useDispatch, useSelector } from "react-redux";

const Cart: React.FC = () => {
  const cart = useSelector((state: RootState) => state.products.cart);
  const cartIds = cart.map((item: Choice) => item.id);
  const items = data.filter((item: Product) => cartIds.includes(item.id));
  const dispatch = useDispatch();
  let totalPrice: number = 0;
  const handleCheckOut = () => {};

  return (
    <Layout>
      <main className="mt-24">
        <div className="flex justify-center min-h-screen">
          <div className="w-full lg:w-[1360px] px-[22px] lg:px-24">
            <div className="md:grid md:grid-cols-4 md:gap-12  ">
              <div className="col-start-1 col-end-4">
                <div className="grid grid-cols-8 font-light mt-8 pb-3 border-bottom-1">
                  <p className="col-span-5 ">PRODUCT</p>
                  <p className="col-start-7 col-end-9 md:col-start-6 md:col-end-7 text-right md:text-left">
                    PRICE
                  </p>
                  <p className="col-start-7 col-end-8 hidden md:block">
                    QUANTITY
                  </p>
                  <p className="col-start-8 col-end-9 hidden md:block md:text-right">
                    TOTAL
                  </p>
                </div>
                <div>
                  <div>
                    {items.map((item: Product, index: number) => {
                      const choice = cart.find(
                        (choice: Choice) => choice.id === item.id
                      );
                      let total = 0;
                      if (choice?.amount) total = item.price * choice?.amount;
                      totalPrice += total;
                      return (
                        <div
                          className="grid grid-cols-8 border-bottom-1 "
                          key={index}
                        >
                          <div
                            key={index}
                            className="col-span-5 flex gap-2 py-4"
                          >
                            <div className="bg-gray-200 flex justify-center items-center w-24 h-24 sm:w-24 sm:h-24">
                              <img
                                src={item.img[0]}
                                alt={item.title}
                                className="w-10 h-10 sm:w-24 sm:h-24"
                              />
                            </div>
                            <div>
                              <p className="text-base font-bold">
                                {item.title}
                              </p>
                              <p className="text-sm font-light">
                                Color:{" "}
                                {upperCaseFirstChar(choice?.color as string)}
                              </p>
                              <p className="text-sm font-light">
                                Size: {choice?.size}
                              </p>
                              <a
                                className="hover:underline hover:text-red-500 text-gray-600 text-sm cursor-pointer"
                                onClick={() => {
                                  dispatch(removeChoiceFromCart(item.id));
                                }}
                              >
                                Remove
                              </a>
                            </div>
                          </div>
                          <div className="col-start-7 col-end-9 md:col-start-6 md:col-end-7 flex justify-end md:justify-start items-center">
                            <div className="font-light text-sm">
                              <p>${toFix(item.price)}</p>
                              <p className="md:hidden">Qty: {choice?.amount}</p>
                            </div>
                          </div>
                          <div className="col-start-7 col-end-8 hidden md:flex justify-start items-center font-light text-sm">
                            {choice?.amount}
                          </div>
                          <div className="col-start-8 col-end-9 hidden md:flex justify-end items-center font-light text-sm">
                            ${total}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xl text-gray-800 mt-8 mb-4">
                  Order summary
                </h4>
                <div className="flex justify-between font-light text-sm mb-4">
                  <span>Sub total</span>
                  <span>{toFix(totalPrice)}</span>
                </div>
                <div className="flex justify-between font-light text-sm mb-8">
                  <div className="flex flex-col">
                    <span className="font-bold">Total</span>
                    <span>(Inclusive of tax 10%)</span>
                  </div>
                  <span>{toFix(totalPrice * 1.1)}</span>
                </div>
                <Button title="CHECK OUT" handleClick={handleCheckOut} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Cart;
