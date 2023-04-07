<template>

<div class="">
<!---->
  <HeaderVue/>

  <div :class="['w-1/2 mx-auto my-20']">



    <h1 class="text-3xl font-semibold text-orange-600">Welcome to Kblog</h1>


    <CardPost v-for="post in posts" :key="post.id" v-bind:post="post" class="my-10" />

    <p v-if="error">error</p>


    <!--<button class="bg-orange-300 rounded-md p-2" @click="addPost">Add Postagem</button>-->
  </div>
</div>

</template>

<script>
import CardPost from '../components/CardPost.vue';
import supabase  from '../src/data/supabaseClient';
import HeaderVue from '../components/HeaderVue.vue';

import { onMounted, ref, watch } from 'vue'


export default {
    name: "IndexPage",
    components: { CardPost,HeaderVue },

    setup() {

        const posts = ref([])
        const isActive = ref(false)
        const error = ref(null)
        const theme = ref('light')

        function toggleButton() {
          isActive.value = !isActive.value
          console.log(isActive.value)
        }


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



        function toggleTheme() {
          const body = document.querySelector('body')
          if (theme.value === 'dark') {
            body.classList.add('dark')
            body.classList.remove('light')

          } else {
            body.classList.add('light')
            body.classList.remove('dark')
          }
        }

        watch(isActive, (val) => {
          theme.value = val ? 'dark' : 'light'
          toggleTheme()

        })

        onMounted(() => {
          getPosts()
        })



        return {
          posts,
          error,
          addPost,
          toggleButton,
          isActive,
          theme
        }
    }




}

</script>

<style>

.dark {
  background-color: #1a202c;
  color: #fff;
}
.light {
  background-color: #fff;
  color: #000;
}

</style>
