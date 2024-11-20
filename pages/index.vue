<template>
  <main class="w-full flex flex-col gap-4">
    <h1>{{ $t('APP') }}</h1>

    <ExteMoviesList :list="moviesList" title="MOVIES_LIST_SECTION_TITLE" />
  </main>
</template>

<script setup>
  const store = useAppStore()

  await store.getMovies()
  const moviesList = store.moviesList
</script>
