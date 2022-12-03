import {
    css,
    DefaultTheme,
    FlattenInterpolation,
    FlattenSimpleInterpolation,
    ThemeProps,
  } from 'styled-components'
  
  export const commonColors = {
    white: '#fff',
    green: '#039B00',
    blue: {
      700: '#2F2E41',
      500: '#009EDD',
    },
    gray: {
      700: "#333333",
      600: '#3F3D56',
      500: "#999999",
      400: '#D9D9D9'
    }
  }
  
  const responsive = {
    desktop: (
      style:
        | FlattenInterpolation<ThemeProps<DefaultTheme>>
        | FlattenSimpleInterpolation
        | string
    ) => css`
      @media (min-width: ${({ theme }) => theme.screens.desktop}) {
        ${style}
      }
    `,
    laptop: (
      style:
        | FlattenInterpolation<ThemeProps<DefaultTheme>>
        | FlattenSimpleInterpolation
        | string
    ) => css`
      @media (min-width: ${({ theme }) => theme.screens.laptop}) {
        ${style}
      }
    `,
    tablet: (
      style:
        | FlattenInterpolation<ThemeProps<DefaultTheme>>
        | FlattenSimpleInterpolation
        | string
    ) => css`
      @media (min-width: ${({ theme }) => theme.screens.tablet}) {
        ${style}
      }
    `,
    mobile: (
      style:
        | FlattenInterpolation<ThemeProps<DefaultTheme>>
        | FlattenSimpleInterpolation
        | string
    ) => css`
      @media (min-width: ${({ theme }) => theme.screens.mobile}) {
        ${style}
      }
    `,
  }
  
  const commonFont = {
    small: '12px',
    medium: '14px',
    large: '16px',
    xLarge: '18px',
    xxLarge: '20px',
    xxxLarge: '24px'
  }
  
  const commonTheme = {
    screens: {
      desktop: '1366px',
      laptop: '1024px',
      tablet: '768px',
      mobile: '600px',
      mobile1: '412px',
    },
    responsive,
  }
  
  export const light = {
    ...commonTheme,
    fonts: { ...commonFont },
    colors: {
      ...commonColors,
    },
  }
  
  export type ThemeType = typeof light
  
  export const dark: ThemeType = {
    ...commonTheme,
    fonts: { ...commonFont },
    colors: {
      ...commonColors,
    },
  }
  
  const theme = light
  
  export default theme