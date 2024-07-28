import styled from 'styled-components'
import { colors } from '../../styles'
import litter from '../../assets/icons/litter.png'

export const CartItem = styled.div`
  display: flex;
  background-color: ${colors.darkBeige};
  padding: 8px 8px 12px;
  color: ${colors.red};
  margin-bottom: 16px;
  position: relative;

  h3 {
    font-size: 18px;
    line-height: 21.09px;
    font-weight: 900;
  }

  h4 {
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    margin-top: 16px;
  }

  button {
    background-image: url(${litter});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }

  .empty-text {
    font-size: 14px;
    line-height: 22px;
    color: ${colors.white};
    text-align: center;
  }
`

export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0 16px;
  color: ${colors.darkBeige};

  p {
    font-size: 14px;
    line-height: 16.41px;
    font-weight: 700;
  }
`
