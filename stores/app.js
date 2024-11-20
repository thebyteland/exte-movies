export const useAppStore = defineStore('app', {
  state: () => ({
    version: '1.0.0',
    moviesList: []
  }),

  actions: {
    /**
     * Get movies list from API
     */
    async getMovies() {
      const response = await $fetch('/api/movies', {
        method: 'GET'
      })

      this.moviesList = response
    },

    /**
     * Get movies list from API
     */
    async getMovieDetail(movieId = '') {
      if (movieId) {
        const response = await $fetch(`/api/movie`, {
          method: 'GET',
          query: {
            id: movieId
          }
        })

        return response || {}
      }

      return {}

    }
  }
})
