import React, { useContext } from 'react';
import { CartItensContext } from '../../../context/cartItens.context';
import * as S from './styles';
import Loader from '../../atomos/Loader';
import CartItemsUser from '../../organisms/CartWithProduct';

const Cart: React.FC = () => {
  const { cardProduts, loading } = useContext(CartItensContext);
  return (
    <S.ContainerCart>
      {loading ? <Loader /> : <CartItemsUser cardProduts={cardProduts} />}
    </S.ContainerCart>
  );
};

export default Cart;
