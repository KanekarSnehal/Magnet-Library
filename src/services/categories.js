import axios from "axios";
import { getConfig } from "../utils";

// Categories
export const getCategories = async () => {
  return await axios.get(`/api/categories`, getConfig());
};

export const getCategory = async (categoryID) => {
  return await axios.get(`/api/category/${categoryID}`, getConfig());
};
