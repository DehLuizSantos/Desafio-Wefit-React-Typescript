import React from 'react'
import IconButton from '../IconButton'
import * as S from './styles'
import less from '../../../assets/icons/less.svg'
import pluss from '../../../assets/icons/pluss.svg'
import trash from '../../../assets/icons/trash.svg'


import TextArea from '../TextArea'
import { H3SansPrice, SpanSansSmall } from '../../../styles/Fonts/fonts'

type ItemsPriceControlerProps = {
  itemPrice: number
}

const ItemsPriceControler: React.FC<ItemsPriceControlerProps> = ({itemPrice}) => {
  function onLess(){
    console.log('menos')
  }

  function onPlus(){
    console.log('mais')
  }
  return(
    <S.ItemsPriceControlerContainer>    
        <IconButton icon={less} iconAlt='less'onClickIcon={onLess} />
        <div className="text-area-wrapper">
          <TextArea value={1} />
        </div>
        <IconButton icon={pluss} iconAlt='pluss' onClickIcon={onPlus}/>

        <div className="subtotal-area">
          <SpanSansSmall className='hide-on-tablet'>SUBTOTAL</SpanSansSmall>
          <H3SansPrice> R$ {itemPrice}</H3SansPrice>
        </div>
        <IconButton icon={trash} iconAlt='trash' className='hide-on-mobile icon-trash' />
    </S.ItemsPriceControlerContainer>
  )
}

export default ItemsPriceControler