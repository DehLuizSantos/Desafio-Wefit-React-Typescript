import React from 'react'
import { itemsAddToCart } from '../../../mock/mock'
import { SpanSansSmall } from '../../../styles/Fonts/fonts'
import ItemsAddedToCart from '../../molecules/ItemsAddedToCart'
import FinishOrder from '../../atomos/FinishOrder'
import * as S from './styles'

const CartWithProduct: React.FC = () => {
  return(
    <S.CartWithProductContainer>
      <div className="items-header hide-on-mobile">
        <SpanSansSmall>PRODUTO</SpanSansSmall>
        <SpanSansSmall className='spancing'>QTD</SpanSansSmall>
        <SpanSansSmall>SUBTOTAL</SpanSansSmall>        
      </div>
      {itemsAddToCart.map((item, index) => (
        <ItemsAddedToCart itemImg={item.itemImg} itemName={item.itemName} itemPrice={item.itemPrice} key={index} />
      ))}
      <FinishOrder totalPrice={29.90} />
    </S.CartWithProductContainer>
  )
}

export default CartWithProduct