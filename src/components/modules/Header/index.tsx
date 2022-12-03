import React from 'react'
import { H1SansLogo } from '../../../styles/Fonts/fonts'
import HeaderItems from '../../atomos/HeaderItems'
import * as S from './styles'


const Header: React.FC = () => {
  return(
    <S.ContainerHeader>
        <a href='/'>
            <H1SansLogo>WeMovies</H1SansLogo>
        </a>
        <HeaderItems items={4}/>
    </S.ContainerHeader>
    )
}

export default Header