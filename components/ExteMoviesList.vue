<template>
  <section class="w-full flex flex-col gap-4 bg-gray-200 shadow-sm rounded-lg px-4 py-8">
    <h2>{{ $t(title) }}</h2>

    <ul class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      <li v-for="(movie, index) in list" :key="`movieItem${index}`">
        <ExteMovieCard :movie="movie" />
      </li>
    </ul>
  </section>
</template>

<script setup>
  const props = defineProps({
    title: String,
    list: Array
  })
</script>