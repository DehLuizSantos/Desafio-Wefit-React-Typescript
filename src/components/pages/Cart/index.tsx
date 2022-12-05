import React, { useContext } from 'react'
import { CartItensContext } from '../../../context/cartItens.context'
import CartWithProduct from '../../organisms/CartWithProduct'
import CartWithoutProduct from '../../organisms/CartWithoutProduct'
import * as S from './styles'

const Cart: React.FC = () => {
  const { cardProduts } = useContext(CartItensContext)
  return(
      <S.ContainerCart>
        {cardProduts && (
          cardProduts.length === 0 ? (<CartWithoutProduct />   ) : ( <CartWithProduct />)
        )}
      </S.ContainerCart>
    )
}

export default Cart