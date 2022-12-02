import React from "react";
import * as S from './styles'
import shoppingCart from '../../../assets/icons/shoppingCart.svg'

type buttonProps = {
  colorStyle: 'primary' | 'secondary'
  hasIcon: boolean
  hasAdd: boolean
}

const Button: React.FC<buttonProps> = ({hasIcon, hasAdd}) => {
  return(
      <S.ButtonContainer>
        {hasIcon && (
          <S.ShoppingCart>
            <img src={shoppingCart} alt="Shopping cart" />
            <span>{hasAdd ? 1 : 0}</span>
          </S.ShoppingCart>
        )}
      </S.ButtonContainer>
  )
}

export default Button