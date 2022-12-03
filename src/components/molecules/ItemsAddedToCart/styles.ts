import styled, {css} from "styled-components";

export const ItemsAddedToCartContainer = styled.div`
  ${({theme}) => css`
    display:flex;
    justify-content:center;

    ${theme.responsive.tablet(css`
      display: inline-flex;
    `)}

    .informations{
      ${theme.responsive.tablet(css`
        display:flex;
        align-items:center;
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
