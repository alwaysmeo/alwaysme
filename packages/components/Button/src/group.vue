<template>
	<div :class="['me-button-group']">
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
defineOptions({ name: 'MeButtonGroup' })
</script>