import styled, { css } from "styled-components";

export const CartWithProductContainer = styled.div`
  ${({theme}) => css`
    background-color: ${theme.colors.white};
    border-radius: 4px;
    min-height: 716px;
    padding: 16px;

    ${theme.responsive.tablet(css`
      min-height:100%;
    
    `)}

    .items-header{
      ${theme.responsive.tablet(css`   
        margin-bottom: 21px;
        .spancing{
          margin: 0 150px 0 280px;
        }     
      `)}
    }
  `}

`