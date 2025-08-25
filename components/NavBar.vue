<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">

    <a class="navbar-brand" href="#">Nuxt SSR</a>

    <div class="collapse navbar-collapse">
      <ul class="navbar-nav me-auto ">
        <li class="nav-item ">
          <!-- active-class=" active" - прописываем активный класс, для стилизации активной ссылки
          no-prefetch - исключает лишние загрузки при переходе по страницам. Если зашли на about, то подгрузилась только
          about.js. Без этого свойства будут грузиться и другие страницы
           exact - страница home - это ссылка на слеш. Чтобы она не была всегда активной, так как слеш всегла присутствует в ссылках,
          нужно писать это свойство-->
          <nuxt-link class="nav-link" active-class=" active" no-prefetch exact to="/">Home</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" active-class=" active" to="/about">About</nuxt-link>
        </li>
                <li class="nav-item">
          <nuxt-link class="nav-link" active-class=" active" to="/users">Users</nuxt-link>
        </li>
                        <li class="nav-item" v-if="!hasToken">
          <nuxt-link class="nav-link" active-class=" active" to="/login">Login</nuxt-link>
        </li>
                        <li class="nav-item" v-else>
          <a @click.prevent="logout" class="nav-link" to="#">Logout</a>
        </li>
      </ul>
    </div>
</nav>
</template>

<script>
export default {
  computed: {
    hasToken() {
        return this.$store.getters.hasToken
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
     this.$router.push('/login')
  }
}
}
</script>