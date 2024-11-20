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
    }
  }
})
