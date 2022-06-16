<script setup lang="ts">
import { Timezone } from "timezones.json";

const props = defineProps<{
  timezone: Timezone;
}>();
</script>

<template>
  <div class="flex">
    <div v-for="i in 24" :key="i" class="border rounded w-8 h-8">
      {{ i }}
    </div>
  </div>
</template>
