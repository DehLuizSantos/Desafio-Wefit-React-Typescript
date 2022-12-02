import React from 'react'
import HeaderItems from '../../atomos/HeaderItems'
import * as S from './styles'


const Header: React.FC = () => {
    return(
        <S.ContainerHeader>
            <h1>WeMovies</h1>
            <HeaderItems items={4}/>
        </S.ContainerHeader>
    )
}

export default Header