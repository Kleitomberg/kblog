<template>

  <article class="rounded-md border p-8 shadow-md">

    <h3 class="text-2xl font-semibold mb-5">{{ post.titulo }}</h3>

    <p class="mb-3">{{post.descricao}}</p>

    <router-link :to="`post/${post.id}`"  class="text-orange-500 cursor-pointer">ver mais -></router-link >


</article>
</template>

<script>

export default {
  name: 'CardPost',
  props: {
    post: {
      type: Object,
      default: () => ({
        title: 'Titulo',
        descricao: 'Contenido',
      }),
    },
  },
}

</script>
