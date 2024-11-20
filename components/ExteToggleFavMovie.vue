<template>
  <div class="w-full">
    <button
      type="button"
      class="w-fit flex px-4 py-2 uppercase text-sm bg-amber-500 text-black mx-auto rounded-lg border border-amber-600 shadow-sm hover:bg-amber-800 hover:text-white"
      @click="toggleMovie"
    >
      {{ $t('ADD_FAV_BUTTON') }}
    </button>
  </div>
</template>

<script setup>
  const props = defineProps({
    movie: Object
  })
  const { movie } = toRefs(props)
  const rawMovieData = movie.value

  function toggleMovie() {
    const storedList = JSON.parse(localStorage.getItem('myMovies'))

    if (Array.isArray(storedList)) {
      const currentInStorage = storedList.find((item) => item.id === rawMovieData.id)

      if (currentInStorage) {
        // TODO: Remove from list
      } else {
        storedList.push(rawMovieData)
        localStorage.setItem('myMovies', JSON.stringify(storedList))
      }
    } else {
      localStorage.setItem('myMovies', JSON.stringify([rawMovieData]))
    }
  }
</script>