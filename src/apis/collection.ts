import axios from "axios";
import { ICollection, ICollectionBase } from "types/product";
import { API_URI } from "./config";

export const fetchCollections = async () => {
  const response = await axios.get(`${API_URI}/collections`);
  return response.data as ICollectionBase[];
};

export const fetchCollectionInfo = async (id: string) => {
  const response = await axios.get(`${API_URI}/collections/${id}`);
  return response.data as ICollection;
};

export const fetchCollectionsFromSlug = async (slug: string) => {
  const response = await axios.get(`${API_URI}/collections?slug=${slug}`);
  return response.data as ICollection[];
};
