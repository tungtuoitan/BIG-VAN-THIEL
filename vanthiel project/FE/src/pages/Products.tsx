import Card from "@SRC/components/Card";
import ArrowUpIcon from "@SRC/components/icons/ArrowUpIcon";
import UpdownIcon from "@SRC/components/icons/UpdownIcon";
import { Box, Slider } from "@mui/material";
import { RootState } from "@SRC/store/store";
import { useDispatch, useSelector } from "react-redux";
import { updatePriceRange } from "@SRC/store/slices/productsSlice";
import PaginationContainer from "@SRC/components/PaginationContainer";
import DirectoryTree from "@SRC/components/DirectoryTree";
import { useEffect } from "react";
import { updateData } from "@SRC/store/slices/productsSlice";
import dataDb from "@SRC/db/data";
import { Product } from "@SRC/store/slices/productsSlice";
import Layout from "@SRC/components/layout/Layout";

function valuetext(value: number) {
  return `$${value}`;
}

function Products() {
  const dispatch = useDispatch();
  const priceRange = useSelector(
    (state: RootState) => state.products.priceRange
  );
  const handleChange = (_event: Event, newValue: number | number[]) => {
    dispatch(updatePriceRange(newValue as [number, number]));
  };
  const data = useSelector((state: RootState) => state.products.data);

  const fetchData = async () => {
    try {
      // const response = await fetch("https://api.example.com/data");
      // let data = await response.json();
      const data = dataDb;
      dispatch(updateData(data));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout>
      <main>
        <div className="flex justify-center">
          <div className="w-full lg:w-[1360px] px-[22px] lg:px-24">
            <div className="font-light text-sm mt-4 lg:px-0">
              <DirectoryTree />
              <h1 className="text-xl40 font-bold">ALL PRODUCTS</h1>

              <div className="grid md:grid-cols-4 ">
                <div className="hidden md:block md:col-span-1 text-sm font-bold py-[12px] pe-[20px]">
                  <p className="mb-8">FILTER</p>
                  <div className="w-full">
                    <p className="text-gray-600 font-normal">PRICE</p>
                    <Box sx={{ width: "100%" }}>
                      <Slider
                        getAriaLabel={() => "Temperature range"}
                        value={priceRange}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        color="primary"
                      />
                    </Box>
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
                  <div className="flex flex-col justify-center">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {data.map((item: Product) => {
                        return <Card {...item} key={item.id} />;
                      })}
                    </div>
                    <div className="flex w-full justify-center mt-6">
                      <PaginationContainer />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Products;
