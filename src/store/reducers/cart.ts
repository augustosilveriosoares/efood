import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: Menu[]
  isOpen: boolean
  checkIsOpen: boolean
}
const initialState: CartState = {
  items: [],
  isOpen: false,
  checkIsOpen: false
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Menu>) => {
      const product = state.items.find((item) => item.id == action.payload.id)
      if (product === undefined) {
        state.items.push(action.payload)
      } else {
        alert('o produto ja esta no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    openCheck: (state) => {
      state.checkIsOpen = true
    },
    closeCheck: (state) => {
      state.checkIsOpen = false
    },
    clear: (state) => {
      state.items = []
    }
  }
})
export const { add, remove, open, close, openCheck, closeCheck, clear } =
  cartSlice.actions
export default cartSlice.reducer
