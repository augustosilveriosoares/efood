import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const CardProduct = styled.div`
  background-color: ${colors.rose};
  padding: 8px;
  margin-bottom: 32px;

  img {
    width: 304px;
    height: 168px;

    @media (max-width: ${breakpoints.desktop}) {
      width: 100%;
    }
  }

  h3 {
    color: ${colors.lightRose};
    font-weight: 900;
    font-size: 16px;
    display: block;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  p {
    color: ${colors.lightRose};
    font-size: 14px;
    line-height: 22px;
    display: block;
    margin-bottom: 8px;
  }
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
`
export const ModalContent = styled.div`
  background-color: ${colors.rose};
  position: relative;
  z-index: 1;

  header {
    display: flex;

    img {
      width: 16px;
      height: 16px;
      margin-left: auto;
      margin-right: 8px;
      margin-top: 8px;
      margin-bottom: 8px;
      cursor: pointer;
    }
  }

  img {
    display: block;
    width: 280px;
    height: 280px;
    object-fit: inherit;
    margin-right: 24px;

    @media (max-width: ${breakpoints.tablet}) {
      display: flex;
      width: 120px;
      height: 120px;
      margin-bottom: 16px;
    }
  }
`
export const Content = styled.div`
  padding: 0 32px 32px 32px;
  display: flex;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    color: ${colors.white};
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    color: ${colors.white};
    line-height: 22px;
    margin-bottom: 16px;
  }

  button {
    margin-left: 0;
    width: 280px;

    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
    }
  }
`
