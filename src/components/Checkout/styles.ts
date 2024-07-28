import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

type inputItemsProps = {
  maxWidth?: string
  marginBottom?: string
}

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 34px;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`
export const CheckoutContainer = styled.div`
  display: none;

  h2 {
    margin-bottom: 8px;
    color: ${colors.lightRose};
  }
  p {
    margin-bottom: 24px;
    font-size: 14px;
    color: ${colors.lightRose};
  }

  &.is-open {
    display: flex;
  }
`

export const InputItems = styled.div<inputItemsProps>`
  flex: auto;
  max-width: ${(props) => props.maxWidth || 'auto'};
  margin-bottom: ${(props) => props.marginBottom || '0'};

  label {
    font-size: 14px;
    font-weight: bold;
    color: ${colors.lightRose};
  }
  input {
    display: block;
    background-color: ${colors.white};
    border: 1px solid ${colors.white};
    height: 32px;
    margin: 8px 0;
    width: 100%;
    padding: 8px;

    &.error {
      border: 1px solid red;
    }
  }
`
