import React from "react";
import * as S from './styles'
import ShoppingBasket from '../../../assets/icons/shoppingBasket.svg'
import { PSansSmall, SpanSansSmall} from "../../../styles/Fonts/fonts";
import IconButton from "../IconButton";
import { Link } from 'react-router-dom'

type headerItemsProps = {
    items?: number
}

const HeaderItems: React.FC<headerItemsProps> = ({items}) => {
 

 
  return(
    <S.HeaderItemsWrapper>
      <S.BasketInformations>
        <PSansSmall className="hide-on-mobile">Meu Carrinho</PSansSmall>
        <SpanSansSmall>{items} itens</SpanSansSmall>     
      </S.BasketInformations>
      <Link to='/cart'>
        <IconButton icon={ShoppingBasket} iconAlt="Shopping Basket" />
      </Link>
    </S.HeaderItemsWrapper>
    )
}

export default HeaderItems