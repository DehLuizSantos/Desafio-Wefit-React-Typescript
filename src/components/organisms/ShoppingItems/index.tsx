import React, { useContext } from 'react'
import ShoppingCard from '../../molecules/ShoppingCard'
import * as S from './styles'
import { ProductProps } from '../../../interfaces/products.interface'
import CartItens from '../../../services/cartItens.service'
import { CartItensContext } from '../../../context/cartItens.context'

const cartItens = new CartItens()

type ShoppingItemsProps = {
  products?: Array<ProductProps>
}

const ShoopingItems: React.FC<ShoppingItemsProps> = ({products}) => {
  const { setCardProducts } = useContext(CartItensContext)

  const postAddToCard = React.useCallback(async (id: number) => {   
    try{
      if(typeof products !== 'undefined'){
        const cartItem = products.find((product) => product.id === id)        
        await cartItens.postCartItem(cartItem)
        const result = await cartItens.getCartItem()
        setCardProducts(result.data)
      }
      
    }catch(error){
      console.error(error)
    }
  },[products, setCardProducts]) 
  
  return(
      <S.ShoopingItemsContainer>     
      {products?.map((card: ProductProps, index) => (
        <ShoppingCard onClickAdd={(id) => postAddToCard(id)} id={card.id} image={card.image} price={card.price} title={card.title} key={index} />
      ))}
      </S.ShoopingItemsContainer>
  )
}

export default ShoopingItems