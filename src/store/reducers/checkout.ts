import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type DeliveryFormData = {
  client: string
  address: string
  city: string
  cep: string
  number: string
  aditional?: string
}

type CheckoutState = {
  deliveryIsOpen: boolean
  paymentIsOpen: boolean
  successIsOpen: boolean
  deliveryFormData: DeliveryFormData
}

const initialState: CheckoutState = {
  deliveryIsOpen: false,
  paymentIsOpen: false,
  successIsOpen: false,
  deliveryFormData: {
    client: '',
    address: '',
    city: '',
    cep: '',
    number: '',
    aditional: ''
  }
}

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    openDelivery: (state) => {
      state.deliveryIsOpen = true
    },
    closeDelivery: (state) => {
      state.deliveryIsOpen = false
    },
    saveDeliveryData: (state, action: PayloadAction<DeliveryFormData>) => {
      state.deliveryFormData = action.payload
    },
    openPayment: (state) => {
      state.paymentIsOpen = true
    },
    closePayment: (state) => {
      state.paymentIsOpen = false
    },
    openSuccess: (state) => {
      state.successIsOpen = true
    },
    closeSuccess: (state) => {
      state.successIsOpen = false
    }
  }
})

export const {
  openDelivery,
  closeDelivery,
  saveDeliveryData,
  openPayment,
  closePayment,
  openSuccess,
  closeSuccess
} = checkoutSlice.actions
export default checkoutSlice.reducer
