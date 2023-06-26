import React, { ButtonHTMLAttributes } from 'react';
import * as S from './styles';
import shoppingCart from '../../../assets/icons/shoppingCart.svg';

type buttonProps = {
  colorStyle?: string;
  hasIcon?: boolean;
  hasAdd?: boolean;
  onClickBtn?: (data: any) => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<buttonProps> = ({
  hasIcon,
  hasAdd,
  onClickBtn,
  colorStyle = 'primary',
  ...props
}) => {
  return (
    <S.ButtonContainer colorStyle={colorStyle} onClick={onClickBtn} disabled={hasAdd}>
      {hasIcon && (
        <S.ShoppingCart>
          <img src={shoppingCart} alt="Shopping cart" />
          <span>{colorStyle === 'secondary' ? 1 : 0}</span>
        </S.ShoppingCart>
      )}
      <span>{props.children}</span>
    </S.ButtonContainer>
  );
};

export default Button;
