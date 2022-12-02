import styled, { css } from "styled-components";

export const ShoppingCardContainer = styled.div`
  ${({theme}) => css`
    background-color: ${theme.colors.white};
    border-radius: 4px;
    height: 305px;
    margin: 0 auto;
    padding: 10px 11px;
    width: 343px;
  `}
`

export const ShoppingInfos = styled.div`
  ${({theme}) => css`
    font-weight: 700;
    margin-bottom: 8px;
    h3{
      color: ${theme.colors.gray[500]};
      font-size: ${theme.fonts.small};
      line-height: 16px;
      margin-top: 7px;
    }

    p{
      color: ${theme.colors.blue[700]}
      font-size:${theme.fonts.medium};
      line-height: 22px;
    }
  
  `}

`