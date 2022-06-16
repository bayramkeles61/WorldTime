<script setup lang="ts">
import Fuse from "fuse.js";
import { Timezone } from "~/types";

const fuse = new Fuse(timezones, {
  keys: ["name"],
});

let input = $ref("");
let index = $ref(0);
const searchResult = $computed(() => {
  return fuse.search(input);
});

function add(t: Timezone) {
  addToTimezone(t);
  input = "";
  index = 0;
}
function onKeyDown(e: KeyboardEvent) {
  if (e.key === "ArrowDown") {
    index = (index + 1) % searchResult.length;
  } else if (e.key === "ArrowUp") {
    index = (index - 1 + searchResult.length) % searchResult.length;
  } else if (e.key === "Enter") {
    add(searchResult[index].item);
  }
}
</script>

<template>
  <div class="relative">
    <input
      v-model="input"
      type="text"
      placeholder="Search timezone..."
      @keydown="onKeyDown"
      class="w-full border rounded bg-transparent text-xl px-3 py-2"
    />
    <div
      v-show="input"
      ref="modal"
      class="absolute overflow-auto max-h-full bg-white dark:bg-gray-800 top-full left-0 right-0 z-10 border rounded-xl shadow-big"
    >
      <button
        v-for="(i, idx) of searchResult"
        :key="i.refIndex"
        class="block w-full px-2 pb-1 hover:bg-gray-100 border-b rounded"
        :class="idx === index ? 'bg-gray-100' : ''"
        @click="add(i.item)"
      >
        <TimezoneItem :timezone="i.item" />
      </button>
    </div>
  </div>
</template>
