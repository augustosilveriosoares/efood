import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InputMask from 'react-input-mask'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Aside from '../../components/Aside'
import Button from '../../components/Button'

import { RootReducer } from '../../store'
import { openCart } from '../../store/reducers/cart'
import {
  closeDelivery,
  openPayment,
  saveDeliveryData
} from '../../store/reducers/checkout'

import { Row, InputGroup } from './../../components/Aside/styles'

const Delivery = () => {
  const { deliveryIsOpen, successIsOpen } = useSelector(
    (state: RootReducer) => state.checkout
  )

  const [shouldResetForm, setShouldResetForm] = useState(false)
  const dispatch = useDispatch()

  const form = useFormik({
    initialValues: {
      client: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      aditional: ''
    },
    validationSchema: Yup.object({
      client: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O nome é obrigatório'),
      address: Yup.string()
        .matches(
          /^[a-zA-Z\s]+$/,
          'O formato do endereço deve ser: "Rua/Avenida"'
        )
        .required('O endereço é obrigatório'),
      city: Yup.string()
        .min(2, 'A cidade deve ter pelo menos 2 caracteres')
        .matches(/^[a-zA-Z\s]+$/, 'A cidade só pode conter letras e espaços')
        .required('A cidade é obrigatória'),
      cep: Yup.string()
        .matches(/^\d{5}-\d{3}$/, 'O formato do CEP deve ser: "XXXXX-XXX"')
        .required('O CEP é obrigatório'),
      number: Yup.string()
        .matches(
          /^\d+[a-zA-Z]*$/,
          'O número do endereço deve ser um número inteiro positivo e pode conter letras'
        )
        .required('O número do endereço é obrigatório'),
      aditional: Yup.string()
        .max(50, 'O complemento não deve exceder 50 caracteres')
        .matches(
          /^[a-zA-Z0-9\s,.'-]*$/,
          'O complemento pode conter letras, números, espaços, vírgulas, pontos, apóstrofos e hifens'
        )
        .notRequired()
    }),
    onSubmit: (values) => {
      dispatch(saveDeliveryData(values))
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const openCartCloseDelivery = () => {
    dispatch(closeDelivery())
    dispatch(openCart())
  }

  const openPaymentDetails = () => {
    dispatch(closeDelivery())
    dispatch(openPayment())
  }

  const handleClickOverlay = () => {
    dispatch(closeDelivery())
  }

  const buttonDisabled = () => {
    if (!form.isValid || !Object.keys(form.touched).length) {
      return true
    }
    return false
  }

  useEffect(() => {
    if (successIsOpen) {
      setShouldResetForm(true)
    }
  }, [successIsOpen])

  useEffect(() => {
    if (shouldResetForm) {
      form.resetForm()
      setShouldResetForm(false)
    }
  }, [shouldResetForm, form])

  return (
    <Aside
      title="Entrega"
      hasTitle
      className={deliveryIsOpen ? 'is-open' : ''}
      onClick={handleClickOverlay}
    >
      <form onSubmit={form.handleSubmit}>
        <Row>
          <InputGroup>
            <label htmlFor="client">Quem irá receber</label>
            <input
              type="text"
              id="client"
              name="client"
              value={form.values.client}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('client') ? 'error' : ''}
            />
          </InputGroup>
        </Row>
        <Row>
          <InputGroup>
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
          </InputGroup>
        </Row>
        <Row>
          <InputGroup>
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
          </InputGroup>
        </Row>
        <Row>
          <InputGroup>
            <label htmlFor="cep">CEP</label>
            <InputMask
              type="text"
              id="cep"
              name="cep"
              value={form.values.cep}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('cep') ? 'error' : ''}
              mask="99999-999"
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="number">Número</label>
            <input
              type="text"
              id="number"
              name="number"
              value={form.values.number}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('number') ? 'error' : ''}
            />
          </InputGroup>
        </Row>
        <Row marginBottom="24px">
          <InputGroup>
            <label htmlFor="aditional">Complemento (opcional)</label>
            <input
              type="text"
              id="aditional"
              name="aditional"
              value={form.values.aditional}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('aditional') ? 'error' : ''}
            />
          </InputGroup>
        </Row>
        <Button
          width="100%"
          backgroundColor="beige"
          customPadding="4px 0"
          marginBottom="8px"
          onClick={openPaymentDetails}
          type="button"
          disabled={buttonDisabled()}
        >
          Continuar com o pagamento
        </Button>
        <Button
          width="100%"
          backgroundColor="beige"
          customPadding="4px 0"
          onClick={openCartCloseDelivery}
          type="button"
        >
          Voltar para o carrinho
        </Button>
      </form>
    </Aside>
  )
}

export default Delivery
