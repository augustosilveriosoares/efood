import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.white};
  color: ${colors.red};
  font-weight: 700;
  position: relative;
`

export const Image = styled.img`
  width: 100%;
  height: 217px;
  display: block;
  object-fit: cover;
`

export const TagsContainer = styled.div`
  position: absolute;
  display: flex;
  top: 16px;
  right: 16px;
`

export const Tag = styled.div`
  font-size: 12px;
  line-height: 14.06px;
  padding: 6px 4px;
  color: ${colors.darkBeige};
  background-color: ${colors.red};
  margin-left: 8px;
`

export const Infos = styled.div`
  padding: 8px;
  border-right: 1px solid ${colors.red};
  border-bottom: 1px solid ${colors.red};
  border-left: 1px solid ${colors.red};
`

export const NameRating = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 21.09px;
  margin-bottom: 16px;

  h3 {
    font-size: 18px;

    @media (max-width: ${breakpoints.smallTablet}) {
      font-size: 14px;
    }
  }
`

export const Rating = styled.div`
  display: flex;
  font-size: 18px;

  img {
    margin-left: 8px;
  }
`

export const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
  min-height: 110px;

  @media (max-width: ${breakpoints.desktop}) {
    min-height: 154px;
  }

  @media (max-width: ${breakpoints.smallTablet}) {
    min-height: 176px;
    font-size: 13px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    min-height: auto;
  }
`
