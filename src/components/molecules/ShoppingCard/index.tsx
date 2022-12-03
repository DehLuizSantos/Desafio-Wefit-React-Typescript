import React from 'react'
import Button from '../../atomos/Button'
import * as S from './styles'

export type shoppingCardProps = {
  cardImg: string
  cardName: string
  cardValue: number
}

export const ShoppingCard: React.FC<shoppingCardProps> = ({cardName, cardImg, cardValue}) =>{
  return(
      <S.ShoppingCardContainer>
        <img src={cardImg} alt={cardName}/>
        <S.ShoppingInfos>
          <h3>{cardName}</h3>
          <p>R$ {cardValue}</p>
        </S.ShoppingInfos>
        <Button colorStyle='primary' hasIcon>
          ADICIONAR AO CARRINHO 
        </Button>
      </S.ShoppingCardContainer>
  )
}

export default ShoppingCard