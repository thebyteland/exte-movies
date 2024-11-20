export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const queryParams = '?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'
  const response: any = await $fetch(`${config.public.moviesPath}${queryParams}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${config.secretToken}`,
      accept: 'application/json'
    }
  })
  const moviesList: any = response?.results || []

  return moviesList
})
