import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../styles'

export const ButtonAdd = styled.button`
  background-color: ${colors.lightRose};
  color: ${colors.rose};
  font-size: 14px;
  font-weight: bold;
  padding: 4px;
  width: 100%;
  text-align: center;
  border: none;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  background-color: ${colors.rose};
  color: ${colors.lightRose};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  text-decoration: none;
`
