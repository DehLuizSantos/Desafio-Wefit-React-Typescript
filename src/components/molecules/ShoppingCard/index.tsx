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
  added,
  onClickAdd
}) => {
  const [colorBtn, setColorBtn] = React.useState(added ? 'secondary' : 'primary');

  const addToCart = React.useCallback(
    (id: number) => {
      setColorBtn('secondary');
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
        hasAdd={added}
        onClickBtn={() => addToCart(id)}
        disabled={added}
      >
        ADICIONADO AO CARRINHO
      </Button>
    </S.ShoppingCardContainer>
  );
};

export default ShoppingCard;
