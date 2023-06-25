import React from 'react';
import { SpanSansSmall } from '../../../styles/Fonts/fonts';
import ItemsAddedToCart from '../../molecules/ItemsAddedToCart';
import FinishOrder from '../../atomos/FinishOrder';
import * as S from './styles';
import { ProductProps } from '../../../interfaces/products.interface';
import CartWithoutProduct from '../CartWithoutProduct';

type CartItemsUserProps = {
  cardProduts: ProductProps[];
};

const CartItemsUser = ({ cardProduts }: CartItemsUserProps) => {
  const [totalValue, setTotalValue] = React.useState<number>(0);

  function getTotal(total: any, item: any) {
    return total + item.price * item.quantity;
  }

  const totalValueSum = React.useCallback(() => {
    const result = cardProduts.reduce(getTotal, 0);
    setTotalValue(result);
  }, [cardProduts]);

  React.useEffect(() => {
    totalValueSum();
  }, [totalValueSum]);
  return (
    <>
      {cardProduts.length === 0 ? (
        <CartWithoutProduct />
      ) : (
        <S.CartItemsUserContainer>
          <div className="items-header hide-on-mobile">
            <SpanSansSmall>PRODUTO</SpanSansSmall>
            <SpanSansSmall className="spancing">QTD</SpanSansSmall>
            <SpanSansSmall>SUBTOTAL</SpanSansSmall>
          </div>
          {cardProduts.map((product: ProductProps) => (
            <ItemsAddedToCart
              id={product.id}
              image={product.image}
              price={product.price}
              title={product.title}
              key={product.id}
              quantity={product.quantity}
            />
          ))}
          <FinishOrder totalValue={totalValue} />
        </S.CartItemsUserContainer>
      )}
    </>
  );
};

export default CartItemsUser;
