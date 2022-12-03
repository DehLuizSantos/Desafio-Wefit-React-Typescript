import React from 'react'
import CartWithProduct from '../../organisms/CartWithProduct'
// import CartWithoutProduct from '../../organisms/CartWithoutProduct'
import * as S from './styles'

const Card: React.FC = () => {
    return(
        <S.ContainerCard>
           {/* <CartWithoutProduct /> */}
           <CartWithProduct />
        </S.ContainerCard>
    )
}

export default Card