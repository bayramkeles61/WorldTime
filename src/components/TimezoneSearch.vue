<script setup lang="ts">
	import Fuse from "fuse.js";
	import { Timezone } from "~/types";
	import { timezones } from "../composables/data";
	import { addToTimezone } from "../composables/state";

	const fuse = new Fuse(timezones, {
		keys: ["name"],
	});

	let input = $ref("");
	let index = $ref(0);
	const searchResult = computed(() => {
		return fuse.search(input);
	});

	function add(t: Timezone) {
		addToTimezone(t);
		input = "";
		index = 0;
	}
</script>

<template>
	<div relative>
		<input
			v-model="input"
			type="text"
			class="border"
			placeholder="Search timezone..."
			p="x3 y2"
			text-xl
			border="~ base rounded"
			bg-transparent
			w-full
		/>
		<div
			v-show="input"
			absolute
			top-full
			left-0
			right-0
			z-10
			border="~ base rounded"
			shadow
			bg-base
			max-h-100
			overflow-auto
		>
			<button
				v-for="(i, idx) of searchResult"
				:key="i.refIndex"
				block
				w-full
				px2
				pb1
				hover="bg-gray/5"
				border="b base"
				:class="idx === index ? 'bg-gray:10' : ''"
				@click="add(i.item)"
			>
				<div font-mono w-10 text-right>
					{{ i.item.offset }}
				</div>
				<div>
					{{ i.item.name }}
				</div>
			</button>
		</div>
	</div>
</template>
