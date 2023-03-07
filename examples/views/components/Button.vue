<template>
	<div style="width: 300px">
		<me-button type="primary" long>按钮</me-button>
	</div>
	<me-space>
		<me-button type="primary" shape="round" loading />
		<me-button type="dashed" shape="round">按钮</me-button>
		<me-button type="solid" shape="round">按钮</me-button>
		<me-button shape="round">按钮</me-button>
	</me-space>
	<me-space>
		<me-button type="primary">按钮</me-button>
		<me-button>按钮</me-button>
		<me-button type="dashed">按钮</me-button>
		<me-button type="solid">按钮</me-button>
	</me-space>
	<me-space>
		<me-button type="primary" disabled>按钮</me-button>
		<me-button disabled>按钮</me-button>
		<me-button type="dashed" disabled>按钮</me-button>
		<me-button type="solid" disabled>按钮</me-button>
	</me-space>
	<me-space>
		<me-button type="primary" loading>按钮</me-button>
		<me-button loading>按钮</me-button>
		<me-button type="dashed" loading>按钮</me-button>
		<me-button type="solid" loading>按钮</me-button>
	</me-space>
	<me-space>
		<me-button type="primary" ghost>按钮</me-button>
		<me-button ghost>按钮</me-button>
		<me-button type="dashed" ghost>按钮</me-button>
		<me-button type="solid" ghost>按钮</me-button>
	</me-space>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
</script>

<style scoped lang="scss"></style>
