<script setup lang="ts">
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <button @click="toggleDark()" class="opacity-30 hover:opacity-100">
    <Icon v-if="isDark" icon="uil:sun" />
    <Icon v-else icon="uil:moon" />
  </button>
</template>
