<template>
	<div class="display-component">
		<div class="header">
			<me-link>{{ props.title }}</me-link>
		</div>
		<div class="center">
			<div class="left">
				<slot />
			</div>
			<div class="right">1</div>
		</div>
		<div class="footer">
			<me-icon name="code" />
		</div>
	</div>
</template>

<script setup lang="ts">
	const props = defineProps({
		title: {
			type: String,
			default: ''
		}
	})
</script>

<style scoped lang="scss">
	.display-component {
		margin: 32px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 300px;
		border: 1px solid #cfd0d1;
		border-radius: 12px;
		.header {
			padding: 12px 24px;
			border-bottom: 1px solid #cfd0d1;
		}
		.center {
			text-align: center;
			display: flex;
			justify-content: space-between;
			flex-grow: 1;
			.left {
				padding: 24px;
				flex-grow: 1;
			}
			.right {
				min-width: 300px;
				border-left: 1px solid #cfd0d1;
			}
		}
		.footer {
			height: 40px;
			border-top: 1px solid #cfd0d1;
		}
	}
</style>
