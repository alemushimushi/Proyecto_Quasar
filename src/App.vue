<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400&display=swap');


h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
}

.text-courier {
  font-family: 'Courier New', Courier, monospace;
}


body {
  font-family: 'IBM Plex Sans', sans-serif;
}

.bg-pd {
  background-position: 0px 0px;
  background-image: url("assets/fondo-de-estatica.png") !important;
  background-size: 200px 200px;
}
</style>