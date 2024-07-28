import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import banner from '../../assets/images/banner.png'
import logo from '../../assets/images/logo.svg'

import * as S from './styles'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const Banner = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.ImageBanner style={{ backgroundImage: `url(${banner})` }}>
      <div className="container">
        <S.ContentBanner>
          <S.TitleHeader href="/">Restaurantes</S.TitleHeader>
          <Link to="/">
            <h1>
              <img src={logo} alt="logo" />
            </h1>
          </Link>
          <S.CartButton onClick={openCart}>
            {items.length} produto(s) no carrinho
          </S.CartButton>
        </S.ContentBanner>
      </div>
    </S.ImageBanner>
  )
}

export default Banner
