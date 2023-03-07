<template>
	<div class="container">
		<div class="header">
			<div class="title">Button 按钮</div>
			<div class="desc">按钮用于开始一个即时操作</div>
			<me-tooltip content="前往GitHub">
				<me-button class="btn" @click="toIssues">Issues</me-button>
			</me-tooltip>
		</div>
		<me-divider></me-divider>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue'

	function toIssues() {
		window.open('https://github.com/Alwaysmeo/alwaysme-design/issues', '_blank')
	}
</script>

<style scoped lang="scss"></style>
