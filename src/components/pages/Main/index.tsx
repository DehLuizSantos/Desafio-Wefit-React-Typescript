import React, { useContext } from 'react';
import ShoppingItems from '../../organisms/ShoppingItems';
import Loader from '../../atomos/Loader';
import * as S from './styles';
import { ProductsContext } from '../../../context/products.context';

const Main: React.FC = () => {
  const { products, loading } = useContext(ProductsContext);

  return (
    <S.ContainerMain>
      {loading ? <Loader /> : <ShoppingItems products={products} />}
    </S.ContainerMain>
  );
};

export default Main;
