import React from 'react'
import { ProductProps } from '../../../interfaces/products.interface'
import Button from '../../atomos/Button'
import * as S from './styles'



export const ShoppingCard: React.FC<ProductProps> = ({id, image, price, title}) =>{
  return(
      <S.ShoppingCardContainer>
        <img src={image} alt={title}/>
        <S.ShoppingInfos>
          <h3>{title}</h3>
          <p>R$ {price}</p>
        </S.ShoppingInfos>
        <Button colorStyle='primary' hasIcon>
          ADICIONAR AO CARRINHO 
        </Button>
      </S.ShoppingCardContainer>
  )
}

export default ShoppingCard