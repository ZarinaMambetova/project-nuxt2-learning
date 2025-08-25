<template>
  <section>
    <h1>{{user.name}}</h1>
    <hr>
    <p>{{ user.email }}</p>
  </section>
</template>
<script>
export default {
  // Отслеживаем, что в адресе только цифры, иначен страница 404
  validate({ params }) {
    
    console.log('validate')
  return /^\d+$/.test(params.id)
  },
  async asyncData({$axios, params}) {
    const user = await $axios.$get('https://jsonplaceholder.typicode.com/users/' + params.id)
    // Возвращаем объект. И он доступен без data
return {user}
  },
}
</script>


