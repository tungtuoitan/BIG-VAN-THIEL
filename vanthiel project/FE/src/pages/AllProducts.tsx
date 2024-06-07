import MainItem from "@SRC/components/MainItem";
import ArrowUpIcon from "@SRC/components/icons/ArrowUpIcon";
import UpdownIcon from "@SRC/components/icons/UpdownIcon";
import { Slider } from "@mui/material";
import { useLocation } from "react-router-dom";
import 

function AllProducts() {
  const location = useLocation();
  const path = location.pathname;
  
  const handleChange = () => {}
  const valuetext = 0
  const value = 0

  return (
    <main>
      <div className="flex justify-center">
        <div className="w-full lg:w-[1360px] px-[22px] lg:px-24">
          <div className="font-light text-sm mt-4 p-4 lg:px-0">
            <div className="mb-4">
              <a href="/" className="text-blue-500 hover:text-bold ">
                Home
              </a>
              <span className="mx-1 font-gray-600">/</span>
              <span className="mx-1 font-gray-600">All Products</span>
            </div>
            <h1 className="text-xl40 font-bold">ALL PRODUCTS</h1>

            <div className="grid md:grid-cols-4 red">
              <div className="hidden md:flex md:col-span-1 text-sm font-bold p-[12px] ">
                <p>FILTER</p>
                <div>
                  <p>PRICE</p>
                  <Slider
                    getAriaLabel={() => "Temperature range"}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    color="black"
                    getAriaValueText={valuetext}
                  />
                </div>
              </div>

              <div className="md:col-span-3">
                <div className="w-full flex justify-end mb-4">
                  <div className="flex justify-center items-center gap-1">
                    <span>Sort By:</span>
                    <div className="relative">
                      <select className="border border-gray-500 rounded-md p-[12px] w-[160px]">
                        <option>Name</option>
                        <option>Price</option>
                      </select>
                      <div className="absolute top-3 right-3">
                        <UpdownIcon />
                      </div>
                    </div>
                    <div>
                      <ArrowUpIcon />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <MainItem />
                  <MainItem />
                  <MainItem />
                  <MainItem />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AllProducts;
