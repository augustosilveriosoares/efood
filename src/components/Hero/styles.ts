import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const ImageHero = styled.div`
  width: 100%;
  height: 390px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  img {
    margin-top: 64px;
  }
`

export const Title = styled.h1`
  font-size: 36px;
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 24px;
    margin-bottom: 88px;
  }
`
