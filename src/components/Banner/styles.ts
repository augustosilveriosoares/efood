import styled from 'styled-components'
import { colors } from '../../styles'

export const BannerRest = styled.div`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  ::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
  }

  .container {
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
`
export const TitleCuisine = styled.h2`
  color: ${colors.white};
  font-size: 32px;
  font-weight: 100;
  margin-top: 24px;
  text-transform: capitalize;
`
export const TitleRest = styled.h1`
  color: ${colors.white};
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 32px;
`
