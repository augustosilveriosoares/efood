import styled from 'styled-components'
import background from '../../assets/background.png'
import { breakpoints, colors } from '../../styles'

export const HeaderBar = styled.header`
  background-image: url(${background});
  padding: 40px 0 65.5px;

  &.isHome {
    padding: 40px 0;
  }
`

export const HomeItems = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    color: ${colors.red};
    margin-top: 138.5px;
    font-weight: 900;
    font-size: 36px;
    line-height: 42.19px;
    text-align: center;

    @media (max-width: ${breakpoints.desktop}) {
      font-size: 28px;
      margin-top: 100px;
      line-height: 30px;
    }

    @media (max-width: ${breakpoints.tablet}) {
      margin-top: 80px;
      font-size: 24px;
      line-height: 28px;
    }
  }
`

export const Logo = styled.img`
  text-align: center;
  width: 125px;
  height: 57.5px;
  justify-content: center;
`

export const CategoryItems = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 900;
  font-size: 18px;
  line-height: 21.09px;

  li {
    width: 197px;
    color: ${colors.red};

    a {
      color: ${colors.red};
      cursor: pointer;
    }
  }

  li:nth-child(3) {
    display: flex;
    justify-content: center;
  }

  li:last-child {
    cursor: pointer;
  }

  .restaurants {
    @media (max-width: ${breakpoints.tablet}) {
      display: none;
    }
  }

  @media (min-width: ${breakpoints.tablet}) {
    > li:first-child {
      display: none;
    }
  }
`

export const Hamburguer = styled.div`
  display: flex;
  flex-direction: column;
  width: 34px;

  span {
    height: 3px;
    width: 100%;
    margin-bottom: 4px;
    background-color: ${colors.red};
  }
`

export const CartButton = styled.li`
  text-align: end;

  @media (min-width: ${breakpoints.tablet}) {
    > span:last-child {
      display: none;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    > span:first-child {
      display: none;
    }
  }
`

export const NavMobile = styled.nav`
  display: none;
  font-weight: 700;
  font-size: 16px;
  line-height: 21.09px;

  a {
    color: ${colors.red};
  }

  &.is-open {
    display: block;
  }
`
