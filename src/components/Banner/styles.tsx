import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

type BannerProps = {
  image: string
}

export const BannerStyle = styled.div<BannerProps>`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
  url(${(props) => props.image});
  background-size: cover;
  background-position: 88% 49%;

  div {
    padding: 24px 0 32px;
    color: ${colors.white};

    @media (max-width: ${breakpoints.desktop}) {
      padding: 24px 0 32px;
    }

    @media (max-width: ${breakpoints.tablet}) {
      padding: 24px 0 36px;
    }

    h1 {
      font-size: 32px;
      font-weight: 900;
      line-height: 37.5px;

      @media (max-width: ${breakpoints.tablet}) {
        font-size: 24px;
        font-weight: 700;
      }
    }

    & > h1:first-child {
      margin-bottom: 156.5px;
      font-weight: 100;
  }

`
