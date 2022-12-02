import React from "react";
import * as S from './styles'
import ShoppingBasket from '../../../assets/icons/shoppingBasket.svg'

type headerItemsProps = {
    items: number
}

const HeaderItems: React.FC<headerItemsProps> = ({items}) => {
    return(
        <S.HeaderItemsWrapper>
            <S.BasketInformations>
                <p className="hide-on-mobile">Meu Carrinho</p>
                <span>{items} itens</span>            
            </S.BasketInformations>
            <img src={ShoppingBasket} alt="Shopping Basket" />
        </S.HeaderItemsWrapper>
    )
}

export default HeaderItems