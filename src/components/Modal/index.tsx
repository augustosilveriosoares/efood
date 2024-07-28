import { useDispatch } from 'react-redux'

import Button from '../Button'

import { add, openCart } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'

import close from '../../assets/icons/close.png'

import * as S from './styles'

interface ModalState {
  isVisible: boolean
  onClick: () => void
  product: CategoryItemType | null
}

const Modal = ({ isVisible, onClick, product }: ModalState) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    if (product) {
      dispatch(add(product))
      dispatch(openCart())
    }
  }

  if (!product) {
    return null
  }

  return (
    <S.Modal className={isVisible ? 'visible' : ''}>
      <S.ModalContent title="Clique no botão para adicionar este item ao carrinho">
        <S.Close src={close} onClick={onClick} />
        <S.ModalImage src={product.foto} alt={product.nome} />
        <S.ModalText>
          <h4>{product.nome}</h4>
          <p>
            {product.descricao} <br />
            <br />
            Serve: de {product.porcao}
          </p>
          <Button
            width="auto"
            backgroundColor="beige"
            customPadding="4px 6.95px"
            onClick={addToCart}
          >
            Adicionar ao carrinho - {parseToBrl(product.preco)}
          </Button>
        </S.ModalText>
      </S.ModalContent>
      <div className="overlay" onClick={onClick}></div>
    </S.Modal>
  )
}

export default Modal
