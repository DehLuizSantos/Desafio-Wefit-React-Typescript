import React from 'react'
import { SpanSansLarge, SpanSansSmall } from '../../../styles/Fonts/fonts'
import Button from '../Button';
import * as S from './styles'

type finishOrderProps = {
  totalPrice: number;
}

const FinishOrder: React.FC<finishOrderProps> = ({totalPrice}) => {
  return(
    <S.FinishOrderContainer>
      <div className="divider" />
      <div className="total">
        <SpanSansSmall>TOTAL</SpanSansSmall>
        <SpanSansLarge>R${totalPrice}</SpanSansLarge>
      </div>
      <Button colorStyle='primary' hasIcon={false}>FINALIZAR PEDIDO</Button>
    </S.FinishOrderContainer>
  )
}

export default FinishOrder