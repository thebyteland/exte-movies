<template>
  <div class="w-full">
    <h1 class="w-full text-3xl text-blue-800 text-center">{{ $t('APP') }}</h1>
  </div>
</template>

<script setup>
  const { setLocale } = useI18n()
  const store = useAppStore()

  await store.getMovies()
</script>
