<template>
    <section>
<form>
  <H1>Login page</H1>
  <div class="form-group">
    <input type="text" class="form-control">
  </div>

  <p>
    <nuxt-link to="/">To home page</nuxt-link>
  </p>

  <button class="btn btn-primary" type="submit">Login</button>
</form>
  </section>
</template>

<script>
export default {
layout: 'empty'
}
</script>

<style>
form {
width: 500px;
margin: 0 auto;
}
</style>