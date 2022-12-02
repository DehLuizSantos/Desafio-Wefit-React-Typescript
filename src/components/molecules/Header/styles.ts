import styled, { css } from "styled-components";

export const ContainerHeader = styled.header`
  ${({theme})=>css`
    align-items:center;
    color: ${theme.colors.white};
    display: flex;
    justify-content:space-between;
    height: 74px;

    h1{
      font-size: ${theme.fonts.xxLarge};
      line-height: 27px;
      font-weight: 700;
    }
    
  `}
`