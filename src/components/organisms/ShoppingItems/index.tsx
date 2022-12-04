import React from 'react'
import ShoppingCard from '../../molecules/ShoppingCard'
import * as S from './styles'
import { ProductProps, ProductsProps } from '../../../interfaces/products.interface'
import CartItens from '../../../services/cartItens.service'

const cartItens = new CartItens()

const ShoopingItems: React.FC<ProductsProps> = ({products}) => {

  const postAddToCard = React.useCallback(async (id: number) => {
    try{
      if(typeof products !== 'undefined'){
        const cartItem = products.find((product) => product.id === id)  
        const result = await cartItens.postCartItem(cartItem)
        console.log(result)
      }
      
    }catch(error){
      console.error(error)
    }
  },[products]) 


  return(
      <S.ShoopingItemsContainer>     
      {products?.map((card: ProductProps, index) => (
        <ShoppingCard onClickAdd={(id) => postAddToCard(id)} id={card.id} image={card.image} price={card.price} title={card.title} key={index} />
      ))}
      </S.ShoopingItemsContainer>
  )
}

export default ShoopingItems