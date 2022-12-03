import styled, { css } from "styled-components";

export const FinishOrderContainer = styled.div`
  ${({theme}) => css`   
    position:sticky;
    top: 100%;
    .divider{
      height:1px;
      background-color: ${theme.colors.gray[500]};
    }

    .total{
      text-align:end;
      margin: 21px 0;

      > span {
        margin-right: 16px;
      }
    }
  `}
`