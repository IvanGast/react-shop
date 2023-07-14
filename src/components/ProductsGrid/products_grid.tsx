import { useAppSelector } from "../../store/store";
import Product from "./Product/product";
import ProductSkeleton from "./product_skeleton";

const ProductsGrid = () => {
  const products = useAppSelector((state) => state.product.filteredProducts);
  const isLoading = useAppSelector((state) => state.product.isLoading);
  const hasError = useAppSelector((state) => state.product.hasError);

  return (
    <div className="products-grid">
      {isLoading && <ProductSkeleton />}
      {isLoading && <ProductSkeleton />}
      {isLoading && <ProductSkeleton />}
      {isLoading && <ProductSkeleton />}
      {isLoading && <ProductSkeleton />}
      {isLoading && <ProductSkeleton />}
      {isLoading && <ProductSkeleton />}
      {isLoading && <ProductSkeleton />}
      {!hasError && !isLoading ? (
        products.map((product, ix) => <Product product={product} key={ix} />)
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default ProductsGrid;
