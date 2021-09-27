<template>
  <div class="container d-flex justify-content-center">
    <div class="card px-3 py-2">
      <div class="row">
        <div class="col-md-4">
          <img :src="product.image" class="w-100" alt="product-img" />
        </div>
        <div class="col-md-8 px-3">
          <div class="card-block px-3 py-4">
            <h4 class="card-title">{{ product.name }}</h4>
            <p class="card-text">Precio: ${{ product.price }}</p>
            <p class="card-text">Cantidad: {{ product.amount }}</p>
            <div class="btn-group" role="group" aria-label="Basic example">
              <button
                type="button"
                class="btn btn-primary"
                @click="
                  $store.dispatch('shoppingCar/substractProduct', product)
                "
              >
                -
              </button>
              <button
                type="button"
                class="btn btn-primary"
                @click="$store.dispatch('shoppingCar/addProduct', product)"
              >
                +
              </button>
            </div>
            <p class="card-text">
              SubTotal: ${{
                (product.amount * product.price).toLocaleString('de-DE')
              }}
            </p>
            <p class="card-text">
              Total: ${{
                parseInt(
                  product.price * (1 - product.discount / 100) * product.amount
                ).toLocaleString('de-DE')
              }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: { type: Object, required: true }
  }
}
</script>

<style>
.card {
  max-width: 90%;
  min-width: 90%;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.btn {
  background: rgba(243, 33, 94, 0.6);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.192);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
</style>
