export interface ICategory {
  _id: string;
  name: string;
  gender: string;
  slug: string;
}
export interface ICollectionBase {
  _id: string;
  name: string;
  slug: string;
  image: string;
  shortDesc: string;
}

export interface ICollection extends ICollectionBase {
  products: IProductBase[];
  category: ICategory;
}
export interface IProductBase {
  name: string;
  price: number;
  slug: string;
  shortDesc: string;
  bannerImage: string;
}

export interface IProduct extends IProductBase {
  collection: ICollectionBase;
  category: ICategory;
  colors: IProductColor[];
}
export interface IProductColor {
  _id: string;
  name: string;
  colorCode: string;
  images: string[];
  sizes: IProductSize[];
}
export interface IProductSize {
  _id: string;
  name: string;
  isAvaiable: boolean;
}
