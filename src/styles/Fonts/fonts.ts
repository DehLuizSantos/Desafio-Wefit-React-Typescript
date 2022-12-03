import styled, { css } from "styled-components";

export const H1SansLogo = styled.h1`
  ${({theme}) => css`
    font-size: ${theme.fonts.xxLarge};
    line-height: 27px;
    font-weight: 700;
    color: ${theme.colors.white};
  `}
`

export const H2SansInfos = styled.h2`
  ${({theme}) => css`
    font-size: ${theme.fonts.xxLarge};  
    line-height: 27px;
    font-weight: 700;
    color:${theme.colors.blue[700]};  
  `}
`

export const H3SansPrice = styled.h3`
  ${({theme}) => css`
    font-size: ${theme.fonts.large};
    line-height: 22px;
    font-weight: 700;
    color: ${theme.colors.blue[700]};  
  `}
`

export const H4SansItem = styled.h4`
  ${({theme}) => css`
    font-size: ${theme.fonts.medium};
    line-height: 19px;
    font-weight: 700;
    color: ${theme.colors.blue[700]};
  `}
`
export const SpanSansSmall = styled.span`
  ${({theme}) => css`
    font-size: ${theme.fonts.small};
    color: ${theme.colors.gray[500]};
    line-height: 16px;
    font-weight: 600;  
  `}
`

export const SpanSansLarge = styled.span`
  ${({theme}) => css`
    color: ${theme.colors.blue[700]};
    font-size: ${theme.fonts.xxxLarge};
    font-weight: 700;
    line-height: 33px;
  `}
`

export const PSansSmall = styled.p`
  ${({theme})=> css`
    font-size: ${theme.fonts.medium};
    color:${theme.colors.white};  
  `}

`