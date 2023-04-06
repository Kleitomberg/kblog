<template>

<div class="">
<!---->
  <header class="my-3 flex justify-end p-2">


    <div
    :class="[
    'relative',
    'inline-flex',
    'w-16',
    'h-7',
    'rounded-lg',
    { 'bg-gray-500': !isActive, 'bg-gray-300': isActive }
    ]"
    >
      <button
      :class="[
        'w-7',
        'h-7',
        'rounded-full',
        'transition-transform',
        'duration-300',
        'ease-in-out',
        { 'translate-x-full bg-blue-500': isActive, 'bg-gray-300 left-0': !isActive }
      ]"
      @click="toggleButton"
      ></button>
    </div>

</header>

  <div :class="['w-1/2 mx-auto my-20']">



    <h1 class="text-3xl font-semibold text-orange-600">WELCOME TO KBLOG</h1>


    <CardPost v-for="post in posts" :key="post.id" v-bind:post="post" class="my-10" />

    <p v-if="error">error</p>


    <!--<button class="bg-orange-300 rounded-md p-2" @click="addPost">Add Postagem</button>-->
  </div>
</div>

</template>

<script>
import CardPost from '../components/CardPost.vue';
import supabase  from '../src/data/supabaseClient';

import { onMounted, ref, watch } from 'vue'


export default {
    name: "IndexPage",
    components: { CardPost },

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
