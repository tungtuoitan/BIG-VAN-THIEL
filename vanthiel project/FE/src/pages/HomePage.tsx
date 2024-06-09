import DisplayCard from "@SRC/components/cards/DisplayCard";
import Card from "@SRC/components/cards/Card";
import Layout from "@SRC/components/layout/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {
  bannerRoute,
  productsAllRoute,
  slideRoute,
} from "@SRC/utils/apiRoutes/apiRoutes";
import { Product, Slide } from "@SRC/utils/types/types";

const HomePage: React.FC = () => {
  const [banner, setBanner] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [slides, setSlides] = useState<Slide[]>([]);

  useEffect(() => {
    const fetchBanner = async () => {
      const { data } = await axios.get(bannerRoute);
      if (!data.success) toast.error(data.msg);
      if (data.success) setBanner(data.img);
    };
    fetchBanner();

    const fetchSlides = async () => {
      const { data } = await axios.get(slideRoute);
      if (!data.success) toast.error(data.msg);
      if (data.success) setSlides(data.data);
    };
    fetchSlides();

    const fetchProducts = async () => {
      const { data } = await axios.get(productsAllRoute);
      if (!data.success) toast.error(data.msg);
      if (data.success) setProducts(data.data);
    };
    fetchProducts();
  }, []);

  return (
    <Layout>
      <div
        className="relative flex items-center md:grid md:grid-cols-2 w-100 h-[490px] bg-cover bg-no-repeat bg-left-center"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="z-10 text-center md:text-left md:col-start-2 md:col-end-3 px-8 text-gray-800">
          <h2 className="text-xl md:text-2xl5 md:font-normal md:leading-tighter">
            Discount 20% For All Orders Over $2000
          </h2>
          <p className="font-light">
            Use coupon code<span className="font-bold"> DISCOUNT20</span>
          </p>
          <p className="font-light">Use coupon DISCOUNT20</p>
        </div>
        <div
          className="absolute inset-0 bg-gray-500 opacity-30"
          style={{ background: "#685f58" }}
        ></div>
      </div>
      <main className="flex justify-center">
        <div className="px-[22px] lg:w-[1360px] lg:px-24">
          <div className="grid gap-2 md:grid-cols-3 mt-4">
            {slides.map((item: Slide, index: number) => {
              return <DisplayCard {...item} key={index} />;
            })}
          </div>
          <div className="pt-3">
            <h3 className="text-center text-base20 text-dark mt-12 mb-8">
              BEST SELLER PRODUCTS
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {products
                .filter((item: Product) => item.bestseller)
                .map((item: Product) => {
                  return <Card {...item} key={item.id} />;
                })}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default HomePage;
