export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const { id } = getQuery(event)
  const response: any = await $fetch(`${config.public.detailPath}/${id}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${config.secretToken}`,
      accept: 'application/json'
    }
  })
  const movieDetail: any = response || {}

  return movieDetail
})
