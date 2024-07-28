import styled from 'styled-components'

type RowProps = {
  marginBottom?: string
}

type InputProps = {
  maxWidth?: string
}

export const Row = styled.div<RowProps>`
  display: flex;
  align-items: flex-end;
  column-gap: 34px;
  margin-bottom: ${(props) => props.marginBottom || '0'};
`

export const InputGroup = styled.div<InputProps>`
  flex: auto;
  max-width: ${(props) => props.maxWidth || 'auto'};
`
