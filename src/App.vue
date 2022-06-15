<script setup lang="ts"></script>

<template>
	<div text-sans bg-gray:15 h-screen>
		<NavBar />
		<div border="~ base rounded" bg-white shadow mx8>
			<ActionBar />
			<TimeSchedular />
		</div>
	</div>
</template>

<style>
	.dark {
		background: #222;
		color: white;
		color-scheme: dark;
	}
</style>
