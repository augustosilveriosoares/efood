import { useParams } from 'react-router-dom'

import Banner from '../../components/Banner'
import Header from '../../components/Header'
import ProductsList from '../../components/ProductsList'

import { useGetMenuQuery } from '../../services/api'
import Cart from '../../components/Cart'
import Checkout from '../../components/Checkout'
import Loader from '../../components/Loader'

type MenuParams = {
  id: string
}

const Profile = () => {
  const { id } = useParams() as MenuParams
  const { data: menu } = useGetMenuQuery(id)

  if (!menu) {
    return <Loader />
  }

  return (
    <>
      <Header />
      <Banner image={menu.capa} cuisine={menu.tipo} title={menu.titulo} />
      <ProductsList foods={menu.cardapio} />
      <Cart />
      <Checkout />
    </>
  )
}

export default Profile
