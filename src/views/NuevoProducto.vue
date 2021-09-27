<template>
  <div class="bookStoreForm container mb-5 pb-3">
    <h1 class="text-center pageTitle py-5 mx-auto">Nuevo Producto</h1>

    <form @submit.prevent="addNewProduct">
      <div class="form-group">
        <label for="name">Nombre</label>
        <input
          type="text"
          class="form-control"
          id="name"
          name="name"
          minlength="4"
          maxlength="40"
          required
          v-model="product.name"
        />
      </div>

      <div class="form-group">
        <label for="category">Categoria</label>
        <select
          name="category"
          id="category"
          class="form-control"
          required
          v-model="product.category"
        >
          <option value="" selected disabled>Elija una opción</option>
          <option value="Novela Contemporanea">Novela Contemporanea</option>
          <option value="Manga">Manga</option>
        </select>
      </div>

      <div class="form-group">
        <label for="image">URL Imagen</label>
        <input
          type="text"
          class="form-control"
          id="image"
          name="image"
          required
          v-model="product.image"
        />
      </div>

      <div class="form-group">
        <label for="price">Precio</label>
        <input
          v-model.number="product.price"
          type="number"
          min="100"
          max="9999"
          step="100"
          class="form-control"
          id="price"
          name="price"
          required
        />
      </div>
      <div class="form-group">
        <label for="stock">Stock</label>
        <input
          v-model.number="product.stock"
          type="number"
          min="100"
          max="9999"
          step="100"
          class="form-control"
          id="stock"
          name="stock"
          required
        />
      </div>

      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="specialOffer"
          v-model="product.specialOffer"
        />
        <label class="form-check-label" for="specialOffer"> Oferta </label>
      </div>

      <div class="form-group" v-if="product.specialOffer">
        <label for="discount">Descuento</label>
        <input
          type="number"
          class="form-control"
          id="discount"
          name="discount"
          required
          v-model.number="product.discount"
          min="0"
          max="99"
          step="1"
        />
      </div>

      <button class="btn btn-light" type="submit">Crear producto</button>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    product: {
      name: null,
      category: null,
      publishingHouse: null,
      specialOffer: false,
      discount: null,
      price: null,
      author: null,
      image: ''
    }
  }),
  methods: {
    addNewProduct() {
      this.$store.dispatch('products/createProduct', { ...this.product })
      this.$router.push('/')
    }
  }
}
</script>

<style>
.bookStoreForm {
  margin-top: 8rem;
}
.pageTitle {
  background: rgba(255, 255, 255, 0.096);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.219);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
</style>
