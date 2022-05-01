import axios from "axios";

const config = {
  headers: { authorization: localStorage.getItem("token") },
};

// Categories
export const getCategories = async () => {
  return await axios.get(`/api/categories`, config);
};

export const getCategory = async (categoryID) => {
  return await axios.get(`/api/category/${categoryID}`, config);
};
