<template>
  <div class="d-flex justify-content-center">
    <div class="card p-2 m-3 my-3 col-md-4" style="width: 18rem">
      <img :src="product.image" class="card-img-top" alt="..." />
      <div class="card-body"></div>
      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Autor(a): {{ product.author }}</li>
          <li class="list-group-item">
            Editorial: {{ product.publishingHouse }}
          </li>
          <li class="list-group-item">
            Descuento:
            {{
              product.specialOffer ? `${product.discount}%` : 'Sin descuento'
            }}
          </li>
        </ul>
        <div class="card-footer">
          <p>${{ product.price.toLocaleString('de-DE') }}</p>
        </div>
        <div class="card-footer">
          <button class="btn btn-sm btn-info" @click="addProductToShoppingCar">
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: { type: Object, required: true }
  },
  methods: {
    addProductToShoppingCar() {
      this.$store.dispatch('shoppingCar/addProduct', this.product)
    }
  }
}
</script>

<style>
img {
  max-height: 400px;
}
.card {
  min-height: 220px;
  max-height: 700px;
  max-width: 18rem;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.185);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
.cardTitle {
  font-size: 11px;
  font-weight: bold;
  text-align: center;
}
.card-footer {
  max-height: 60px;
  min-height: 30px;
}
</style>
