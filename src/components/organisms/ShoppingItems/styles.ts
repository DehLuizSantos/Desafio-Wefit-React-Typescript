import styled, { css } from "styled-components";

export const ShoopingItemsContainer = styled.div`
  ${({theme}) => css`
    text-align:center;

    ${theme.responsive.tablet(css`
      display: flex;
      gap: 16px;
      flex-wrap:wrap;
      justify-content: start;
    `)}
  `}
`