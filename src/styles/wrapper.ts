import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({theme})=> css`   
    background-color: ${theme.colors.blue[700]};
    min-height: 100vh;
    padding-bottom: 100px;

    .hide-on-mobile{
      display: none;
      ${theme.responsive.tablet(css`
        display: flex;
      `)}
    }

    .hide-on-tablet{
      display:flex;
      ${theme.responsive.tablet(css`
        display:none;      
      `)}
    }
  `}    
`