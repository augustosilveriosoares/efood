import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: CategoryItemType[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CategoryItemType>) => {
      const item = state.items.find((item) => item.id === action.payload.id)

      if (!item) {
        state.items.push(action.payload)
      } else {
        alert('Este item já foi adicionado ao carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    openCart: (state) => {
      state.isOpen = true
    },
    closeCart: (state) => {
      state.isOpen = false
    },
    clearCart: (state) => {
      state.items = []
    }
  }
})

export const { add, openCart, closeCart, remove, clearCart } = cartSlice.actions
export default cartSlice.reducer
