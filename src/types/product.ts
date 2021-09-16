export type ProductType = {
  title: string;
  price: number;
  collection: string;
  slug: string;
  colors: ProductColorType[];
};
export type ProductColorType = {
  name: string;
  hexCode: string;
  imgs: string[];
};

export type ProductBaseType = {
  title: string;
  price: number;
  collection: string;
  slug: string;
  img: string;
};
