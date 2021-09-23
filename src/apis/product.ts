import axios from "axios";
import { ICollectionBase, IProduct } from "types/product";
import { API_URI } from "./config";

export const getProductFromId = async (
  productId: string
): Promise<IProduct> => {
  const response = await axios.get(`${API_URI}/products/${productId}`);
  return response.data as IProduct;
};

export const getProductsFromSlug = async (
  slug: string
): Promise<IProduct[]> => {
  const response = await axios.get(`${API_URI}/products?slug=${slug}`);
  return response.data as IProduct[];
};

export const fetchCollectionsOfCategory = async (categoryId: string) => {
  const response = await axios.get(`${API_URI}/categories/${categoryId}`);
  return response.data.collections as ICollectionBase[];
};

export const fetchCategoryFromSlug = async (slug: string) => {
  const response = await axios.get(`${API_URI}/categories?slug=${slug}`);
  return response.data;
};
