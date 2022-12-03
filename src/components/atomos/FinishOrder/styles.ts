import styled, { css } from "styled-components";

export const FinishOrderContainer = styled.div`
  ${({theme}) => css`   
    position:sticky;
    top: 100%;
    
    ${theme.responsive.tablet(css`
      position: inherit;
      margin-top: 21px;
      
    `)}

    .divider-finish{
      height:1px;
      background-color: ${theme.colors.gray[500]};
    }
    .finish-order{
      ${theme.responsive.tablet(css`
        display:flex;
        flex-direction: row-reverse;
        align-items:center;
      `)}

      .total{
        text-align:end;
        margin: 21px 0;
  
        > span {
          margin-right: 16px;
        }
      }
  
      .button-finish{
        width: 100%;
  
        ${theme.responsive.tablet(css`
          width: 235px;
          margin-right: auto;
        `)}
      }
    }
  `}
`