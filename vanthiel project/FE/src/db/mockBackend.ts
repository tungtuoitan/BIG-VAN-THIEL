import { createServer } from "miragejs";
import data from "./data";
import {
  bannerRoute,
  productsAllRoute,
  accountRoute,
  slideRoute,
  productsPageRoute,
} from "@SRC/utils/apiRoutes/apiRoutes";
import getProductPerPage from "@SRC/utils/function/getProductPerPage";
import hasCommonElement from "@SRC/utils/function/hasCommonElement";
import { Product } from "@SRC/utils/types/types";

export const initMockServer = () => {
  const server = createServer({});

  server.get(bannerRoute, () => {
    return {
      img: "/src/db/imgs/banners/banner.webp",
      msg: "Success",
      success: true,
    };
  });

  server.get(slideRoute, () => {
    return {
      data: [
        {
          img: "/src/db/imgs/slides/a3.jpeg",
          userType: "men",
          desc: "Constructed from luxury nylons, leathers, and custom hardware, featuring sport details such as hidden breathing vents, waterproof + antimicrobial linings, and more.",
        },
        {
          img: "/src/db/imgs/slides/a2.jpeg",
          userType: "woman",
          desc: "Constructed from luxury nylons, leathers, and custom hardware, featuring sport details such as hidden breathing vents, waterproof + antimicrobial linings, and more.",
        },
        {
          img: "/src/db/imgs/slides/a1.jpeg",
          userType: "kid",
          desc: "Constructed from luxury nylons, leathers, and custom hardware, featuring sport details such as hidden breathing vents, waterproof + antimicrobial linings, and more.",
        },
      ],
      msg: "Success",
      success: true,
    };
  });

  server.get(productsAllRoute, () => {
    return {
      data: data,
      msg: "Success",
      success: true,
    };
  });

  server.post(productsPageRoute, (_schema, request) => {
    const { priceRange, sizes, colors, userType, brands } = JSON.parse(
      request.requestBody
    ).filter;
    const { page } = JSON.parse(request.requestBody);

    const filteredData = data.filter((item: Product) => {
      const userTypeBoo = item.userType === userType || userType === "all";
      return (
        item.price >= priceRange[0] &&
        item.price <= priceRange[1] &&
        userTypeBoo &&
        hasCommonElement(item.colors, colors) &&
        hasCommonElement(item.sizes, sizes) &&
        brands.includes(item.brand)
      );
    });

    return {
      data: getProductPerPage(page, filteredData),
      totalPage: Math.floor(filteredData.length / 9),
      msg: "Success",
      success: true,
    };
  });

  server.post(accountRoute("login"), () => {
    return {
      msg: "Login successfully",
      success: true,
    };
  });

  server.post(accountRoute("sign-up"), () => {
    return {
      msg: "Sign up successfully",
      success: true,
    };
  });

  server.post(accountRoute("update"), () => {
    return {
      msg: "Updated successfully",
      success: true,
    };
  });

  server.post(accountRoute("update"), () => {
    return {
      msg: "Updated successfully",
      success: true,
    };
  });
};
