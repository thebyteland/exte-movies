<template>
  <main class="w-full flex flex-col gap-8">
    <h1>{{ movieTitle }}</h1>

    <section class="w-full rounded-lg shadow-sm border border-gray-300 bg-gray-200 overflow-hidden">
      <div class="w-full flex flex-col md:flex-row gap-4">
        <img :src="movieImage" :alt="currentMovie.original_title">

        <div class="flex flex-col w-full p-4">
          <p class="self-end w-fit rounded-lg bg-green-800 font-bold text-white p-1">
            {{ currentMovie.vote_average }} / 10
          </p>
          <ul class="w-full list-none flex flex-col gap-4">
            <li>
              <span class="block font-bold mb-2">{{ $t('MOVIE_DETAIL_GENRES') }}</span>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="(genre, index) in currentMovie.genres"
                  :key="`movieGenre${index}`"
                  class="px-2 py-1 rounded-sm bg-black text-white text-sm"
                >
                  {{ genre.name }}
                </span>
              </div>
            </li>
            <li>
              <span class="block font-bold mb-2">{{ $t('MOVIE_DETAIL_OVERVIEW') }}</span>
              <span>{{ currentMovie.overview }}</span>
            </li>
            <li>
              <span class="block font-bold mb-2">{{ $t('MOVIE_DETAIL_PRODUCTION') }}</span>
              <p class="flex flex-wrap gap-2">
                <span
                  v-for="(company, index) in currentMovie.production_companies"
                  :key="`movieComp${index}`"
                >
                  {{ company.name }} |
                </span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
  const config = useRuntimeConfig()
  const route = useRoute()
  const movieId = route.params.id
  const store = useAppStore()
  const currentMovie = await store.getMovieDetail(movieId)

  const movieImage = computed(() => 
    `${config.public.imagesPath}${currentMovie.backdrop_path}`
  )
  const movieTitle = computed(() => 
    `${currentMovie.title} (${new Date(currentMovie.release_date).getFullYear()})`
  )
</script>
