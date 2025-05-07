import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),
  actions: {
    addToCart(product) {
      const existing = this.items.find(p => p.id === product.id)
      if (existing) {
        existing.quantity += 1
      } else {
        this.items.push({ ...product, quantity: 1 })
      }
    },
    removeFromCart(index) {
      this.items.splice(index, 1)
    },
    clearCart() {
      this.items = []
    },
    getTotal() {
      return this.items.reduce((sum, item) => sum + item.quantity * item.price, 0)
    }
  }
})
