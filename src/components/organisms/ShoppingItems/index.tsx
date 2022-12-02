import React from 'react'
import ShoppingCard from '../../modules/ShoppingCard'
import * as S from './styles'

const ShoopingItems: React.FC = () => {
  return(
      <S.ShoopingItemsContainer>
        <ShoppingCard />
      </S.ShoopingItemsContainer>
  )
}

export default ShoopingItems