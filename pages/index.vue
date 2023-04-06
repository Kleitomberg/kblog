<template>
  <div class="w-1/2 mx-auto my-20">

    <h1 class="text-3xl font-semibold text-orange-600">WELCOME TO KBLOG</h1>


    <CardPost v-for="post in posts" :key="post.id" v-bind:post="post" class="my-10" />

    <p v-if="error">error</p>


    <!--<button class="bg-orange-300 rounded-md p-2" @click="addPost">Add Postagem</button>-->
  </div>
</template>

<script>
import CardPost from '../components/CardPost.vue';
import supabase  from '../src/data/supabaseClient';

import { onMounted, ref } from 'vue'

export default {
    name: "IndexPage",
    components: { CardPost },

    setup() {

        const posts = ref([])
        const error = ref(null)


        async function getPosts() {
          let { data, error }  = await supabase
          .from('post')
          .select()
          console.log(data)
          posts.value = data
        }
        async function addPost() {
          const { data, error } = await supabase
            .from('post')
            .insert([
              { titulo: 'Post 2', descricao: 'Content 2', created_at: new Date() },
            ])
          console.log(data, error)
        }

        onMounted(() => {
          getPosts()
        })



        return {
          posts,
          error,
          addPost
        }
    }




}

</script>

<style scoped>

</style>
