import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { Image } from '../CategoryCard/styles'
import { Description } from '../CategoryCard/styles'

export const Card = styled.div`
  background-color: ${colors.red};
  color: ${colors.darkBeige};
  padding: 8px;
  border-radius: 8px;
  overflow: auto;
`

export const ProductImage = styled(Image)`
  height: 167px;
  border-radius: 8px;
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 900;
  line-height: 18.75px;
  margin: 8px 0;
`

export const ProductDescription = styled(Description)`
  margin-bottom: 8px;
  min-height: 176px;

  @media (max-width: ${breakpoints.desktop}) {
    min-height: 154px;
  }

  @media (max-width: ${breakpoints.smallTablet}) {
    min-height: 176px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    min-height: auto;
  }
`
