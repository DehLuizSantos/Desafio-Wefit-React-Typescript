import React from 'react'
import Loader from '../../atomos/Loader'
import * as S from './styles'

const Main: React.FC = () => {
    return(
        <S.ContainerMain>
            <Loader />
        </S.ContainerMain>
    )
}

export default Main