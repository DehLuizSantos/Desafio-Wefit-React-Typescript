import React from 'react'
import CartWithProduct from '../../organisms/CartWithProduct'
// import CartWithoutProduct from '../../organisms/CartWithoutProduct'
import * as S from './styles'

const Cart: React.FC = () => {
    return(
        <S.ContainerCart>
           {/* <CartWithoutProduct /> */}
           <CartWithProduct />
        </S.ContainerCart>
    )
}

export default Cart