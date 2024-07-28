import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export interface ListProps {
  columns: string
  rows: string
  columnGap: string
  rowGap: string
  margin: 'home' | 'category'
}

export const BodyContent = styled.div`
  background-color: ${colors.beige};
`

export const List = styled.ul<ListProps>`
  display: grid;
  margin: ${(props) => (props.margin === 'home' ? '80px 0' : '56px 0')};
  grid-template-columns: ${({ columns }) => columns};
  grid-template-rows: ${({ rows }) => rows};
  column-gap: ${({ columnGap }) => columnGap};
  row-gap: ${({ rowGap }) => rowGap};

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    column-gap: 24px;
    row-gap: 24px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
