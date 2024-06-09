import { Product } from "../types/types";

export default function getProductPerPage(page: number, products: Product[]) {
  if (page > products.length / 9 + 1) return [];

  const result = [];
  const start = (page - 1) * 9;
  const end = products.length - 1 > start + 8 ? start + 8 : products.length - 1;

  for (let i = start; i <= end; i++) {
    result.push(products[i]);
  }

  return result;
}
