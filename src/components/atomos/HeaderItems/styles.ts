import styled, { css } from "styled-components";

export const HeaderItemsWrapper = styled.div`
  ${() => css`
    display: flex;
    align-items:center;
    gap: 10px;
  `}

`

export const BasketInformations = styled.div`
  ${({theme}) => css`
    text-align:end;
    font-weight: 600;

    span{
      font-size: ${theme.fonts.small};
      color: ${theme.colors.gray};
    }

    p{
      font-size: ${theme.fonts.medium};
      color:${theme.colors.white};
    }
    
  `}

`