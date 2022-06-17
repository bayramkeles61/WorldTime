<script setup lang="ts"></script>

<template>
  <div class="relative select-none">
    <div class="absolute -left-6 top-0 bottom-0 flex flex-col">
      <div
        v-for="(zone, idx) of zones.value"
        :key="zone.name"
        class="flex flex-col flex-none text-xl justify-center items-center"
        :style="{ height: `${timezoneItemHeight}px` }"
      >
        <button
          v-if="idx !== 0"
          title="Move up"
          @click="moveZone(zone, -1)"
          class="-m-1px opacity-30 hover:opacity-100"
        >
          <Icon icon="ri-arrow-up-s-fill" />
        </button>
        <button
          v-if="homeZone.value !== zone.name"
          title="Remove"
          @click="removeZone(zone)"
          class="-m-1px opacity-30 hover:opacity-100"
        >
          <Icon icon="ri-close-fill" />
        </button>
        <button
          v-if="homeZone.value !== zone.name"
          title="Set to home zone"
          @click="setHomeZone(zone)"
          class="-m-1px opacity-30 hover:opacity-100 transform scale-75"
        >
          <Icon icon="ri:home-2-fill" />
        </button>

        <button
          v-if="idx !== zones.value.length - 1"
          title="Move down"
          @click="moveZone(zone, 1)"
          class="-m-1px opacity-30 hover:opacity-100"
        >
          <Icon icon="ri-arrow-down-s-fill" />
        </button>
      </div>
    </div>
    <div class="relative overflow-x-auto overflow-visible">
      <div
        v-for="zone of zones.value"
        :key="zone.name"
        class="border-b border-true-gray-100 dark:border-true-gray-700"
      >
        <div class="w-max flex flex-row items-center">
          <TimezoneItem
            :style="{
              height: `${timezoneItemHeight}px`,
              width: `${timezoneItemWidth}px`,
            }"
            :timezone="zone"
            class="flex-none px-3"
          />
          <TimeDial :timezone="zone" />
        </div>
      </div>
      <SelectionOverlay
        class="absolute inset-0 w-full"
        :style="{ left: `${timezoneItemWidth}px` }"
      />
    </div>
  </div>
</template>
