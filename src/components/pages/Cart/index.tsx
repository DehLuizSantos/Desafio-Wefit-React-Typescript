import React, { useContext } from 'react';
import { CartItensContext } from '../../../context/cartItens.context';
import * as S from './styles';
import Loader from '../../atomos/Loader';
import CartItemsUser from '../../organisms/CartWithProduct';

const Cart: React.FC = () => {
  const { cardProduts, loading } = useContext(CartItensContext);
  return (
    <Loader loading={loading}>
      <S.ContainerCart>
        <CartItemsUser cardProduts={cardProduts} />
      </S.ContainerCart>
    </Loader>
  );
};

export default Cart;
