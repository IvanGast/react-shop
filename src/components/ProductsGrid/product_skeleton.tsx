import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductSkeleton = () => {
  return (
    <div className="skeleton-card">
      <Skeleton style={{ margin: "0px", padding: "0px" }} height={350} />
      <div className="skeleton-card-text-container">
        <Skeleton count={1} className="skeleton-text-title" height={16} />
        <Skeleton count={1} height={12} width={"45%"} />
        <Skeleton
          style={{ float: "left" }}
          className="skeleton-text-bottom"
          height={26}
          inline={true}
          width={"40%"}
        />
        <Skeleton
          style={{ float: "right" }}
          className="skeleton-text-bottom"
          height={26}
          inline={true}
          width={"40%"}
        />
      </div>
    </div>
  );
};
export default ProductSkeleton;
