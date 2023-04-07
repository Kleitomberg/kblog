<template>
<header class="my-3 flex justify-between p-2 lg:px-8">

<div class="flex items-center">

  <h1 class="text-2xl font-semibold ml-2">KBLOG</h1>

  <nav class="mx-3">
    <ul class="flex items-center">
      <li class="mx-2">
        <NuxtLink  to="/">Início</NuxtLink >
      </li>
      <li class="mx-2">
        <NuxtLink to="/sobre">Sobre</NuxtLink >
      </li>
      <li class="mx-2">
        <NuxtLink to="/contatos">Contatos</NuxtLink>
      </li>
    </ul>
  </nav>
</div>

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


</template>

<script>
import { onMounted, ref, watch } from 'vue'
export default {
    name: "HeaderVue",
    components: {  },

    setup() {


        const isActive = ref(false)

        const theme = ref('light')

        function toggleButton() {
          isActive.value = !isActive.value
          console.log(isActive.value)
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




        return {


          toggleButton,
          isActive,
          theme
        }
    }




}

</script>
