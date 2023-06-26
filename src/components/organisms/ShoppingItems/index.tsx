import React, { Dispatch, useContext } from 'react';
import ShoppingCard from '../../molecules/ShoppingCard';
import * as S from './styles';
import { ProductProps } from '../../../interfaces/products.interface';
import CartItens from '../../../services/cartItens.service';
import { CartItensContext } from '../../../context/cartItens.context';
import CartWithoutProduct from '../CartWithoutProduct';
import ProductService from '../../../services/products.service';

const cartItens = new CartItens();
const productsService = new ProductService();

type ShoppingItemsProps = {
  products: Array<ProductProps>;
  setProducts: Dispatch<React.SetStateAction<ProductProps[]>>;
};

const ShoopingItems: React.FC<ShoppingItemsProps> = ({ products, setProducts }) => {
  const { setCardProducts } = useContext(CartItensContext);

  const postAddToCard = React.useCallback(
    async (id: number) => {
      try {
        const cartItem = products.find((product) => product.id === id);
        if (cartItem) {
          await productsService.putAddCard(id, { ...cartItem, added: true });
          const { data } = await productsService.getProducts();
          setProducts(data);
        }
        await cartItens.postCartItem(cartItem);
        const result = await cartItens.getCartItem();
        setCardProducts(result.data);
      } catch (error) {
        console.error(error);
      }
    },
    [products, setCardProducts, setProducts]
  );

  return (
    <S.ShoopingItemsContainer>
      {products.length === 0 ? (
        <CartWithoutProduct withGoBack={false} />
      ) : (
        <>
          {products?.map((card: ProductProps) => (
            <ShoppingCard
              added={card.added}
              onClickAdd={(id) => postAddToCard(id)}
              id={card.id}
              image={card.image}
              price={card.price}
              title={card.title}
              key={card.ordem}
            />
          ))}
        </>
      )}
    </S.ShoopingItemsContainer>
  );
};

export default ShoopingItems;
