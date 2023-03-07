<template>
	<me-menu v-model:value="menu" height="calc(100vh - 60px)" top="60">
		<li class="menu-item">基础</li>
		<me-menu-item value="home">首页</me-menu-item>
		<me-menu-item value="components">高级组件组件</me-menu-item>
		<li class="menu-item">布局</li>
		<me-menu-item value="shop">商店</me-menu-item>
		<me-menu-item value="other">其他</me-menu-item>
		<me-menu-item value="document">我的文档</me-menu-item>
		<li class="menu-item">导航</li>
		<li class="menu-item">输入</li>
		<li class="menu-item">数据展示</li>
		<li class="menu-item">消息提醒</li>
	</me-menu>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	const menu = ref('home')
</script>

<style scoped lang="scss">
	.menu-item {
		width: 100%;
		height: 38px;
		line-height: 38px;
		font-size: 12px;
		color: $info-color;
		text-align: center;
		// background-color: #ffffff33;
		border-bottom: 1px solid #ffffff33;
	}
</style>
