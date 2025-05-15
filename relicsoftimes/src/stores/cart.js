// Exemple store/pinia cart.js
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: []
  }),
  actions: {
    addToCart(product) {
      this.cartItems.push(product)
    },
    clearCart() {
      this.cartItems = []
    }
  },
  getters: {
    totalCartPrice(state) {
      return state.cartItems.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2)
    }
  }
})
