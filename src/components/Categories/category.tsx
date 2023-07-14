import React from "react";
import { capitalizeFirstLetter } from "../../common/hooks";
import { toggleCategory } from "../../store/reducers/product";
import { useAppDispatch } from "../../store/store";

const Category = ({ category, isSelected }: CategoryProps) => {
  const dispatch = useAppDispatch();

  return (
    <button
      className={isSelected ? "category-button-selected" : "category-button"}
      onClick={() => dispatch(toggleCategory({ category }))}
    >
      {capitalizeFirstLetter(category)}
    </button>
  );
};

export default Category;
