import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import * as S from './styles'

import Card from '../Card'
import Button from '../Button'

import { usePurchaseMutation } from '../../services/api'

import { RootReducer } from '../../store'
import { open, closeCheck, clear } from '../../store/reducers/cart'
import { getTotalPrice, priceBRL } from '../../utils'

const Checkout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [payment, setPayment] = useState(false)
  const { checkIsOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { data, isSuccess }] = usePurchaseMutation()

  const addCart = () => {
    dispatch(closeCheck())
    dispatch(open())
  }

  const concluded = () => {
    navigate('/')
  }

  const form = useFormik({
    initialValues: {
      receiverName: '',
      address: '',
      city: '',
      postCode: '',
      houseNumber: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      receiverName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      postCode: Yup.string()
        .matches(/^\d{5}-\d{3}|\d{8}$/, 'Formato de CEP inválido')
        .required('O campo é obrigatório'),
      houseNumber: Yup.string().required('O campo é obrigatório'),
      complement: Yup.string(),

      cardName: Yup.string().when((values, schema) =>
        payment ? schema.required('O campo é obrigatório') : schema
      ),
      cardNumber: Yup.string()
        .matches(
          /^\d{4} \d{4} \d{4} \d{4}|\d{16}$/,
          'Número do cartão inválido'
        )
        .when((values, schema) =>
          payment ? schema.required('O campo é obrigatório') : schema
        ),
      cardCode: Yup.string()
        .matches(/^\d{3}$/, 'Código de segurança inválido')
        .when((values, schema) =>
          payment ? schema.required('O campo é obrigatório') : schema
        ),
      expiresMonth: Yup.string()
        .matches(/^\d{2}$/, 'Mês de vencimento inválido')
        .when((values, schema) =>
          payment ? schema.required('O campo é obrigatório') : schema
        ),
      expiresYear: Yup.string()
        .matches(/^\d{2}$/, 'Ano de vencimento inválido')
        .when((values, schema) =>
          payment ? schema.required('O campo é obrigatório') : schema
        )
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.receiverName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.postCode,
            number: Number(values.houseNumber),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        }))
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const continuePayment = () => {
    const isFormEmpty = Object.values(form.values).every((value) => !value)
    if (isFormEmpty || !form.isValid) {
      alert('Preencha todos os campos obrigatórios antes de continuar.')
      form.setTouched({
        receiverName: true,
        address: true,
        city: true,
        postCode: true,
        houseNumber: true
      })
    } else {
      setPayment(true)
    }
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])
  return (
    <S.CheckoutContainer className={checkIsOpen ? 'is-open' : ''}>
      {isSuccess && data ? (
        <Card>
          <>
            <h2>Pedido realizado - {data.orderId}</h2>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.{' '}
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <Button
              onClick={concluded}
              type="button"
              title="Clique aqui para concluir a compra"
            >
              Concluir
            </Button>
          </>
        </Card>
      ) : (
        <form onSubmit={form.handleSubmit}>
          {payment ? (
            <Card>
              <>
                <h2>
                  Pagamento - Valor a pagar{' '}
                  <span>{priceBRL(getTotalPrice(items))}</span>
                </h2>
                <S.InputItems>
                  <label htmlFor="cardName">Nome no cartão</label>
                  <input
                    type="text"
                    id="cardName"
                    name="cardName"
                    value={form.values.cardName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardName') ? 'error' : ''}
                  />
                </S.InputItems>
                <S.Row>
                  <S.InputItems maxWidth="228px">
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <InputMask
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('cardNumber') ? 'error' : ''
                      }
                      mask="9999 9999 9999 9999"
                    />
                  </S.InputItems>
                  <S.InputItems maxWidth="87px">
                    <label htmlFor="cardCode">CVV</label>
                    <InputMask
                      type="text"
                      id="cardCode"
                      name="cardCode"
                      value={form.values.cardCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('cardCode') ? 'error' : ''}
                      mask="999"
                    />
                  </S.InputItems>
                </S.Row>
                <S.Row>
                  <S.InputItems>
                    <label htmlFor="expiresMonth">Mês de vencimento</label>
                    <InputMask
                      type="text"
                      id="expiresMonth"
                      name="expiresMonth"
                      value={form.values.expiresMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('expiresMonth') ? 'error' : ''
                      }
                      mask="99"
                    />
                  </S.InputItems>
                  <S.InputItems marginBottom="24px">
                    <label htmlFor="expiresYear">Ano de vencimento</label>
                    <InputMask
                      type="text"
                      id="expiresYear"
                      name="expiresYear"
                      value={form.values.expiresYear}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('expiresYear') ? 'error' : ''
                      }
                      mask="99"
                    />
                  </S.InputItems>
                </S.Row>
                <Button
                  onClick={form.handleSubmit}
                  type="submit"
                  title="Clique aqui para finalizar o pagamento"
                >
                  Finalizar pagamento
                </Button>
                <Button
                  isActive={payment!}
                  onClick={() => setPayment(false)}
                  type="button"
                  title="Clique aqui para voltar na edição de endereço"
                >
                  Voltar para a edição de endereço
                </Button>
              </>
            </Card>
          ) : (
            <Card title="Entrega">
              <>
                <S.InputItems>
                  <label htmlFor="receiverName">Quem irá receber</label>
                  <input
                    type="text"
                    id="receiverName"
                    name="receiverName"
                    value={form.values.receiverName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('receiverName') ? 'error' : ''
                    }
                  />
                </S.InputItems>
                <S.InputItems>
                  <label htmlFor="address">Endereço</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={form.values.address}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('address') ? 'error' : ''}
                  />
                </S.InputItems>
                <S.InputItems>
                  <label htmlFor="city">Cidade</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={form.values.city}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('city') ? 'error' : ''}
                  />
                </S.InputItems>
                <S.Row>
                  <S.InputItems>
                    <label htmlFor="postCode">CEP</label>
                    <InputMask
                      type="text"
                      id="postCode"
                      name="postCode"
                      value={form.values.postCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('postCode') ? 'error' : ''}
                      mask="99999-999"
                    />
                  </S.InputItems>
                  <S.InputItems>
                    <label htmlFor="houseNumber">Número</label>
                    <input
                      type="text"
                      id="houseNumber"
                      name="houseNumber"
                      value={form.values.houseNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('houseNumber') ? 'error' : ''
                      }
                    />
                  </S.InputItems>
                </S.Row>
                <S.InputItems marginBottom="24px">
                  <label htmlFor="complement">Complemento (opcional)</label>
                  <input
                    type="text"
                    id="complement"
                    name="complement"
                    value={form.values.complement}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                </S.InputItems>
                <Button
                  isActive={payment}
                  onClick={continuePayment}
                  type="button"
                  title="Clique aqui para continuar o pagamento"
                >
                  Continuar pagamento
                </Button>
                <Button
                  onClick={addCart}
                  type="button"
                  title="Clique aqui para voltar ao carrinho"
                >
                  Voltar para o carrinho
                </Button>
              </>
            </Card>
          )}
        </form>
      )}
    </S.CheckoutContainer>
  )
}
export default Checkout
