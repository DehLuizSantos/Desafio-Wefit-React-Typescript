import React from 'react';
import { ProductProps } from '../../../interfaces/products.interface';
import ItemsPriceControler from '../../atomos/ItemsPriceControler';
import PriceInformations from '../../atomos/PriceInformations';
import * as S from './styles';

export const ItemsAddedToCart: React.FC<ProductProps> = ({ title, image, price, id, quantity }) => {
  return (
    <S.ItemsAddedToCartContainer>
      <img src={image} alt={title} />
      <div className="informations">
        <PriceInformations title={title} price={price} id={id} image={image} />
        <ItemsPriceControler
          price={price}
          id={id}
          image={image}
          title={title}
          quantity={quantity}
        />
      </div>
    </S.ItemsAddedToCartContainer>
  );
};

export default ItemsAddedToCart;
