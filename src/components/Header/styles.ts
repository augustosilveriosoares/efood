import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const ImageBanner = styled.div`
  width: 100%;
  height: 186px;
`
export const ContentBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }

  a {
    color: ${colors.rose};
    text-decoration: none;
    font-weight: bold;
    margin-top: 64px;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 16px;
      margin-top: 24px;
    }
  }
`
export const TitleHeader = styled.a`
  font-weight: 900;
  font-size: 18px;
`

export const CartButton = styled.a`
  font-weight: 900;
  font-size: 18px;
  cursor: pointer;
`
