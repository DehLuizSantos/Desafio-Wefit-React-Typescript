import React from 'react'
import { Link } from 'react-router-dom'
import { H1SansLogo } from '../../../styles/Fonts/fonts'
import HeaderItems from '../../atomos/HeaderItems'
import * as S from './styles'


const Header: React.FC = () => {
  return(
    <S.ContainerHeader>
        <Link to='/'>
            <H1SansLogo>WeMovies</H1SansLogo>
        </Link>
        <HeaderItems items={4}/>
    </S.ContainerHeader>
    )
}

export default Header