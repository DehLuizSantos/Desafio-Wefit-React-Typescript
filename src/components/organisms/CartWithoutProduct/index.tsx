import React from 'react'
import * as S from './styles'
import WomanUpdateCart from '../../../assets/icons/womanAttCart.svg'
import Button from '../../atomos/Button'

const CartWithoutProduct: React.FC = () => {
  return(
    <S.CartWithoutProductContainer>
        <h2>Parece que não há nada por aqui :(</h2>
        <img src={WomanUpdateCart} alt="woman update cart" />
        <div className="divider" />
        <div className="button-go-back">
          <Button hasIcon={false} colorStyle='primary'>Voltar</Button>
        </div>
    </S.CartWithoutProductContainer>
    )
}

export default CartWithoutProduct