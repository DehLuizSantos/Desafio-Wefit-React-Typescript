import React from 'react'
import { H2SansInfos } from '../../../styles/Fonts/fonts'
import Button from '../../atomos/Button'
import * as S from './styles'
import finishBuy from '../../../assets/icons/finish-buy.svg'

const Finish: React.FC = () => {
  return(
    <S.FinishContainer>
      <H2SansInfos>Compra realizada com sucesso!</H2SansInfos>
      <img src={finishBuy} alt="good buy" />
      <div className="button-finish">
      <a href='/'>
        <Button colorStyle='primary'>Voltar</Button>
      </a>
      </div>
    </S.FinishContainer>
  )
}

export default Finish