import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#fff',
  rose: '#E66767',
  lightRose: '#FFEBD9',
  backgroundColor: '#FFF8F2'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;

  body {
    background-color: ${colors.backgroundColor};
    color: ${colors.rose};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 60%;
    }

    @media (max-width: ${breakpoints.tablet}) {
      max-width: 60%;
    }
  }
}
`
