import styled, {css} from "styled-components";

export const ItemsPriceControlerContainer = styled.div`
  ${({theme}) => css`
    align-items: center;
    display: flex;
    gap: 11px;
    margin: 23px 0 0 16px;

    ${theme.responsive.tablet(css`
      /* margin: 15px 52px 0 158px; */
      justify-content: space-around;
    `)}

    .text-area-wrapper{
      width: 53px;
    }

    .subtotal-area{
      margin-left: auto;
      padding-left: 30px;

      ${theme.responsive.tablet(css`
        margin: 0 auto 0 52px;      
      `)}
    }

    .icon-trash{
      ${theme.responsive.tablet(css`
         margin-left: 60px;
      `)}
      ${theme.responsive.laptop(css`
          margin-left: 269px;
      `)}
    }
  `}
`