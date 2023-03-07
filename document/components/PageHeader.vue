<template>
	<div class="header">
		<div class="title">{{ props.title }}</div>
		<div class="desc">{{ props.desc }}</div>
		<me-tooltip content="前往GitHub">
			<me-button class="btn" @click="toIssues">
				<template #icon>
					<me-icon name="tag-linear" />
				</template>
				Issues
			</me-button>
		</me-tooltip>
	</div>
	<me-divider></me-divider>
</template>

<script setup lang="ts">
	const props = defineProps({
		title: {
			type: String,
			default: ''
		},
		desc: {
			type: String,
			default: ''
		}
	})

	function toIssues() {
		window.open('https://github.com/Alwaysmeo/alwaysme-design/issues', '_blank')
	}
</script>

<style scoped lang="scss">
	.header {
		padding: 50px 50px 30px 50px;
		.title {
			font-size: 32px;
			font-weight: 700;
			margin-bottom: 12px;
		}
		.desc {
			font-size: 14px;
			color: $info-color;
			display: inline-block;
		}
		> .btn {
			float: right;
		}
	}
</style>
