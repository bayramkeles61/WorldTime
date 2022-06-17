<script setup lang="ts">
import { Timezone } from "../types";

const { timezone } = defineProps<{
  timezone: Timezone;
}>();

const formatter = new Intl.DateTimeFormat("en-US", {
  timeZone: timezone.name,
  hour12: false,
  hour: "numeric",
  minute: "numeric",
});
const state = $computed(() => timezone.name.split("/")[0].replace(/_/g, ""));
const city = $computed(() => timezone.name.split("/")[1]?.replace(/_/g, "") || "");
const offset = $computed(() => {
  let offset = timezone.offset - currentOffset.value
  return offset > 0 ? `+${offset}` : offset
}
);
const time = $computed(() => formatter.format(now.value));
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <div :title="`${timezone.offset} GMT`" class="w-8 m-auto opacity-80 font-bold text-center">
      {{ offset }}
    </div>
    <div class="flex flex-col text-left flex-auto">
      <div>
        {{ city }}
        <sup class="border dark:border-true-gray-700 rounded px-1">{{ timezone.abbr }}</sup>
      </div>
      <div class="text-sm opacity-50 leading-4">{{ state }}</div>
    </div>
    <div class="tabular-nums">
      {{ time }}
    </div>
    <slot />
  </div>
</template>
