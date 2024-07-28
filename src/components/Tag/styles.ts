import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const TagContainer = styled.div`
  background-color: ${colors.rose};
  color: ${colors.lightRose};
  font-size: 12px;
  font-weight: bold;
  padding: 4px 6px;
  display: inline-block;
  margin-right: 8px;
  text-transform: capitalize;

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 8px;
    margin-left: 8px;
  }
`
