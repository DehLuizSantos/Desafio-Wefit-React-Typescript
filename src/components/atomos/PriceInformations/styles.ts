import styled, { css } from "styled-components";

export const PriceInformationsContainer = styled.div`
  ${({theme}) => css`
    display: flex;
    gap: 16px;    
    max-height: 22px;
    margin-left: 16px;

    ${theme.responsive.tablet(css`
      display:block;
    
    `)}
  `}

`