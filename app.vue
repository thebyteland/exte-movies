<template>
  <div class="w-full bg-slate-600">
    <div class="flex flex-col w-full max-w-screen-xl mx-auto p-4">
      <ExteNavBar />
      <NuxtPage class="min-h-[90vh] py-4"/>
    </div>

    <footer class="bg-black text-white py-4">
      <div class="flex flex-col w-full max-w-screen-xl mx-auto p-4">
        <p>{{ $t('FOOTER_TEXT') }}</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
  const { setLocale } = useI18n()
</script>
