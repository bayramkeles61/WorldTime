<script setup lang="ts"></script>

<template>
  <div>
    <div>
      <div
        v-for="(zone, idx) of zones.value"
        :key="zone.name"
        class="relative border-b rounded px-4 py-2"
      >
        <TimezoneItem :timezone="zone">
          <TimeDial :timezone="zone" />
        </TimezoneItem>
        <div class="-left-6 top-0 bottom-0 flex flex-col justify-center">
          <button
            v-if="idx !== 0"
            icon-btn
            title="Move up"
            @click="moveZone(zone, -1)"
            class="-m-1px opacity-30 hover:opacity-100"
          >
            <Icon icon="ri-arrow-up-s-fill" />
          </button>
          <button
            title="Remove"
            @click="removeZone(zone)"
            class="-m-1px opacity-30 hover:opacity-100"
          >
            <Icon icon="i-ri-close-fill" />
          </button>
          <button
            title="Set to home zone"
            class="-m-1px opacity-30 hover:opacity-100 scale-75"
          >
            <Icon icon="i-ri-home-2-fill" />
          </button>
          <button
            v-if="idx !== zones.value.length - 1"
            title="Move down"
            @click="moveZone(zone, +1)"
            class="-m-1px opacity-30 hover:opacity-100"
          >
            <Icon icon=" i-ri-arrow-down-s-fill" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
