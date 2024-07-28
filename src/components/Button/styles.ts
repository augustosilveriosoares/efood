import styled from 'styled-components'
import { colors } from '../../styles'

import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  color: ${(props) =>
    props.backgroundColor === 'beige' ? colors.red : colors.darkBeige};
  background-color: ${(props) =>
    props.backgroundColor === 'beige' ? colors.darkBeige : colors.red};
  cursor: pointer;
  width: ${(props) => (props.width === '100%' ? '100%' : 'fit-content')};
  font-weight: 700;
  font-size: 14px;
  line-height: 16.41px;
  border: none;
  transition: 0.5s all ease;
  margin-bottom: ${(props) => props.marginBottom || '0'};
  padding: ${(props) => {
    if (props.customPadding === '4px 0') {
      return '4px 0'
    } else if (props.customPadding === '4px 6.95px') {
      return '4px 6.95px'
    } else {
      return '4px 6px'
    }
  }};

  &:hover {
    background-color: ${(props) =>
      props.backgroundColor === 'beige' ? colors.beige : colors.red};
    color: ${(props) =>
      props.backgroundColor === 'beige' ? colors.red : colors.beige};
  }
`
