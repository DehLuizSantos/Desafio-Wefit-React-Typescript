import React, { useContext } from 'react';
import * as S from './styles';
import trash from '../../../assets/icons/trash.svg';
import { H3SansPrice, H4SansItem } from '../../../styles/Fonts/fonts';
import IconButton from '../IconButton';
import { ProductProps } from '../../../interfaces/products.interface';
import { priceMasked } from '../../../utils/masked';
import CartItens from '../../../services/cartItens.service';
import { CartItensContext } from '../../../context/cartItens.context';
import { ProductsContext } from '../../../context/products.context';
import ProductService from '../../../services/products.service';
import ModalDelete from '../ModalDelete';

const cardItens = new CartItens();
const productsService = new ProductService();

const PriceInformations: React.FC<ProductProps> = ({ title, price, id }) => {
  const { setCardProducts, setLoading } = useContext(CartItensContext);
  const [openModalDelete, setOpenModalDelete] = React.useState(false);
  const { products, setProducts } = useContext(ProductsContext);

  const handleDelete = React.useCallback(
    async (id: number) => {
      try {
        setLoading(true);
        await cardItens.deleteCartItem(id);
        const productDeleted = products.filter((product) => product.id === id);
        await productsService.putAddCard(id, {
          ...productDeleted[0],
          added: false
        });
        const { data: productsAtt } = await productsService.getProducts();
        setProducts(productsAtt);
        const result = await cardItens.getCartItem();

        setCardProducts(result.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    },
    [setCardProducts, products, setProducts, setLoading]
  );

  return (
    <S.PriceInformationsContainer>
      <H4SansItem>{title}</H4SansItem>
      <H3SansPrice>{priceMasked(price)}</H3SansPrice>
      <IconButton
        onClickIcon={() => setOpenModalDelete(true)}
        className="hide-on-tablet"
        icon={trash}
        iconAlt={'trash'}
      />
      <ModalDelete
        onConfirm={() => handleDelete(id)}
        openModal={openModalDelete}
        setOpenModal={setOpenModalDelete}
        title={``}
      >
        Tem certeza que deseja deletar o produto {title} de seu carrinho?
      </ModalDelete>
    </S.PriceInformationsContainer>
  );
};

export default PriceInformations;
