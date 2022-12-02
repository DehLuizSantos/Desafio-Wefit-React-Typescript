import React from 'react'
import ShoppingItems from '../../organisms/ShoppingItems'
// import Loader from '../../atomos/Loader'
import * as S from './styles'

const Main: React.FC = () => {
    return(
        <S.ContainerMain>
            {/* <Loader /> */}
            <ShoppingItems />
        </S.ContainerMain>
    )
}

export default Main