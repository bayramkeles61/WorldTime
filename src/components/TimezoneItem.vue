<script setup lang="ts">
import { Timezone } from "../types";

const { timezone } = defineProps<{
  timezone: Timezone;
}>();

const formatter = new Intl.DateTimeFormat("en-US", {
  timeZone: timezone.name,
  hour: "numeric",
  minute: "numeric",
});

const state = $computed(() => timezone.name.split("/")[0].replace(/_/g, ""));
const city = $computed(() => timezone.name.split("/")[1]?.replace(/_/g, "") || "");
const offset = $computed(() => {
  let offset = timezone.offset - homeOffset.value;
  return offset > 0 ? `+${offset}` : offset;
});
const time = $computed(() => formatter.format(now.value));
</script>

<template>
  <div class="flex items-center gap-3">
    <div
      :title="`${timezone.offset} GMT`"
      class="w-8 m-auto opacity-80 font-bold text-center"
    >
      <div v-if="timezone.name === homeZone.value" class="opacity-50 m-auto">
        <Icon icon="ri:home-2-fill" />
      </div>
      <div v-else class="text-sky-600">{{ offset }}</div>
    </div>
    <div class="flex flex-col text-left flex-auto w-30 whitespace-nowrap">
      <div>
        <span class="overflow-hidden text-ellipsis mr-1">{{ city }}</span>
        <sup class="border dark:border-true-gray-700 rounded px-1">{{
          timezone.abbr
        }}</sup>
      </div>
      <div class="text-sm opacity-50 leading-1em">{{ state }}</div>
    </div>
    <div class="w-20 tabular-nums text-sm text-right m-auto">
      {{ time }}
    </div>
  </div>
</template>
