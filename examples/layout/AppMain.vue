<template>
	<div class="app">
		<router-view :key="route.path" v-slot="{ Component }">
			<component :is="Component" />
		</router-view>
	</div>
</template>

<script setup lang="ts">
	import { useRoute } from 'vue-router'
	const route = useRoute()
</script>

<style scoped lang="scss">
	.app {
		padding-top: 60px;
		padding-left: 60px;
	}
</style>
