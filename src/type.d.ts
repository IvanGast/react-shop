interface CategoryProps {
  category: string;
  isSelected: boolean;
}

interface ProductProps {
  product: IProduct;
}

interface RatingProps {
  rating: IRating;
}

interface CartProductProps {
  product: IProduct;
  count: number;
}

interface IRating {
  rate: number;
  count: number;
}

interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: IRating;
}

type ProductState = {
  products: IProduct[];
  filteredProducts: IProduct[];
  categories: string[];
  selectedCategories: string[];
  isLoading: boolean;
  hasError: boolean;
};

type ProductAction = {
  type: string;
};

type ProductDispatchType = (args: ProductAction) => ProductAction;

interface ICart {
  products: IProduct[];
}

type CartState = {
  products: IProduct[];
  productCounts: number[];
  totalCount: number;
  totalPrice: number;
};

type CartAction = {
  type: string;
  product: IProduct;
};

type CartDispatchType = (args: CartAction) => CartAction;
