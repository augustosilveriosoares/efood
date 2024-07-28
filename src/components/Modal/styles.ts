import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Modal = styled.div`
  position: fixed;
  display: none;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  display: flex;
  max-width: 1024px;
  color: blue;
  padding: 32px;
  z-index: 1;
  background-color: ${colors.red};
  position: relative;

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    max-width: 360px;
    padding: 28px;
  }
`
export const Close = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`

export const ModalImage = styled.img`
  display: block;
  width: 280px;
  height: 280px;
  object-fit: cover;

  @media (max-width: ${breakpoints.tablet}) {
    width: 304px;
    height: 180px;
  }
`

export const ModalText = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.white};
  margin-left: 24px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 0;
    margin-top: 16px;
  }

  h4 {
    font-size: 18px;
    font-weight: 900;
    line-height: 21.09px;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 16px;
    }
  }

  p {
    margin: 16px 0;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 12px;
    }
  }
`
