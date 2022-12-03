import styled, { css, keyframes } from "styled-components";

const rotate = keyframes`
  from{
    transform: rotate(0deg)
  }
  to{
    transform: rotate(360deg)
  }

`

export const LoaderContainer = styled.div`
  ${() => css`
    align-items:center; 
    display:flex;
    height: 80vh;
    justify-content:center;
  `}
`

export const LoaderSpinner = styled.div`
  ${() => css`
    align-items:center;
    animation: ${rotate} 2s linear infinite;
    background: conic-gradient(from 90deg at 50% 50%, rgba(128, 128, 128, 0.0001) -46.17deg, #FFFFFF 313.55deg, rgba(128, 128, 128, 0.0001) 313.83deg, #FFFFFF 673.55deg);
    border-radius: 50%;
    display: flex;
    height: 60px;
    justify-content:center;
    width: 60px;
  `}
`

export const LoaderBall = styled.div`
  ${({theme}) => css`
    background: ${theme.colors.blue[700]};
    border-radius: 50%;
    height: 57px;
    width: 57px;
  `}
`

