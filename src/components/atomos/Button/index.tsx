import React, { ButtonHTMLAttributes } from "react";
import * as S from './styles'
import shoppingCart from '../../../assets/icons/shoppingCart.svg'

type buttonProps = {
  colorStyle: 'primary' | 'secondary'
  hasIcon?: boolean
  hasAdd?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<buttonProps> = ({hasIcon, hasAdd, colorStyle='primary', ...props}) => {
  return(
      <S.ButtonContainer colorStyle={colorStyle}>
        {hasIcon && (
          <S.ShoppingCart>
            <img src={shoppingCart} alt="Shopping cart" />
            <span>{hasAdd ? 1 : 0}</span>
          </S.ShoppingCart>
        )}
       <span>{props.children}</span>
      </S.ButtonContainer>
  )
}

export default Button