import React, { useContext } from 'react'
// import { itemsAddToCart } from '../../../mock/mock'
import { SpanSansSmall } from '../../../styles/Fonts/fonts'
import ItemsAddedToCart from '../../molecules/ItemsAddedToCart'
import FinishOrder from '../../atomos/FinishOrder'
import * as S from './styles'
import { CartItensContext } from '../../../context/cartItens.context'
import { ProductProps } from '../../../interfaces/products.interface'


const CartWithProduct: React.FC = () => {
  const { cardProduts } = useContext(CartItensContext)

  console.log(cardProduts)
  return(
    <S.CartWithProductContainer>
      <div className="items-header hide-on-mobile">
        <SpanSansSmall>PRODUTO</SpanSansSmall>
        <SpanSansSmall className='spancing'>QTD</SpanSansSmall>
        <SpanSansSmall>SUBTOTAL</SpanSansSmall>        
      </div>
      {cardProduts.map((product: ProductProps) => (
        <ItemsAddedToCart id={product.id} image={product.image} price={product.price} title={product.title} key={product.id} />
      ))}
      <FinishOrder totalPrice={29.90} />
    </S.CartWithProductContainer>
  )
}

export default CartWithProduct