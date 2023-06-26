import React, { useCallback, useContext } from 'react';
import ShoppingItems from '../../organisms/ShoppingItems';
import Loader from '../../atomos/Loader';
import * as S from './styles';
import { ProductsContext } from '../../../context/products.context';
import SearchInput from '../../atomos/SearchInput';
import { removeAccent } from '../../../utils/validates';
import { ProductProps } from '../../../interfaces/products.interface';

const paramSearch = 'title';

const Main: React.FC = () => {
  const { products, setProducts, loading } = useContext(ProductsContext);
  const [searchValue, setSearchValue] = React.useState('');

  const [productsFitered, setProductsFiltered] = React.useState<ProductProps[]>(products);

  const handleSearch = useCallback(() => {
    const searchToLowerCase = searchValue.toLowerCase();

    const rowsWithFilter = products
      ? products?.filter((row) => {
          return removeAccent(String(row[paramSearch]).toLowerCase()).includes(
            removeAccent(searchToLowerCase)
          );
        })
      : [];
    if (searchValue.length === 0) {
      setProductsFiltered(products);
    } else {
      setProductsFiltered(rowsWithFilter);
    }
  }, [searchValue, products]);

  return (
    <Loader loading={loading}>
      <S.ContainerMain>
        <SearchInput
          onClickSearch={() => handleSearch()}
          placeholder="Buscar filme pelo nome"
          setSearchValue={setSearchValue}
          searchValue={searchValue}
        />
        <ShoppingItems
          setProducts={setProducts}
          products={productsFitered.length === 0 ? products : productsFitered}
        />
      </S.ContainerMain>
    </Loader>
  );
};

export default Main;
