import styled, {css} from "styled-components";

export const ItemsAddedToCartContainer = styled.div`
  ${({theme}) => css`
    display:flex;
    justify-content: space-evenly;
    margin-bottom: 30px;
    padding-bottom:10px;
    border-bottom: 1px solid ${theme.colors.gray[500]};
    
    ${theme.responsive.tablet(css`     
    border: none;
    display:inline-flex;
    justify-content:start;
    width: 90%;
    `)}
    
    .informations{
      ${theme.responsive.tablet(css`
        align-items:center;
        display:flex;
        justify-content: space-between;
        width: 100%;
      `)}
    }
    
    > img{
      width:64px;
    }

    .divider {
      height:1px;
      width:100%;
      background-color:${theme.colors.gray[700]};
    }
  `}
`
