import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({theme})=> css`   
        background-color: ${theme.colors.background};
        height: 100%;
        padding-bottom: 100px;

        .hide-on-mobile{
          display: none;
          ${theme.responsive.laptop(css`
            display: block;
          `)}
        }
    `}    
`