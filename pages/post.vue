<template>
  <div>
    <HeaderVue/>

    <div :class="['w-1/2 mx-auto my-20']">
    <h1 class="text-orange-600 font-semibold text-2xl"> {{post.titulo}}</h1>
    <p>{{post.descricao}}</p>

  </div>
  </div>
</template>

<script>
import { onMounted, ref, watch } from 'vue'
import supabase  from '../src/data/supabaseClient';



export default {
  name: "Post",
  components: {  },

  props: {

  },

  data() {
    return {
      post: {
        titulo: '',
        descricao: ''}
    }
  },

  methods: {

    async getPost() {
      const { data, error } = await supabase
        .from('post')
        .select()
        .eq('id', this.$route.params.id)
      this.post = data[0]
    }
  },

  created() {
    this.getPost()
  }


}
</script>
