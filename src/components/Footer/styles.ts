import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.footer`
  background-color: ${colors.lightRose};
  padding: 40px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  p {
    font-size: 12px;
  }
`
export const LogoFooter = styled.div`
  margin-bottom: 32px;
`
export const Midias = styled.div`
  margin-bottom: 80px;

  a {
    margin-right: 8px;
  }
`
