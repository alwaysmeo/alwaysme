<template>
	<me-menu v-model:value="menu" height="60px" width="100vw" mode="horizontal">
		<me-menu-item value="home">首页</me-menu-item>
		<me-menu-item value="components">高级组件组件</me-menu-item>
		<me-menu-item value="shop">商店</me-menu-item>
		<me-menu-item value="other">其他</me-menu-item>
		<me-menu-item value="document">我的文档</me-menu-item>
	</me-menu>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	const menu = ref('home')
</script>

<style scoped lang="scss"></style>
