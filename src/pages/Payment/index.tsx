import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InputMask from 'react-input-mask'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Aside from '../../components/Aside'
import Button from '../../components/Button'

import { RootReducer } from '../../store'
import {
  openDelivery,
  closePayment,
  openSuccess,
  closeSuccess
} from '../../store/reducers/checkout'
import { clearCart } from '../../store/reducers/cart'

import { usePurchaseMutation } from '../../services/api'

import { getTotalPrice, parseToBrl } from '../../utils'

import { Row, InputGroup } from './../../components/Aside/styles'

const Payment = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const { paymentIsOpen, deliveryFormData, successIsOpen } = useSelector(
    (state: RootReducer) => state.checkout
  )

  const navigate = useNavigate()

  const [purchase, { isSuccess, data, isLoading, reset }] =
    usePurchaseMutation()

  const dispatch = useDispatch()

  const form = useFormik({
    initialValues: {
      client: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      aditional: '',
      cardDisplayName: '',
      cardNumber: '',
      ccv: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      cardDisplayName: Yup.string()
        .min(2, 'O nome do titular do cartão deve ter pelo menos 2 caracteres')
        .matches(
          /^[a-zA-Z\s]+$/,
          'O nome do titular do cartão deve conter apenas letras e espaços'
        )
        .required('O nome do titular do cartão é obrigatório'),
      cardNumber: Yup.string()
        .min(12, 'O campo precisa ter 12 caracteres')
        .required('O número do cartão é obrigatório'),
      ccv: Yup.string()
        .matches(/^\d{3,4}$/, 'O CCV deve conter 3 dígitos')
        .required('O CCV é obrigatório'),
      expiresMonth: Yup.string()
        .matches(
          /^(0[1-9]|1[0-2])$/,
          'O mês de vencimento do cartão deve ser um número entre 01 e 12'
        )
        .required('O mês de vencimento é obrigatório'),
      expiresYear: Yup.string()
        .matches(/^\d{2}$/, 'O ano de vencimento deve conter 2 dígitos')
        .required('O ano de vencimento do cartão é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        })),
        delivery: {
          receiver: deliveryFormData.client,
          address: {
            description: deliveryFormData.address,
            city: deliveryFormData.city,
            zipCode: deliveryFormData.cep,
            number: Number(deliveryFormData.number),
            complement: deliveryFormData.aditional
          }
        },
        payment: {
          card: {
            name: values.cardDisplayName,
            number: values.cardNumber,
            code: Number(values.ccv),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const openDeliveryClosePayment = () => {
    dispatch(openDelivery())
    dispatch(closePayment())
  }

  const handleCloseSuccess = () => {
    dispatch(closeSuccess())
    dispatch(closePayment())
    navigate('/')
    reset()
    form.resetForm()
  }

  const handleClickPaymentOverlay = () => {
    dispatch(closePayment())
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(openSuccess())
      dispatch(closePayment())
      dispatch(clearCart())
    }
  }, [isSuccess, dispatch])

  return (
    <>
      {isSuccess && data ? (
        <Aside
          title={`Pedido realizado - ${data.orderId}`}
          hasTitle
          className={successIsOpen ? 'is-open' : ''}
          onClick={handleCloseSuccess}
        >
          <>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
              <br />
              <br />
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras. <br />
              <br />
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição. <br />
              <br /> Esperamos que desfrute de uma deliciosa e agradável
              experiência gastronômica. Bom apetite!
            </p>
            <Button
              width="100%"
              backgroundColor="beige"
              customPadding="4px 0"
              onClick={handleCloseSuccess}
            >
              Concluir
            </Button>
          </>
        </Aside>
      ) : (
        <Aside
          title={`Pagamento - Valor a pagar ${parseToBrl(getTotalPrice(items))}`}
          hasTitle
          className={paymentIsOpen ? 'is-open' : ''}
          onClick={handleClickPaymentOverlay}
        >
          <form onSubmit={form.handleSubmit}>
            <Row>
              <InputGroup>
                <label htmlFor="cardDisplayName">Nome no cartão</label>
                <input
                  type="text"
                  id="cardDisplayName"
                  name="cardDisplayName"
                  value={form.values.cardDisplayName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={
                    checkInputHasError('cardDisplayName') ? 'error' : ''
                  }
                />
              </InputGroup>
            </Row>
            <Row>
              <InputGroup>
                <label htmlFor="cardNumber">Número do cartão</label>
                <InputMask
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={form.values.cardNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('cardNumber') ? 'error' : ''}
                  mask="9999 9999 9999"
                />
              </InputGroup>
              <InputGroup maxWidth="87px">
                <label htmlFor="ccv">CCV</label>
                <InputMask
                  type="text"
                  id="ccv"
                  name="ccv"
                  value={form.values.ccv}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('ccv') ? 'error' : ''}
                  mask="999"
                />
              </InputGroup>
            </Row>
            <Row marginBottom="24px">
              <InputGroup>
                <label htmlFor="expiresMonth">Mês de vencimento</label>
                <InputMask
                  type="text"
                  id="expiresMonth"
                  name="expiresMonth"
                  value={form.values.expiresMonth}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('expiresMonth') ? 'error' : ''}
                  mask="99"
                />
              </InputGroup>
              <InputGroup>
                <label htmlFor="expiresYear">Ano de vencimento</label>
                <InputMask
                  type="text"
                  id="expiresYear"
                  name="expiresYear"
                  value={form.values.expiresYear}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('expiresYear') ? 'error' : ''}
                  mask="99"
                />
              </InputGroup>
            </Row>
            <Button
              width="100%"
              backgroundColor="beige"
              customPadding="4px 0"
              marginBottom="8px"
              type="submit"
            >
              {isLoading ? 'Finalizando pagamento...' : 'Finalizar pagamento'}
            </Button>
            <Button
              width="100%"
              backgroundColor="beige"
              customPadding="4px 0"
              onClick={openDeliveryClosePayment}
            >
              Voltar para a edição de endereço
            </Button>
          </form>
        </Aside>
      )}
    </>
  )
}

export default Payment
