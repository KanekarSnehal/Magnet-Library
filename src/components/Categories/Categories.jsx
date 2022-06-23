import React from "react";
import { useEffect, useState } from "react";
import { getCategories } from "../../services";
import { CategoriesList } from "../CategoriesList/CategoriesList";
import { useAuth } from "../../context/authContext";

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const {
    authState: { authToken },
  } = useAuth();

  useEffect(async () => {
    if (categories.length === 0) {
      const res = await getCategories();
      setCategories(res.data.categories);
    }
  }, [authToken]);

  return (
    <div>
      <h2 className="text-center secondary-text-color">Featured Categories</h2>
      <div className="title-underline"></div>
      <div className="spacer-2rem"></div>
      <CategoriesList categories={categories} />
    </div>
  );
};
