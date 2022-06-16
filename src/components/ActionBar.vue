<script setup lang="ts">
const { modelValue } = defineProps<{
  modelValue?: boolean;
}>();
</script>

<template>
  <div class="border-b border-gray-100 dark:border-gray-600 p-4">
    <TimezoneSearch />
  </div>
</template>
