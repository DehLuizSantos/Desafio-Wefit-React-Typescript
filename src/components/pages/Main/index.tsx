import React, { useCallback, useContext } from 'react';
import ShoppingItems from '../../organisms/ShoppingItems';
import Loader from '../../atomos/Loader';
import * as S from './styles';
import { ProductsContext } from '../../../context/products.context';
import { CartItensContext } from '../../../context/cartItens.context';
import SearchInput from '../../atomos/SearchInput';
import { removeAccent } from '../../../utils/validates';
import { ProductProps } from '../../../interfaces/products.interface';

const paramSearch = 'title';

const Main: React.FC = () => {
  const { products, setProducts, loading } = useContext(ProductsContext);
  const { cardProduts } = useContext(CartItensContext);
  const [searchValue, setSearchValue] = React.useState('');

  const productAdded = products.map((product) => {
    if (cardProduts.some((cardProduct) => cardProduct.id === product.id)) {
      product.added = true;
    }
    return product;
  });
  const [productsFitered, setProductsFiltered] = React.useState<ProductProps[]>(productAdded);

  const handleSearch = useCallback(() => {
    const searchToLowerCase = searchValue.toLowerCase();

    const rowsWithFilter = productAdded
      ? productAdded?.filter((row) => {
          return removeAccent(String(row[paramSearch]).toLowerCase()).includes(
            removeAccent(searchToLowerCase)
          );
        })
      : [];
    if (searchValue.length === 0) {
      setProductsFiltered(productAdded);
    } else {
      setProductsFiltered(rowsWithFilter);
    }
  }, [searchValue, productAdded]);

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
          products={productsFitered.length === 0 ? productAdded : productsFitered}
        />
      </S.ContainerMain>
    </Loader>
  );
};

export default Main;
