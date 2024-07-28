import styled from 'styled-components'
import { colors } from '../../styles'

export interface AsideStyleProps {
  hasTitle: boolean
}

type RowProps = {
  marginBottom?: string
}

type InputProps = {
  maxWidth?: string
}

export const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.black};
  opacity: 0.7;
`

export const AsideContainer = styled.div<AsideStyleProps>`
  display: none;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  span,
  label,
  h2,
  input {
    line-height: 16.41px;
    font-weight: 700;
  }

  h2 {
    font-size: 16px;
    line-height: 18.75px;
    margin-bottom: ${(props) => (props.hasTitle ? '16px' : 0)};
  }

  span,
  label,
  input {
    font-size: 14px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin-bottom: 24px;
  }

  input {
    background-color: ${colors.darkBeige};
    color: ${colors.lightBlack};
    border: 1px solid ${colors.darkBeige};
    padding: 8px;
    margin: 8px 0;
    width: 100%;
  }

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${colors.red};
  color: ${colors.darkBeige};
  padding: 32px 8px 0;
  max-width: 360px;
  width: 100%;
  z-index: 1;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }
`

export const Row = styled.div<RowProps>`
  display: flex;
  align-items: flex-end;
  column-gap: 34px;
  margin-bottom: ${(props) => props.marginBottom || '0'};
`

export const InputGroup = styled.div<InputProps>`
  flex: auto;
  max-width: ${(props) => props.maxWidth || 'auto'};

  input {
    &.error {
      border: 1px inset red;
    }
  }
`
