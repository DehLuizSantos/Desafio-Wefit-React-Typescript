import React from "react";
import * as S from './styles'
import ShoppingBasket from '../../../assets/icons/shoppingBasket.svg'
import { PSansSmall, SpanSansSmall} from "../../../styles/Fonts/fonts";
import IconButton from "../IconButton";

type headerItemsProps = {
    items: number
}

const HeaderItems: React.FC<headerItemsProps> = ({items}) => {    
  function goToShopping(){
    console.log('shopping')
  }
  return(
    <S.HeaderItemsWrapper>
      <S.BasketInformations>
        <PSansSmall className="hide-on-mobile">Meu Carrinho</PSansSmall>
        <SpanSansSmall>{items} itens</SpanSansSmall>     
      </S.BasketInformations>
      <IconButton icon={ShoppingBasket} iconAlt="Shopping Basket" onClickIcon={goToShopping} />
    </S.HeaderItemsWrapper>
    )
}

export default HeaderItems