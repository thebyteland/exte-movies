<template>
  <div>
    <h1>Movie detail {{ movieId }}</h1>
  </div>
</template>

<script setup>
  const route = useRoute()
  const movieId = route.params.id
</script>
