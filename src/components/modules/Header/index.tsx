import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartItensContext } from '../../../context/cartItens.context';
import { H1SansLogo } from '../../../styles/Fonts/fonts';
import HeaderItems from '../../atomos/HeaderItems';
import * as S from './styles';

const Header: React.FC = () => {
  const { cardProduts } = useContext(CartItensContext);
  return (
    <S.ContainerHeader>
      <Link to="/">
        <H1SansLogo>WeMovies</H1SansLogo>
      </Link>

      <HeaderItems items={cardProduts ? cardProduts.length : 0} />
    </S.ContainerHeader>
  );
};

export default Header;
