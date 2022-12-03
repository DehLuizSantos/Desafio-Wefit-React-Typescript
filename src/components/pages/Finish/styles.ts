import styled, { css } from "styled-components";

export const FinishContainer = styled.div`
  ${({theme}) => css`
    background-color: ${theme.colors.white};
    border-radius: 4px;
    padding: 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 64px;
    gap: 32px;
    text-align:center;

    .button-finish{
      width:180px;
    }
  `}

`