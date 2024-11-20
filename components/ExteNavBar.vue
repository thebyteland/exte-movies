<template>
  <div class="w-full flex items-center justify-between rounded-sm p-4 bg-slate-800">
    <ul class="flex list-none gap-2 text-white">
      <li>
        <button type="button" class="hover:underline" @click="setLocale('en')">
          {{ $t('LANG_EN') }}
        </button> |
      </li>
      <li>
        <button type="button" class="hover:underline" @click="setLocale('es')">
          {{ $t('LANG_ES') }}
        </button>
      </li>
    </ul>
    <nav>
      <ul class="w-full flex gap-8 justify-end text-white text-lg lg:text-xl uppercase">
        <li><NuxtLink to="/" class="hover:underline">{{ $t('HOME_LINK') }}</NuxtLink></li>
        <li><NuxtLink to="my-list" class="hover:underline">{{ $t('MY_LIST_LINK') }}</NuxtLink></li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
  const { setLocale } = useI18n()
</script>