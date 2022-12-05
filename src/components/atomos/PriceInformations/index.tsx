import React, { useContext } from 'react'
import * as S from './styles'
import trash from '../../../assets/icons/trash.svg'
import { H3SansPrice, H4SansItem } from '../../../styles/Fonts/fonts'
import IconButton from '../IconButton'
import { ProductProps } from '../../../interfaces/products.interface'
import { priceMasked } from '../../../utils/masked'
import CartItens from '../../../services/cartItens.service'
import { CartItensContext } from '../../../context/cartItens.context'

const cardItens = new CartItens()

const PriceInformations: React.FC<ProductProps> = ({title, price, id}) => {
  const { setCardProducts } = useContext(CartItensContext)

  const onDelete = React.useCallback(async(id: number) => {
    try{
      await cardItens.deleteCartItem(id)
      const result = await cardItens.getCartItem() 
      setCardProducts(result.data)
    }catch(error){
      console.error(error)
    }
  },[setCardProducts])

  return(
    <S.PriceInformationsContainer>
      <H4SansItem>{title}</H4SansItem>
      <H3SansPrice>{priceMasked(price)}</H3SansPrice>
      <IconButton onClickIcon={() => onDelete(id)} className='hide-on-tablet' icon={trash} iconAlt={'trash'} />
    </S.PriceInformationsContainer>
    )
}

export default PriceInformations