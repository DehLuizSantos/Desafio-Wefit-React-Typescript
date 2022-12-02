import React from 'react'
import ShoppingCard from '../../modules/ShoppingCard'
import * as S from './styles'
import { mocks } from '../../../mock/mock'

const ShoopingItems: React.FC = () => {
 
  return(
      <S.ShoopingItemsContainer>
      {mocks.map((card, index) =>(
        <ShoppingCard cardImg={card.cardImg} cardName={card.cardName} cardValue={card.cardValue} key={index} />
      ))}

      </S.ShoopingItemsContainer>
  )
}

export default ShoopingItems