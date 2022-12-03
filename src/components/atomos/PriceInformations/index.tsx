import React from 'react'
import * as S from './styles'
import trash from '../../../assets/icons/trash.svg'
import { H3SansPrice, H4SansItem } from '../../../styles/Fonts/fonts'
import IconButton from '../IconButton'

type PriceInformationProps = {
  itemName: string
  itemPrice: number
}


const PriceInformations: React.FC<PriceInformationProps> = ({itemName, itemPrice}) => {
  return(
    <S.PriceInformationsContainer>
      <H4SansItem>{itemName}</H4SansItem>
      <H3SansPrice>R$ {itemPrice}</H3SansPrice>
      <IconButton className='hide-on-tablet' icon={trash} iconAlt={'trash'} />
    </S.PriceInformationsContainer>
    )
}

export default PriceInformations