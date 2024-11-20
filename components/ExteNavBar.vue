<template>
  <nav class="w-full">
    <ul class="w-full flex gap-8 justify-end text-white text-lg lg:text-xl uppercase">
      <li><NuxtLink to="/" class="hover:underline">{{ $t('HOME_LINK') }}</NuxtLink></li>
      <li><NuxtLink to="my-list" class="hover:underline">{{ $t('MY_LIST_LINK') }}</NuxtLink></li>
    </ul>
  </nav>
</template>