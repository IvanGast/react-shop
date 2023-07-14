import { useAppSelector } from "../../store/store";
import Category from "./category";
import CategorySkeleton from "./category_skeleton";

const Categories = () => {
  const categories = useAppSelector((state) => state.product.categories);
  const isLoading = useAppSelector((state) => state.product.isLoading);
  const hasError = useAppSelector((state) => state.product.hasError);

  const selectedCategories = useAppSelector(
    (state) => state.product.selectedCategories
  );

  return (
    <div className="categories-block">
      {isLoading && <CategorySkeleton />}
      {!isLoading &&
        !hasError &&
        categories.map((category, ix) => (
          <Category
            category={category}
            isSelected={selectedCategories.includes(category)}
            key={ix}
          />
        ))}
    </div>
  );
};

export default Categories;
