<template>
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
      </button>
      <router-link class="navbar-brand" to="/">Home</router-link>
    </div>
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li><router-link to="/blog">Blog <span class="sr-only">(current)</span></router-link></li>
        <li><router-link to="/admin">Admin</router-link></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><router-link to="login">Login</router-link></li>
      </ul>
    </div>
  </div>
</nav>
</template>
<script>
export default {
}
</script>