import styled, { css } from "styled-components";

type buttonProps = {
  colorStyle: 'primary' | 'secondary'
}


export const ButtonContainer = styled.button<buttonProps>`
  ${({colorStyle, theme}) => css`
    align-items:center;
    background-color: ${colorStyle === 'primary' ? theme.colors.blue[500] : theme.colors.green};
    border-radius: 4px;
    color: ${theme.colors.white};
    display: flex;
    font-size: ${theme.fonts.small}; 
    font-weight: 700;
    gap: 12px;
    height: 40px;
    justify-content:center;
    width:100%;
  
  `}
`

export const ShoppingCart = styled.div`
  ${({theme}) => css`
    display: flex;
    gap: 5px;
    color: ${theme.colors.white};
  
  `}
`