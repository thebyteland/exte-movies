<template>
  <main class="w-full flex flex-col gap-8">
    <h1>{{ $t('MY_LIST_TITLE') }}</h1>

    <ClientOnly >
      <ExteMoviesList v-if="moviesList && moviesList.length" :list="moviesList" title="MY_MOVIES_LIST_TITLE" />
      <p v-else class="text-2xl text-center bg-white rounded-lg p-4">{{ $t('MY_MOVIES_EMPTY_LIST') }}</p>
    </ClientOnly>
  </main>
</template>

<script setup>
  const moviesList = ref([])

  onMounted(async () => {
    moviesList.value = JSON.parse(localStorage.getItem('myMovies'))
  })
</script>
