<script setup lang="ts">
	import { Timezone } from "../types";

	const { timezone } = defineProps<{
		timezone: Timezone;
	}>();

	const state = $computed(() => timezone.name.split("/")[0]);
	const city = $computed(() => timezone.name.split("/")[1]);
	const offset = $computed(() =>
		timezone.offset > 0 ? `+${timezone.offset}` : `-${timezone.offset}`
	);
</script>

<template>
	<div flex="~" items-center gap3>
		<div w-8 ma op80 font-bold text-center>
			<div v-if="timezone.name" i-ri-home-2-fill op50 ma />
			<div v-else text-sky6>
				{{ offset }}
			</div>
		</div>
		<div flex="~col" text-left flex-auto w-30 ws-nowrap>
			<div>
				<span of-hidden text-ellipsis mr-1>{{ city }}</span>
				<!-- <sup border="~ base rounded" px1>{{ timezone.abbr }}</sup> -->
			</div>
			<div text-sm op50 leading-1em>{{ state }}</div>
		</div>
		<!-- <div tabular-nums ma text-sm w-20 text-right>
    {{ time }}
    </div> -->
	</div>
</template>
