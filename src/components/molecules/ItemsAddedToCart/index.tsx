import React from 'react'
import ItemsPriceControler from '../../atomos/ItemsPriceControler'
import PriceInformations from '../../atomos/PriceInformations'
import * as S from './styles'

export type ItemsAddedToCartProps = {
  itemImg: string
  itemName: string
  itemPrice: number
}

export const ItemsAddedToCart: React.FC<ItemsAddedToCartProps> = ({itemName, itemImg, itemPrice}) =>{
  return(
    <S.ItemsAddedToCartContainer>
      <img src={itemImg} alt={itemName} />
      <div className="informations">
        <PriceInformations itemName={itemName} itemPrice={itemPrice} />
        <ItemsPriceControler itemPrice={itemPrice}/>
      </div>        
    </S.ItemsAddedToCartContainer>
  )
}

export default ItemsAddedToCart