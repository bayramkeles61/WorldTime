<script setup lang="ts"></script>

<template>
  <div class="h-screen bg-white overflow-hidden dark:bg-true-gray-900">
    <NavBar />
    <div
      class="bg-white dark:bg-true-gray-800 border border-true-gray-100 dark:border-true-gray-700 rounded-xl shadow mx-8"
    >
      <ActionBar />
      <TimeSchedular />
    </div>
  </div>
</template>

<style>
* {
  font-family: "Philosopher";
}
.dark {
  color: white;
  color-scheme: dark;
}
.shadow-big {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1), 3px 5px 20px rgba(0, 0, 0, 0.2);
}
</style>
