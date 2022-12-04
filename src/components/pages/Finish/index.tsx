import React from 'react'
import { H2SansInfos } from '../../../styles/Fonts/fonts'
import Button from '../../atomos/Button'
import * as S from './styles'
import finishBuy from '../../../assets/icons/finish-buy.svg'
import { Link } from 'react-router-dom'

const Finish: React.FC = () => {
  return(
    <S.FinishContainer>
      <H2SansInfos>Compra realizada com sucesso!</H2SansInfos>
      <img src={finishBuy} alt="good buy" />
      <div className="button-finish">
      <Link to='/'>
        <Button colorStyle='primary'>Voltar</Button>
      </Link>
      </div>
    </S.FinishContainer>
  )
}

export default Finish