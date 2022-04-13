import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Music",
    imageUrl:
      "https://res.cloudinary.com/dflebgpde/image/upload/v1649829085/magnet%20library/categories_o3quvu.jpg",
  },
  {
    _id: uuid(),
    categoryName: "TED",
    imageUrl:
      "https://res.cloudinary.com/dflebgpde/image/upload/v1649852401/magnet%20library/ted_xqnhhc.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Learning",
    imageUrl:
      "https://res.cloudinary.com/dflebgpde/image/upload/v1649852700/magnet%20library/learning_goxgkh.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Motivation",
    imageUrl:
      "https://res.cloudinary.com/dflebgpde/image/upload/v1649852936/magnet%20library/motivation_bpfcdq.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Stocks",
    imageUrl:
      "https://res.cloudinary.com/dflebgpde/image/upload/v1649853023/magnet%20library/stocks_smgetv.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Webseries",
    imageUrl:
      "https://res.cloudinary.com/dflebgpde/image/upload/v1649853186/magnet%20library/webseries_nmmumw.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Comedies",
    imageUrl:
      "https://res.cloudinary.com/dflebgpde/image/upload/v1649853322/magnet%20library/comdey_fhpyak.jpg",
  },
];
