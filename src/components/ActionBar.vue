<script setup lang="ts">
const { modelValue } = defineProps<{
  modelValue?: boolean;
}>();
</script>

<template>
  <div class="p-4">
    <TimezoneSearch />
  </div>
</template>
