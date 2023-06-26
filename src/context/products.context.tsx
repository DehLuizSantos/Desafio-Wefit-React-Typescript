import React, { Dispatch } from 'react';
import { createContext } from 'react';

import { ProductProps } from '../interfaces/products.interface';
import ProductService from '../services/products.service';

const productService = new ProductService();

type CartItensProviderProps = {
  children?: JSX.Element;
};
interface ProductItemsProps {
  products: ProductProps[];
  setProducts: Dispatch<React.SetStateAction<ProductProps[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ProductsContext = createContext({} as ProductItemsProps);

const ProductItemsProvider = ({ children }: CartItensProviderProps) => {
  const [products, setProducts] = React.useState<ProductProps[]>([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const result = await productService.getProducts();
        setProducts(result.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getProducts();
  }, []);
  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        setLoading,
        loading
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductItemsProvider;
