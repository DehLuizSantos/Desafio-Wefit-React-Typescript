import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({theme})=> css`   
    margin: 0 10px;
    
    ${theme.responsive.laptop(css`
        max-width: 960px;
        margin: 0 auto;
     `)}
    `}
`