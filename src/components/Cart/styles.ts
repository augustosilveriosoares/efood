import styled from 'styled-components'
import { colors } from '../../styles'

export const CartContainer = styled.div`
  display: none;

  &.is-open {
    display: flex;
  }
  .text {
    text-align: center;
    color: ${colors.lightRose};
  }
  ul {
    max-height: 350px;
    overflow: auto;
  }
`

export const Item = styled.li`
  background-color: ${colors.lightRose};
  display: flex;
  padding: 8px;
  margin: 16px 0;
  position: relative;
  gap: 8px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    color: ${colors.rose};
  }

  p {
    padding-top: 16px;
    font-size: 14px;
    color: ${colors.rose};
  }
`
export const TrashImg = styled.div`
  img {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
  position: absolute;
  right: 8px;
  bottom: 8px;
  z-index: 1;
`
export const Price = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.lightRose};
  display: flex;
  justify-content: space-between;
  padding-top: 24px;
  margin-bottom: 16px;
`
