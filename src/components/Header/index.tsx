import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import { RootReducer } from '../../store'
import { openCart } from '../../store/reducers/cart'

import logo from '../../assets/logo.png'

import * as S from './styles'

const Header = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const location = useLocation()

  const dispatch = useDispatch()
  const handleOpenCart = () => {
    dispatch(openCart())
  }

  return (
    <>
      <S.HeaderBar className={location.pathname === '/' ? 'isHome' : ''}>
        <div className="container">
          <S.HomeItems className={location.pathname === '/' ? '' : 'invisible'}>
            <h1>
              <S.Logo src={logo} alt="EFOOD" />
            </h1>
            <p>
              Viva experiências gastronômicas <br /> no conforto da sua casa
            </p>
          </S.HomeItems>
          <S.CategoryItems
            className={location.pathname === '/' ? 'invisible' : ''}
          >
            <li>
              <S.Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <span />
                <span />
                <span />
              </S.Hamburguer>
            </li>
            <li className="restaurants">
              <Link title="Voltar para a página de Restaurantes" to="/">
                Restaurantes
              </Link>
            </li>
            <li>
              <Link to="/">
                <h1>
                  <S.Logo
                    src={logo}
                    alt="EFOOD"
                    title="Voltar para a página inicial"
                  />
                </h1>
              </Link>
            </li>
            <S.CartButton onClick={handleOpenCart} title="Abrir o carrinho">
              {items.length} <span>produto(s) no carrinho</span>
              <span className="fa-solid fa-cart-shopping" />
            </S.CartButton>
          </S.CategoryItems>
          <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
            <li>
              <Link title="Voltar para a página de Restaurantes" to="/">
                Restaurantes
              </Link>
            </li>
          </S.NavMobile>
        </div>
      </S.HeaderBar>
    </>
  )
}

export default Header
