<template>
  <button
    type="button"
    class="w-full h-64 border border-gray-300 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg bg-cover transition-all duration-200 hover:scale-105 overflow-hidden shadow-sm relative group"
    :style="{ backgroundImage: `url(${movieImage})` }"
    @click="goToDetail(movie.id)"
  > 
    <p class="absolute bottom-0 w-full h-1/2 rouned-b-lg bg-amber-400/80 p-2 text-black text-xl text-balance font-bold group-hover:bg-amber-600">
      {{ movieTitle }}
    </p>
  </button>
</template>

<script setup>
  const config = useRuntimeConfig()
  const props = defineProps({
    movie: Object
  })
  const { movie } = toRefs(props)
  const movieImage = computed(() => 
    `${config.public.imagesPath}${movie.value.backdrop_path}`
  )
  const movieTitle = computed(() => 
    `${movie.value.title} (${new Date(movie.value.release_date).getFullYear()})`
  )

  function goToDetail(id = '') {
    if (id) {
      const router = useRouter()

      router.push(`/details/${id}`)
    }
  }
</script>
