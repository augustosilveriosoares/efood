import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { closeCart, remove } from '../../store/reducers/cart'
import { openDelivery } from '../../store/reducers/checkout'

import Aside from '../../components/Aside'
import Button from '../../components/Button'

import { getTotalPrice, parseToBrl } from '../../utils'

import * as S from './styles'

const Cart = () => {
  const dispatch = useDispatch()
  const { items, isOpen } = useSelector((state: RootReducer) => state.cart)

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const handleOpenCheckout = () => {
    dispatch(openDelivery())
    dispatch(closeCart())
  }

  const handleClickOverlay = () => {
    dispatch(closeCart())
  }

  return (
    <Aside
      className={isOpen ? 'is-open' : ''}
      hasTitle={false}
      onClick={handleClickOverlay}
    >
      {items.length > 0 ? (
        <>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <img src={item.foto} />
              <div>
                <h3>{item.nome}</h3>
                <h4>{parseToBrl(item.preco)}</h4>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </S.CartItem>
          ))}
          <S.Price>
            <span>Valor total</span>
            <span>{parseToBrl(getTotalPrice(items))}</span>
          </S.Price>
          <Button
            width="100%"
            backgroundColor="beige"
            customPadding="4px 0"
            onClick={handleOpenCheckout}
          >
            Continuar com a entrega
          </Button>
        </>
      ) : (
        <p className="empty-text ">
          O carrinho está vazio. Adicione pelo menos um produto para continuar
          com a compra.
        </p>
      )}
    </Aside>
  )
}

export default Cart
