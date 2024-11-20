<template>
  <main class="w-full flex flex-col gap-4">
    <h1>{{ $t('APP') }}</h1>

    <ExteMoviesList />
  </main>
</template>

<script setup>
  const store = useAppStore()

  await store.getMovies()
</script>
