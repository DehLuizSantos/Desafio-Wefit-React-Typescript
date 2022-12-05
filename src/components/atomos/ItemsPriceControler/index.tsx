import React, { useContext } from 'react'
import IconButton from '../IconButton'
import * as S from './styles'
import less from '../../../assets/icons/less.svg'
import pluss from '../../../assets/icons/pluss.svg'
import trash from '../../../assets/icons/trash.svg'
import TextArea from '../TextArea'
import { H3SansPrice, SpanSansSmall } from '../../../styles/Fonts/fonts'
import { ProductProps } from '../../../interfaces/products.interface'
import { priceMasked } from '../../../utils/masked'
import CartItens from '../../../services/cartItens.service'
import { CartItensContext } from '../../../context/cartItens.context'

const cardItens = new CartItens()



const ItemsPriceControler: React.FC<ProductProps> = ({price, id}) => { 
  const { setCardProducts } = useContext(CartItensContext)

  const [quantity, setQuantity] = React.useState(1)
  const [totalValue, setTotalValue] = React.useState(price)

  const onLess = React.useCallback(() => {  
    if(quantity === 0){     
      return
    } 
    setQuantity((prev) => prev - 1)
    setTotalValue(price * quantity)
    
  }, [quantity, price]) 

  const onPlus = React.useCallback(() => {    
    setQuantity((prev) => prev + 1)
    setTotalValue(price * quantity)
   
  },[quantity, price])

  const onChangeValue = React.useCallback((value: React.ChangeEvent<HTMLInputElement>) => {  
    if(quantity === 0){     
      return
    }  
    if(null !== value){
      setQuantity(Number(value.target.value))
      setTotalValue(price * quantity)      
    }   
  },[price, quantity])

  
  const onDelete = React.useCallback(async(id: number) => {
    try{
      await cardItens.deleteCartItem(id)
      const result = await cardItens.getCartItem()
      setCardProducts(result.data)
    }catch(error){
      console.error(error)
    }
  },[setCardProducts])

  React.useEffect(() => {
    onLess()
    onPlus()    
  },[onLess,onPlus])

  return(
    <S.ItemsPriceControlerContainer>    
        <IconButton icon={less} iconAlt='less'onClickIcon={onLess} />
        <div className="text-area-wrapper">
          <TextArea value={quantity} onChangeValue={(value) => onChangeValue(value)} />
        </div>
        <IconButton icon={pluss} iconAlt='pluss' onClickIcon={onPlus}/>

        <div className="subtotal-area">
          <SpanSansSmall className='hide-on-tablet'>SUBTOTAL</SpanSansSmall>
          <H3SansPrice>{priceMasked(totalValue)}</H3SansPrice>
        </div>
        <IconButton onClickIcon={() => onDelete(id)} icon={trash} iconAlt='trash' className='hide-on-mobile icon-trash' />
    </S.ItemsPriceControlerContainer>
  )
}

export default ItemsPriceControler