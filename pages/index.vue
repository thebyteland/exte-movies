<template>
  <div class="w-full">
    <h1>{{ $t('APP') }}</h1>
  </div>
</template>

<script setup>
  const store = useAppStore()

  await store.getMovies()
</script>
