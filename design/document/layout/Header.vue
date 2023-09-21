<template>
	<me-menu v-model:value="menu" height="60px" width="100vw" mode="horizontal">
		<li class="menu-item">LOGO</li>
		<me-menu-item value="home">首页</me-menu-item>
		<me-menu-item value="components">高级组件</me-menu-item>
		<me-menu-item value="shop">商店</me-menu-item>
		<me-menu-item value="other">其他</me-menu-item>
		<me-menu-item value="document">我的文档</me-menu-item>
	</me-menu>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	const menu = ref('home')
</script>

<style scoped lang="scss">
	.menu-item {
		flex-grow: 1;
		line-height: 60px;
	}
</style>
