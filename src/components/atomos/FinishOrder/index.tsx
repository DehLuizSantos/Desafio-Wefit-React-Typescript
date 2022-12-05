import React from 'react'
import { Link } from 'react-router-dom';
import { SpanSansLarge, SpanSansSmall } from '../../../styles/Fonts/fonts'
import { priceMasked } from '../../../utils/masked';
import Button from '../Button';
import * as S from './styles'

type finishOrderProps = {
  totalValue: number;
}

const FinishOrder: React.FC<finishOrderProps> = ({totalValue}) => {
  

  return(
    <S.FinishOrderContainer>
      <div className="divider-finish" />
      <div className="finish-order">
        <div className="total">
          <SpanSansSmall>TOTAL</SpanSansSmall>
          <SpanSansLarge>{priceMasked(totalValue)}</SpanSansLarge>
        </div>
        <Link to='/finish' className="button-finish">
          <Button colorStyle='primary' hasIcon={false}>FINALIZAR PEDIDO</Button>
        </Link>
      </div>
    </S.FinishOrderContainer>
  )
}

export default FinishOrder