import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { ButtonAdd } from '../Button/styles'
import * as S from './styles'
import fechar from '../../assets/images/close.png'

import { add, open } from '../../store/reducers/cart'
import { priceBRL } from '../../utils'

const Product = ({ nome, foto, descricao, preco, porcao, id }: Menu) => {
  const dispatch = useDispatch()
  const menu: Menu = {
    id,
    foto,
    nome,
    descricao,
    porcao,
    preco
  }

  const addToCart = () => {
    dispatch(add(menu))
    dispatch(open())
  }

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const getDescription = (descricao: string) => {
    if (descricao.length > 200) {
      return descricao.slice(0, 120) + '...'
    }
    return descricao
  }

  return (
    <>
      <S.CardProduct>
        <img src={foto} alt={nome} />
        <h3>{nome}</h3>
        <p>{getDescription(descricao)}</p>
        <ButtonAdd onClick={() => setModalIsOpen(true)}>
          Adicionar ao carrinho
        </ButtonAdd>
      </S.CardProduct>
      <S.Modal className={modalIsOpen ? 'visible' : ''}>
        <S.ModalContent className="container">
          <header>
            <img
              src={fechar}
              alt="ícone de fechar"
              onClick={() => setModalIsOpen(false)}
            />
          </header>
          <S.Content>
            <img src={foto} alt={nome} />
            <div>
              <h3>{nome}</h3>
              <p>{descricao}</p>
              <p>Serve: {porcao}</p>
              <div className="button">
                <ButtonAdd onClick={addToCart}>
                  Adicionar ao carrinho - {priceBRL(preco)}
                </ButtonAdd>
              </div>
            </div>
          </S.Content>
        </S.ModalContent>
        <div className="overlay" onClick={() => setModalIsOpen(false)}></div>
      </S.Modal>
    </>
  )
}
export default Product
