<template>
  <section>
    <h1>{{ pageTitle }}</h1>

    <ul> <li v-for="user of users" :key="user.id">
      <a href="#" @click.prevent="openUser(user)">User {{ user.name }}</a>
    </li></ul>
  </section>
</template>

<script>
export default {
  async fetch({ store }) {
    if (store.getters['users/users'].length === 0) {
      await store.dispatch('users/fetch')
    }
  },
  // Если работаем со state, то тут уже не нужно
  // //  c asyncData есть полная разметка
  // async asyncData({$axios}) {
  //   const users = await $axios.$get('https://jsonplaceholder.typicode.com/users')
  //   // Возвращаем объект. И он доступен без data
// return {users}
//   },
  data: () => ({
    pageTitle: 'User list'
  }),
  computed: {
    users() {
      return this.$store.getters['users/users']
    }
  },
  // Во vue делали бы так. Но в nuxt есть asyncData . Там this не доступен
  // async mounted() {
  //   this.users = await this.$axios.$get('https://jsonplaceholder.typicode.com/users')
  // },
  methods: {
    openUser(user) {
      this.$router.push('/users/' + user.id)
    }
  }

}
</script>

<style>

</style>