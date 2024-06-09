import Card from "@SRC/components/cards/Card";
import ArrowUpIcon from "@SRC/components/icons/ArrowUpIcon";
import UpdownIcon from "@SRC/components/icons/UpdownIcon";
import { Box, Pagination, PaginationItem, Slider } from "@mui/material";
import { RootState } from "@SRC/store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  updateFilter,
  updatePriceRange,
} from "@SRC/store/slices/productsSlice";
import { useEffect, useRef, useState } from "react";
import Layout from "@SRC/components/layout/Layout";
import axios from "axios";
import { productsPageRoute } from "@SRC/utils/apiRoutes/apiRoutes";
import { toast } from "react-toastify";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import toFix from "@SRC/utils/function/toFix";
import CheckboxForm from "@SRC/components/forms/CheckboxForm";
import { TimeoutId } from "node_modules/@reduxjs/toolkit/dist/query/core/buildMiddleware/types";
import FilterIcon from "@SRC/components/icons/FilterIcon";
import { FullFilter, Product } from "@SRC/utils/types/types";

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [filterPopup, setFilterPopup] = useState<boolean>(false);
  const dragTimeoutRef = useRef<TimeoutId | null>(null);
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.products.filter);

  const changePrice = (_event: Event, newValue: number | number[]) => {
    dispatch(updatePriceRange(newValue as [number, number]));

    if (dragTimeoutRef.current) {
      clearTimeout(dragTimeoutRef.current);
    }
    dragTimeoutRef.current = setTimeout(() => {
      fetchDisplayProducts({ page: 1, filter: { ...filter } });
    }, 300);
  };

  const changePage = async (
    _event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    dispatch(updateFilter(["page", page]));
  };

  const fetchDisplayProducts = async (fulFilter: FullFilter) => {
    const { data } = await axios.post(productsPageRoute, fulFilter);
    if (!data.success) toast.error(data.msg);
    if (data.success) {
      setProducts(data.data);
      setTotalPage(data.totalPage);
    }
  };

  const clickFilterIcon = () => {
    setFilterPopup(!filterPopup);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetchDisplayProducts({ page: 1, filter: { ...filter } });
  }, [
    filter.brands,
    filter.colors,
    filter.page,
    filter.sizes,
    filter.userType,
  ]);

  return (
    <Layout>
      <main className="mt-24">
        <div className="flex justify-center">
          <div className="w-full lg:w-[1360px] px-[22px] lg:px-24">
            <div className="font-light text-sm mt-4 lg:px-0">
              <h1 className="text-xl40 font-bold mb-8">
                {filter.userType.toUpperCase()} PRODUCTS
              </h1>
              <div className="grid md:grid-cols-4 ">
                <div
                  className={` ${
                    filterPopup
                      ? "fixed z-10 top-0 left-0 w-full px-12 py-4"
                      : "hidden"
                  } md:block md:col-span-1 text-sm font-bold py-[12px] pe-[20px] bg-white`}
                >
                  <p className="mb-8">FILTER</p>
                  <div className="w-full">
                    <p className="text-gray-600 font-normal">PRICE</p>
                    <Box sx={{ width: "100%" }}>
                      <Slider
                        getAriaLabel={() => "Temperature range"}
                        value={filter.priceRange}
                        onChange={changePrice}
                        valueLabelDisplay="off"
                        color="primary"
                        min={0}
                        max={1000}
                      />
                    </Box>
                    <div className="flex justify-between">
                      <span>${toFix(filter.priceRange[0])}</span>
                      <span>${toFix(filter.priceRange[1])}</span>
                    </div>
                  </div>
                  <div>
                    <p className="border-bottom-1 pb-2 pt-8">BRANDS</p>
                    <CheckboxForm type={"brands"} />
                    <p className="border-bottom-1 pb-2 pt-8">SIZES</p>
                    <CheckboxForm type={"sizes"} />
                    <p className="border-bottom-1 pb-2 pt-8">COLOR</p>
                    <CheckboxForm type={"colors"} />
                  </div>
                </div>

                <div className="md:col-span-3">
                  <div className="w-full flex justify-end mb-4">
                    <div className="flex justify-center items-center gap-1">
                      <span>Sort By:</span>
                      <div className="relative">
                        <select
                          disabled
                          className="border border-gray-500 rounded-md p-[12px] w-[160px]"
                        >
                          <option>Name</option>
                          <option>Price</option>
                        </select>
                        <div className="absolute top-3 right-3" aria-disabled>
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
                      {products.map((item: Product) => {
                        return <Card {...item} key={item.id} />;
                      })}
                    </div>
                    <div className="flex w-full justify-center mt-6">
                      <Pagination
                        count={totalPage}
                        onChange={changePage}
                        renderItem={(item) => (
                          <PaginationItem
                            slots={{
                              previous: ArrowBackIcon,
                              next: ArrowForwardIcon,
                            }}
                            {...item}
                          />
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="md:hidden rounded-full box-shadow2 fixed bg-white bottom-4 left-4 z-10 cursor-pointer p-2"
          onClick={clickFilterIcon}
        >
          <FilterIcon />
        </div>
      </main>
    </Layout>
  );
};

export default Products;
