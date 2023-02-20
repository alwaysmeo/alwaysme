<template>
	<div class="always-me">
		<div>
			<me-button type="primary" long @click="handleClick">按钮</me-button>
			<me-button type="primary" shape="round" loading />
			<me-button type="dashed" shape="round">按钮</me-button>
			<me-button type="solid" shape="round">按钮</me-button>
			<me-button shape="round">按钮</me-button>
		</div>
		<div>
			<me-button type="primary">按钮</me-button>
			<me-button>按钮</me-button>
			<me-button type="dashed">按钮</me-button>
			<me-button type="solid">按钮</me-button>
		</div>
		<div>
			<me-button type="primary" disabled>按钮</me-button>
			<me-button disabled>按钮</me-button>
			<me-button type="dashed" disabled>按钮</me-button>
			<me-button type="solid" disabled>按钮</me-button>
		</div>
		<div>
			<me-button type="primary" loading>按钮</me-button>
			<me-button loading>按钮</me-button>
			<me-button type="dashed" loading>按钮</me-button>
			<me-button type="solid" loading>按钮</me-button>
		</div>
		<div>
			<me-button type="primary" ghost>按钮</me-button>
			<me-button ghost>按钮</me-button>
			<me-button type="dashed" ghost>按钮</me-button>
			<me-button type="solid" ghost>按钮</me-button>
		</div>

		<div>
			<me-link underline>链接1</me-link>
			<me-link disabled>链接2</me-link>
			<me-link>链接3</me-link>
		</div>

		<div>
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

		<div style="width: 400px">
			<me-timeline position="left">
				<me-timeline-item color="#147ffa">
					<template #title>2022-02-21 12:00:00</template>
					<div>内容内容内容内容内容内容内容内容</div>
				</me-timeline-item>
				<me-timeline-item title="2022-02-21 12:23:00">
					<template #icon>
						<me-icon name="collection-hollow" color="#147ffa" />
					</template>
					<div>内容内容内容内容内容内容内容内容</div>
				</me-timeline-item>
				<me-timeline-item>
					<template #title>2022-02-21 12:00:00</template>
					<div>内容内容内容内容内容内容内容内容</div>
				</me-timeline-item>
			</me-timeline>
		</div>

		<div>
			<me-image v-for="item in url" :key="url" :src="item" :list="url" width="180px" height="100px"></me-image>
			<me-image
				src="http://files.drcloud.me/2ab32929-3827-4807-a308-13d56753ffbe_"
				width="180px"
				height="100px"
			></me-image>
			<me-button type="primary" @click="visible = !visible">预览</me-button>
			<me-image-preview :infinite="false" :list="url" v-model:visible="visible" />
		</div>

		<div>
			<me-stepper v-model:value="value" disabled></me-stepper>
			<me-stepper v-model:value="value"></me-stepper>
		</div>

		<div>
			<me-tag closable icon="issues" size="small">标签1</me-tag>
			<me-tag color="red" closable>标签2</me-tag>
			<me-tag color="purple" closable closeIcon="push" size="large">标签3</me-tag>
			<me-tag color="#147ffa" shape="square">标签4</me-tag>
			<me-tag color="blue" closable>标签5</me-tag>
			<me-tag color="arcoblue">标签5</me-tag>
		</div>

		<div>
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
		</div>
	</div>
</template>

<script setup lang="ts">
	const handleClick = (e: Event) => {
		console.log(e)
	}
	const url = ref([
		'http://files.drcloud.me/727788e6-5841-49fb-902e-5c5b3a240bc1',
		'http://files.drcloud.me/2ab32929-3827-4807-a308-13d56753ffbe',
		'http://files.drcloud.me/04bd11d6-1e5a-451a-9177-72699c681992',
		'http://files.drcloud.me/50602bfc-b603-4b45-a629-b0f474601f29'
	])
	const visible = ref(false)
	const show = ref(false)
	const value = ref(1)
</script>

<style scoped lang="scss">
	.always-me {
		height: 100vh;
		padding: 30px;
	}
</style>
