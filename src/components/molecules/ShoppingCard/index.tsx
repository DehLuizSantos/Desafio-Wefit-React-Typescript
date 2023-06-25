import React from 'react';
import { ProductProps } from '../../../interfaces/products.interface';
import Button from '../../atomos/Button';
import * as S from './styles';
import { priceMasked } from '../../../utils/masked';

type ShoopingCardProps = {
  onClickAdd: (id: number) => void;
};

export const ShoppingCard: React.FC<ProductProps & ShoopingCardProps> = ({
  id,
  image,
  price,
  title,
  onClickAdd
}) => {
  const [numberBtn, setNumberBtn] = React.useState(0);
  const [colorBtn, setColorBtn] = React.useState('primary');

  const addToCart = React.useCallback(
    (id: number) => {
      setColorBtn('secondary');
      setNumberBtn(1);
      onClickAdd(id);
    },
    [onClickAdd]
  );

  return (
    <S.ShoppingCardContainer>
      <img className="product-image" src={image} alt={title} />
      <S.ShoppingInfos>
        <h3>{title}</h3>
        <p>{priceMasked(price)}</p>
      </S.ShoppingInfos>
      <Button
        colorStyle={colorBtn}
        hasIcon
        hasAdd={numberBtn === 1 ? true : false}
        onClickBtn={() => addToCart(id)}
      >
        ADICIONAR AO CARRINHO
      </Button>
    </S.ShoppingCardContainer>
  );
};

export default ShoppingCard;
