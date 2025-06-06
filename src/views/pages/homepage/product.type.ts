import type { ProductCategoryEnum } from "./productCategory.enum";

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: ProductCategoryEnum;
  image: string;
};
