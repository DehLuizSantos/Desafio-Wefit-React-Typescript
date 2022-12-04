import React from 'react'
import ShoppingCard from '../../molecules/ShoppingCard'
import * as S from './styles'
import { ProductProps, ProductsProps } from '../../../interfaces/products.interface'

const ShoopingItems: React.FC<ProductsProps> = ({products}) => {
   
  return(
      <S.ShoopingItemsContainer>     
      {products?.map((card: ProductProps, index) => (
        <ShoppingCard id={card.id} image={card.image} price={card.price} title={card.title} key={index} />
      ))}
      </S.ShoopingItemsContainer>
  )
}

export default ShoopingItems