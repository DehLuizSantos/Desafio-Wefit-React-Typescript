import React from 'react'
import { H1SansLogo } from '../../../styles/Fonts/fonts'
import HeaderItems from '../../atomos/HeaderItems'
import * as S from './styles'


const Header: React.FC = () => {
    return(
        <S.ContainerHeader>
            <H1SansLogo>WeMovies</H1SansLogo>
            <HeaderItems items={4}/>
        </S.ContainerHeader>
    )
}

export default Header