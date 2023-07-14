export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const findProductIndex = (
  product: IProduct,
  products: IProduct[]
): number => {
  const titleArray = products.map((p) => p.title);
  return titleArray.indexOf(product.title);
};
