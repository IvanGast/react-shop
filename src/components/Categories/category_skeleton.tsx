import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CategorySkeleton = () => {
  return (
    <div>
      <Skeleton
        className="category-skeleton"
        inline={true}
        height={"22px"}
        width={"100px"}
      />
      <Skeleton
        className="category-skeleton"
        inline={true}
        height={"22px"}
        width={"100px"}
      />
      <Skeleton
        className="category-skeleton"
        inline={true}
        height={"22px"}
        width={"100px"}
      />
      <Skeleton
        className="category-skeleton"
        inline={true}
        height={"22px"}
        width={"100px"}
      />
    </div>
  );
};
export default CategorySkeleton;
