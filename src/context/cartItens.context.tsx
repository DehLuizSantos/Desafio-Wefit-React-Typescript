import React, { Dispatch } from 'react';
import { createContext } from 'react'

import { ProductProps } from '../interfaces/products.interface'
import CartItens from '../services/cartItens.service'


const cardItens = new CartItens()

type CartItensProviderProps = {
  children?: JSX.Element
}
interface CartItensProps {
  cardProduts: ProductProps[];
  setCardProducts: Dispatch<React.SetStateAction<ProductProps[] | any>>
}

export const CartItensContext = createContext({} as CartItensProps)

const CartItenProvider = ({children}: CartItensProviderProps) =>{
  const [cardProduts, setCardProducts] = React.useState<ProductProps[]>([])

  const getCartItens = React.useCallback(async() => {
    try{      
      const result = await cardItens.getCartItem()
      setCardProducts(result.data)
    }catch(error){
      console.error(error)
    }
  },[])

  React.useEffect(() => {  
    getCartItens()     
  },[getCartItens,setCardProducts])
  return (
    <CartItensContext.Provider value={{
      cardProduts,       
      setCardProducts
    }}>
      {children}
    </CartItensContext.Provider>
  )
}

export default CartItenProvider