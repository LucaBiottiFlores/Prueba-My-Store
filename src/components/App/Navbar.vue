<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light px-3">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img class="logo" src="../../assets/logo.png" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div
          class="navbar-nav d-flex justify-content-end"
          v-for="(item, $index) in items"
          :key="$index"
        >
          <a class="nav-link" href="#"
            ><router-link :to="item.to" class="nav-link">{{
              item.text
            }}</router-link></a
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    items: [
      { text: 'Inicio', to: '/inicio' },
      { text: 'Nuevo Producto', to: '/nuevo-producto' },
      { text: 'Carrito de Compras', to: '/carrito-de-compras' }
    ]
  })
}
</script>

<style>
.navbar {
  height: 150px;
  background: rgba(255, 255, 255, 0.007);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.082);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.logoText {
  color: black;
}

.logo {
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
}

.logoCircle {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: white;
}
</style>
