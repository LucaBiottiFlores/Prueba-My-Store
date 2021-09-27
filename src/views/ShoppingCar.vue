<template>
  <div class="shoppingCarView container">
    <h1 class="text-center pageTitle my-5 py-5 mx-auto">Carrito de Compras</h1>

    <div class="row">
      <button class="btnCard btn btn-light mx-auto" @click="clickToPay">
        Comprar
      </button>
      <p class="text-center my-3">
        Total a pagar: {{ $store.getters['shoppingCar/finalTotal'] }}
      </p>
    </div>

    <Product
      v-for="(product, $index) in $store.state.shoppingCar.allProducts"
      :key="$index"
      :product="product"
    />
  </div>
</template>

<script>
import Product from '../components/shoppingCar/Product.vue'

export default {
  components: {
    Product
  },
  //promesas simulan ajax y similares.
  methods: {
    async clickToPay() {
      await this.$store.dispatch('shoppingCar/buyProduct')
      alert('Compra realizada, gracias por preferirnos')
      this.$router.push('/inicio')
    }
  }
}
</script>

<style>
.shoppingCarView {
  margin-top: 8rem;
}
.btnCard {
  width: 50%;
  margin-bottom: 2rem;
  background: rgba(245, 208, 22, 0.541);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.233);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.btn:hover {
  background: rgba(243, 33, 94, 0.6);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.192);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
</style>
