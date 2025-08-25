<!-- Создали файл с pages, называть надо так, как будет звучать ссылка на страницу. Это заменяет vue-router -->
<template>
  <section>
    <h1>About Page</h1>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, omnis dolorum, consequatur incidunt ut eum maiores iste quisquam enim atque deleniti facere repellat, accusamus quae vitae esse temporibus perferendis itaque?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, omnis dolorum, consequatur incidunt ut eum maiores iste quisquam enim atque deleniti facere repellat, accusamus quae vitae esse temporibus perferendis itaque?</p>

  </section>
</template>

<script>
export default {
  // В скобках указываем название файлов. Надо учитывать очередность, так как nuxt идет слева направо
  middleware: ['auth']
}
</script>

<style>

</style>