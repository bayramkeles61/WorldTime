<script setup lang="ts"></script>

<template>
  <div class="flex items-center gap-2 text-xl px-8 pt-8 pb-2">
    <h1 class="text-2xl"><span class="font-bold">What time</span> works for you?</h1>
    <div class="flex flex-auto" />
    <a
      class="opacity-30 hover:opacity-100"
      href="https://github.com/bayramkeles61/WorldTime"
      target="_blank"
      title="GitHub"
    >
      <Icon icon="uil:github" />
    </a>
    <DarkSwitcher />
    <BuyMeCoffee class="ml-5" />
  </div>
</template>
