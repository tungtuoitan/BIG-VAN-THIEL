import MainItem from "@SRC/components/MainItem";
import DisplayItem from "@SRC/components/DisplayItem";
import ImgSlice from "@SRC/assets/imgSlices/img1.webp";

function HomePage() {
  return (
    <>
      <div
        className="relative flex items-center md:grid md:grid-cols-2 w-100 h-[490px] bg-cover bg-no-repeat bg-left-center"
        style={{
          backgroundImage: `url(${ImgSlice})`,
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
            <DisplayItem />
            <DisplayItem />
            <DisplayItem />
          </div>
          <div className="pt-3">
            <h3 className="text-center font-base text-dark mt-[30px] mb-4">
              FEATURE PRODUCTS
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <MainItem />
              <MainItem />
              <MainItem />
              <MainItem />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default HomePage;
