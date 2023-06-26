import React, { useContext } from 'react';
import IconButton from '../IconButton';
import * as S from './styles';
import less from '../../../assets/icons/less.svg';
import pluss from '../../../assets/icons/pluss.svg';
import trash from '../../../assets/icons/trash.svg';
import TextArea from '../TextArea';
import { H3SansPrice, SpanSansSmall } from '../../../styles/Fonts/fonts';
import { ProductProps } from '../../../interfaces/products.interface';
import { priceMasked } from '../../../utils/masked';
import CartItens from '../../../services/cartItens.service';
import { CartItensContext } from '../../../context/cartItens.context';
// import { TotalValueContext } from '../../../context/totalValue.context'

const cardItens = new CartItens();

const ItemsPriceControler: React.FC<ProductProps> = ({ price, id, image, title, quantity }) => {
  const { setCardProducts } = useContext(CartItensContext);
  const onPut = React.useCallback(
    async (id: number, body: ProductProps) => {
      try {
        await cardItens.putQuantityItem(id, body);
        const result = await cardItens.getCartItem();
        setCardProducts(result.data);
      } catch (error) {
        console.error(error);
      }
    },
    [setCardProducts]
  );

  const onDelete = React.useCallback(
    async (id: number) => {
      try {
        await cardItens.deleteCartItem(id);
        const result = await cardItens.getCartItem();
        setCardProducts(result.data);
      } catch (error) {
        console.error(error);
      }
    },
    [setCardProducts]
  );

  const onLess = React.useCallback(() => {
    if (typeof quantity !== 'undefined') {
      const body: ProductProps = {
        id: id,
        image,
        price,
        title,
        quantity: quantity - 1
      };
      if (body.quantity === 0) {
        return;
      }
      onPut(id, body);
    }
  }, [quantity, price, id, image, title, onPut]);

  const onPlus = React.useCallback(() => {
    if (typeof quantity !== 'undefined') {
      const body: ProductProps = {
        id: id,
        image,
        price: price,
        title,
        quantity: quantity + 1
      };

      onPut(id, body);
    }
  }, [quantity, id, image, title, onPut, price]);

  const onChangeValue = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (typeof quantity !== 'undefined') {
        const body: ProductProps = {
          id: id,
          image,
          price: price,
          title,
          quantity: quantity + Number(e.target.value)
        };
        if (quantity === 0) {
          return;
        }
        onPut(id, body);
      }
    },
    [quantity, price, id, image, title, onPut]
  );

  return (
    <S.ItemsPriceControlerContainer>
      <IconButton icon={less} iconAlt="less" onClickIcon={onLess} />
      <div className="text-area-wrapper">
        <TextArea value={quantity || 1} onChangeValue={(value) => onChangeValue(value)} />
      </div>
      <IconButton icon={pluss} iconAlt="pluss" onClickIcon={onPlus} />

      <div className="subtotal-area">
        <SpanSansSmall className="hide-on-tablet">SUBTOTAL</SpanSansSmall>
        {quantity && <H3SansPrice>{priceMasked(price * quantity)}</H3SansPrice>}
      </div>
      <IconButton
        onClickIcon={() => onDelete(id)}
        icon={trash}
        iconAlt="trash"
        className="hide-on-mobile icon-trash"
      />
    </S.ItemsPriceControlerContainer>
  );
};

export default ItemsPriceControler;
