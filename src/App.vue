<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/App/Navbar.vue'

export default {
  components: { Navbar }
}
</script>
