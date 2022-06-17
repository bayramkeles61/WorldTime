<script setup lang="ts">
import { format } from "date-fns";
import { Timezone } from "timezones.json";

const { timezone } = defineProps<{
  timezone: Timezone;
}>();

const hours = $computed(() =>
  Array.from({ length: 24 }, (_, i) => i + timezone.offset + 1)
);

const days = $computed(() => [
  hours.filter((i) => i < 0).map((i) => (i + 24) % 24),
  hours.filter((i) => i >= 0 && i < 24),
  hours.filter((i) => i >= 24).map((i) => i % 24),
]);

function isMidnight(h: number) {
  return h <= 5 || h >= 22;
}
function isNight(h: number) {
  return h <= 7 || h >= 18;
}
</script>

<template>
  <div class="flex gap-1 overflow-auto items-end">
    <template v-for="(day, idx) of days" :key="idx">
      <div v-if="day.length" class="flex border dark:border-true-gray-700 rounded overflow-hidden">
        <div v-for="i in day" :key="i" :class="[
          isMidnight(i) ? 'bg-sky-600 text-white dark:bg-slate-700'
            : isNight(i) ? 'bg-sky-100 dark:bg-sky-900'
              : '',
        ]" class="flex flex-col flex-none items-center justify-center w-8 h-8 p-0.5">
          <div v-if="i">
            {{ i }}
          </div>
          <div v-else class="text-xs leading-1em text-center">
            {{ format(now.value, "MMM") }}
            {{ format(now.value, "dd") }}
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
