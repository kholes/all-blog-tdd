<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
  </div>
</template>

<script>
import navbar from './components/NavBar'
export default {
  name: 'app',
  components: {
    navbar
  }
}
</script>
<style>
.navbar {
  border-radius: 0;
}
</style>
