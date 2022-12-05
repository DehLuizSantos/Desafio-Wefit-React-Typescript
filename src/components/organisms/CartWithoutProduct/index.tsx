import React from 'react'
import * as S from './styles'
import WomanUpdateCart from '../../../assets/icons/womanAttCart.svg'
import Button from '../../atomos/Button'
import { H2SansInfos } from '../../../styles/Fonts/fonts'
import { Link } from 'react-router-dom'

const CartWithoutProduct: React.FC = () => {
  return(
    <S.CartWithoutProductContainer>
        <H2SansInfos>Parece que não há nada por aqui :(</H2SansInfos>
        <img src={WomanUpdateCart} alt="woman update cart" />
        <div className="divider" />
        <div className="button-go-back">
        <Link to='/'>
          <Button hasIcon={false} colorStyle='primary'>Voltar</Button>
        </Link>
        </div>
    </S.CartWithoutProductContainer>
    )
}

export default CartWithoutProduct