<script setup lang="ts"></script>

<template>
  <div class="h-screen font-sans dark:bg-gray-900">
    <NavBar />
    <div class="bg-white dark:bg-gray-800 border rounded-xl shadow mx-8">
      <ActionBar />
      <TimeSchedular />
    </div>
  </div>
</template>

<style>
* {
  font-family: "Georgia", "serif";
}
.dark {
  color: white;
  color-scheme: dark;
}
.shadow-big {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1), 3px 5px 20px rgba(0, 0, 0, 0.2);
}
</style>
