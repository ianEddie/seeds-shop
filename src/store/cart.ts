import type { Product, Store } from 'types'
import { create, type StateCreator } from 'zustand'
import { persist } from 'zustand/middleware'

const storeApi: StateCreator<Store> = (set) => ({
  cart: [],
  addToFavorites: (product: Product) => {
    set((state) => ({
      cart: [...state.cart, { ...product, quantity: 1 }]
    }))
  },
  removeFromCart: (id: number) => {
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== id)
    }))
  },
  clearCart: () => {
    set({ cart: [] })
  },
  increaseQuantity: (id: number) => {
    set((state) => ({
      cart: state.cart.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    }))
  },
  decreaseQuantity: (id: number) => {
    set((state) => ({
      cart: state.cart.map((product) =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    }))
  },

})

export const useStore = create<Store>()(
  persist(storeApi, {
    name: 'favorites-storage'
  })
)
