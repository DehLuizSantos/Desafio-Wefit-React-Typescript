import styled, { css } from "styled-components";

export const CartItemsUserContainer = styled.div`
  ${({theme}) => css`
    background-color: ${theme.colors.white};
    border-radius: 4px;
    padding: 16px;

    ${theme.responsive.tablet(css`
      min-height:100%;
    
    `)}

    .items-header{
      ${theme.responsive.tablet(css`   
        display: flex;
        margin-bottom: 21px;
        max-width: 80%;

        .spancing{
          margin: 0 170px 0 220px;         
        }         
      `)}
    }
  `}

`