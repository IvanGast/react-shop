import { useEffect } from "react";
import "./App.css";
import { fetchProducts } from "./store/reducers/product";
import { useAppDispatch } from "./store/store";
import Header from "./components/Header/header";
import Categories from "./components/Categories/categories";
import ProductsGrid from "./components/ProductsGrid/products_grid";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  });

  return (
    <div className="App">
      <Header />
      <p />
      <Categories />
      <p />
      <ProductsGrid />
    </div>
  );
}

export default App;
