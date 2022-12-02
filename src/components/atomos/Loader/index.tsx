import React from 'react'
import * as S from './styles'

const Loader: React.FC = () => {
  return(
    <S.LoaderContainer>
        <S.LoaderSpinner>
          <S.LoaderBall />  
        </S.LoaderSpinner>
    </S.LoaderContainer>
    )
}
export default Loader

