<script setup lang="ts">
const top = $ref(0);
const bottom = $ref(0);
let leftEdge = $ref(300);
let rightEdge = $ref(100);
let left = $computed(() => Math.min(leftEdge, rightEdge));
let right = $computed(() => Math.max(leftEdge, rightEdge));

const { pressed } = useMousePressed();
const { x, y } = useMouse();
const el = ref<HTMLElement>();
const box = reactive(useElementBounding(el));

useEventListener("mousedown", (e) => {
  leftEdge = x.value - box.left;
});

watchEffect(() => {
  if (!pressed.value) return;
  const dx = x.value - box.left;
  rightEdge = x.value - box.left;
});

const position = computed(() => ({
  left: `${left}px`,
  top: `${top}px`,
  bottom: `${bottom}px`,
  width: `${right - left}px`,
}));

const leftWhiteout = computed(() => ({
  left: "0",
  top: `${top}px`,
  bottom: `${bottom}px`,
  width: `${left}px`,
}));
const rightWhiteout = computed(() => ({
  right: "0",
  top: `${top}px`,
  bottom: `${bottom}px`,
  left: `${right}px`,
}));
</script>

<template>
  <div v-show="pressed" ref="el" class="pointer-events-none">
    <div :style="leftWhiteout" class="absolute bg-white opacity-50"></div>
    <div :style="rightWhiteout" class="absolute bg-white opacity-50"></div>
    <div
      class="absolute border-3 rounded shadow border-green-600"
      :style="position"
    ></div>
  </div>
</template>
