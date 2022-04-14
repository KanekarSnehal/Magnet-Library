import React from "react";
import { useEffect, useState } from "react";
import { getCategories } from "../../services/videoServices";
import { CategoriesList } from "../CategoriesList/CategoriesList";

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(async () => {
    const res = await getCategories();
    setCategories(res.data.categories);
  }, []);

  return (
    <div>
      <h2 className="text-center secondary-text-color">Featured Categories</h2>
      <div className="title-underline"></div>
      <div className="spacer-2rem"></div>
      <CategoriesList categories={categories} />
    </div>
  );
};
