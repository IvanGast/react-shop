import { capitalizeFirstLetter } from "../../../common/hooks";
import { addToCart } from "../../../store/reducers/cart";
import { useAppDispatch } from "../../../store/store";
import Rating from "./rating";

const Product = ({ product }: ProductProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className="product-card">
      <span className="product-category">
        {capitalizeFirstLetter(product.category)}
      </span>
      <div className="product-image-container">
        <img alt="" className="product-image" src={product.image} />
      </div>
      <div className="product-title">{product.title}</div>
      <Rating rating={product.rating} />
      <div>
        <div className="product-price">${product.price}</div>
        <button
          className="product-add-button"
          onClick={() => dispatch(addToCart({ product }))}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
