<template>
  <div
    class="
      allBooksSection
      container
      d-flex
      justify-content-center
      flex-column
      mx-auto
      row
      mb-5
      pb-3
    "
  >
    <h1 class="pageTitle py-5 mx-auto">Todos Los Libros</h1>
    <div class="">
      <div
        class=""
        v-for="(product, $index) in $store.state.products.allProducts"
        :key="$index"
      >
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/products/ProductCard.vue'
export default {
  components: { ProductCard }
}
</script>

<style>
.allBooksSection {
  margin-top: 8rem;
}

.pageTitle {
  width: 90%;

  background: rgba(255, 255, 255, 0.096);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.219);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.pageTitle {
  text-align: center;
  margin-bottom: 5rem;
}
</style>
