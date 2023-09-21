<template>
	<div class="container">
		<div class="header">
			<PageHeader title="Button 按钮" desc="按钮用于开始一个即时操作" />
		</div>
		<div class="center">
			<DisplayComponent title="Button">
				<me-button>Button</me-button>
			</DisplayComponent>
		</div>
		<me-divider>Api</me-divider>
		<div class="footer">footer</div>
	</div>
</template>

<script setup lang="ts">
	import { PageHeader, DisplayComponent } from '@components'
</script>

<style scoped lang="scss"></style>
