import React from 'react'
import ShoppingItems from '../../organisms/ShoppingItems'
import Loader from '../../atomos/Loader'
import * as S from './styles'
import ProductService from '../../../services/products.service'
import { ProductProps } from '../../../interfaces/products.interface'

const productService = new ProductService()

const Main: React.FC = () => {
  const [products, setProducts] = React.useState<ProductProps[]>()
  const [loading, setLoading] = React.useState(false)

  const  getProducts = React.useCallback(async() => {
    try {
      setLoading(true)
      const result = await productService.getProducts()
      setProducts(result.data)
      setLoading(false)
      
    } catch(error){
      console.error(error)
    }
  },[])

  
  React.useEffect(()=>{
      getProducts()
    
  },[getProducts])

  return(
    <S.ContainerMain>
      {loading ? (
         <Loader />
      ) : (
          <ShoppingItems products={products} />             
      )}
    </S.ContainerMain>
    )
}

export default Main