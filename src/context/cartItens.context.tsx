import React, { Dispatch } from 'react';
import { createContext } from 'react';

import { ProductProps } from '../interfaces/products.interface';
import CartItens from '../services/cartItens.service';

const cardItens = new CartItens();

type CartItensProviderProps = {
  children?: JSX.Element;
};
interface CartItensProps {
  cardProduts: ProductProps[];
  setCardProducts: Dispatch<React.SetStateAction<ProductProps[] | any>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CartItensContext = createContext({} as CartItensProps);

const CartItenProvider = ({ children }: CartItensProviderProps) => {
  const [cardProduts, setCardProducts] = React.useState<ProductProps[]>([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const getCartItens = async () => {
      try {
        setLoading(true);
        const result = await cardItens.getCartItem();
        setCardProducts(result.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    getCartItens();
  }, [setCardProducts]);
  return (
    <CartItensContext.Provider
      value={{
        cardProduts,
        setCardProducts,
        setLoading,
        loading
      }}
    >
      {children}
    </CartItensContext.Provider>
  );
};

export default CartItenProvider;
