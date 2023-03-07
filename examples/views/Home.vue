<template>
	<!-- <me-space class="always-me" direction="vertical">
		<div style="width: 800px">
			<me-divider textalign="center" dashed>Text</me-divider>
			<me-divider textalign="center" />
			<div>
				<span>Text</span>
				<me-divider orientation="vertical" />
				<span>Text</span>
				<me-divider orientation="vertical" />
				<span>Text</span>
			</div>
		</div>

		<div style="width: 300px">
			<me-button type="primary" long @click="handleClick">按钮</me-button>
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

		<me-space>
			<me-link underline>链接1</me-link>
			<me-link disabled>链接2</me-link>
			<me-link>链接3</me-link>
		</me-space>

		<div style="width: 400px">
			<me-timeline :position="visible1 ? 'left' : 'right'">
				<me-timeline-item color="#147ffa">
					<template #title>2022-02-21 12:00:00</template>
					<div>我的内容内容内容内容内容内容内容内容</div>
				</me-timeline-item>
				<me-timeline-item title="2022-02-21 12:23:00" color="#147ffa">
					<template #icon>
						<me-icon name="collection-linear" size="14" />
					</template>
					<div>我的内容内容</div>
				</me-timeline-item>
				<me-timeline-item>
					<template #title>2022-02-21 12:00:00</template>
					<div>我的内容内容内容内容内容内容内容内容</div>
				</me-timeline-item>
			</me-timeline>
		</div>

		<me-space>
			<me-stepper v-model:value="value" disabled></me-stepper>
			<me-stepper v-model:value="value"></me-stepper>
		</me-space>

		<me-space>
			<me-tag closable icon="issues" size="small">标签1</me-tag>
			<me-tag color="red" closable>标签2</me-tag>
			<me-tag color="purple" closable closeIcon="push" size="large">标签3</me-tag>
			<me-tag color="#147ffa" shape="square" closable>标签4</me-tag>
			<me-tag color="blue" closable>标签5</me-tag>
			<me-tag color="arcoblue" closable>标签5</me-tag>
		</me-space>

		<me-space>
			<me-switch width="10rem">
				<template #on-icon>
					<me-icon name="arrow-left-solid" />
				</template>
				<template #off-icon>
					<me-icon name="arrow-right-solid" />
				</template>
			</me-switch>
			<me-switch shape="square" on-color="var(--me-danger-color)"></me-switch>
			<me-switch shape="round" on-color="var(--me-success-color)" disabled></me-switch>
			<me-switch type="block" on-color="var(--me-warning-color)"></me-switch>
			<me-switch type="block" shape="square"></me-switch>
			<me-switch type="block" shape="round" disabled></me-switch>
		</me-space>

		<me-space>
			<me-image v-for="item in url" :key="item" :src="item" :list="url" width="180px" height="100px"></me-image>
			<me-image src="" width="180px" height="100px"></me-image>
			<me-button type="primary" @click="visible = !visible">预览</me-button>
			<me-image-preview :infinite="false" :list="url" v-model:visible="visible" />
		</me-space>

		<me-space>
			<me-tooltip content="文字提示1" position="top" color="#147ffa" trigger="click">
				<me-button>top</me-button>
			</me-tooltip>
			<me-tooltip content="文字提示2" position="top-start" trigger="focus">
				<me-button>top-start</me-button>
			</me-tooltip>
			<me-tooltip content="文字提示3dasdas" position="top-end">
				<me-button>top-end</me-button>
			</me-tooltip>
			<me-tooltip content="文字提示4" position="bottom" :offset="[10, -10]">
				<me-button>bottom</me-button>
			</me-tooltip>
			<me-tooltip content="文字提示5" position="bottom-start">
				<me-button>bottom-start</me-button>
			</me-tooltip>
			<me-tooltip content="文字提示6" position="bottom-end">
				<me-button>bottom-end</me-button>
			</me-tooltip>
			<me-tooltip content="文字提示7" position="left">
				<me-button>left</me-button>
			</me-tooltip>
			<me-tooltip content="文字提示8" position="left-start">
				<me-button>left-start</me-button>
			</me-tooltip>
			<me-tooltip content="文字提示9" position="left-end">
				<me-button>left-end</me-button>
			</me-tooltip>
			<me-tooltip content="文字提示10" position="right">
				<me-button>right</me-button>
			</me-tooltip>
			<me-tooltip content="文字提示11" position="right-start">
				<me-button>right-start</me-button>
			</me-tooltip>
			<me-tooltip content="文字提示12" position="right-end">
				<me-button>right-end</me-button>
			</me-tooltip>
		</me-space>
	</me-space>

	<me-menu v-model:value="selectMenu" height="calc(100vh - 60px)" top="60">
		<me-menu-item value="home">首页</me-menu-item>
		<me-menu-item value="components">高级组件</me-menu-item>
		<me-menu-item value="shop">商店</me-menu-item>
		<me-menu-item value="other">其他</me-menu-item>
		<me-menu-item value="document">我的文档</me-menu-item>
	</me-menu>
	<me-menu v-model:value="selectMenu" height="60px" width="100vw" mode="horizontal">
		<me-menu-item value="home">首页</me-menu-item>
		<me-menu-item value="components">高级组件组件</me-menu-item>
		<me-menu-item value="shop">商店</me-menu-item>
		<me-menu-item value="other">其他</me-menu-item>
		<me-menu-item value="document">我的文档</me-menu-item>
	</me-menu> -->
	首页
</template>

<script setup lang="ts">
	import { useTheme } from '../../packages/hooks'
	import { ref } from 'vue'

	const { setTheme } = useTheme()

	const handleClick = (e: Event) => {
		visible1.value = !visible1.value
		setTheme(visible1.value ? 'dark' : 'light')
	}
	const url = ref([
		'http://files.drcloud.me/727788e6-5841-49fb-902e-5c5b3a240bc1',
		'http://files.drcloud.me/2ab32929-3827-4807-a308-13d56753ffbe',
		'http://files.drcloud.me/04bd11d6-1e5a-451a-9177-72699c681992',
		'http://files.drcloud.me/50602bfc-b603-4b45-a629-b0f474601f29'
	])
	const visible = ref(false)
	const visible1 = ref(false)
	const show = ref(false)
	const value = ref(1)
	const selectMenu = ref('home')
</script>

<style scoped lang="scss">
	.always-me {
		box-sizing: border-box;
		padding: 30px 30px 120px 30px;
	}
</style>
