<template>
    <div class="product-card">
      <h3>{{ product.name }}</h3>
      <p>{{ product.price }} €</p>
      <button @click="addToCart">Ajouter au panier</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "ProductCard",
    props: {
      product: Object,
    },
    methods: {
      addToCart() {
        this.$emit("add-to-cart", { ...this.product, quantity: 1 });
      }
    }
  };
  </script>
  