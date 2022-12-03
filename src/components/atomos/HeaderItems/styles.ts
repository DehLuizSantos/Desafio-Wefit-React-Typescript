import styled, { css } from "styled-components";

export const HeaderItemsWrapper = styled.div`
  ${() => css`
    display: flex;
    align-items:center;
    gap: 10px;
  `}

`

export const BasketInformations = styled.div`
  ${() => css`
    text-align:end;
    font-weight: 600;
  `}

`