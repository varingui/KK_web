<template>
  <div id="app" >
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Ajusta esto según tus necesidades */
}

.iframe-container {
  width: 70%; /* Ajusta esto según tus necesidades */
  height: 60%; /* Ajusta esto según tus necesidades */
  overflow: hidden;
  position: relative;
}
</style>