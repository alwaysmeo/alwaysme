<template>
	<div class="always-me">
		<!-- <div>
			<me-button type="primary" long @click="handleClick">按钮</me-button>
			<me-button type="primary" shape="round" loading />
			<me-button type="primary" shape="square">按钮</me-button>
		</div>
		<div>
			<me-button type="primary">按钮</me-button>
			<me-button>按钮</me-button>
			<me-button type="dashed">按钮</me-button>
			<me-button type="text">按钮</me-button>
			<me-button type="link">按钮</me-button>
		</div>
		<div>
			<me-button type="primary" disabled>按钮</me-button>
			<me-button disabled>按钮</me-button>
			<me-button type="dashed" disabled>按钮</me-button>
			<me-button type="text" disabled>按钮</me-button>
			<me-button type="link" disabled>按钮</me-button>
		</div>
		<div>
			<me-button type="primary" loading>按钮</me-button>
			<me-button loading>按钮</me-button>
			<me-button type="dashed" loading>按钮</me-button>
			<me-button type="text" loading>按钮</me-button>
			<me-button type="link" loading>按钮</me-button>
		</div>
		<div>
			<me-button type="primary" ghost>按钮</me-button>
			<me-button ghost>按钮</me-button>
			<me-button type="dashed" ghost>按钮</me-button>
			<me-button type="text" ghost>按钮</me-button>
			<me-button type="link" ghost>按钮</me-button>
		</div>
		<div>
			<me-link :underline="false">链接1</me-link>
			<me-link disabled>链接2</me-link>
			<me-link>链接3</me-link>
		</div> -->
		<!-- <div>
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
				<me-timeline-item color="green">
					<template #title>2022-02-21 12:00:00</template>
					<div>内容内容内容内容内容内容内容内容</div>
				</me-timeline-item>
				<me-timeline-item title="2022-02-21 12:23:00">
					<template #icon>
						<i class="iconfont icon-collection-hollow" />
					</template>
					<div>内容内容内容内容内容内容内容内容</div>
				</me-timeline-item>
				<me-timeline-item>
					<template #title>2022-02-21 12:00:00</template>
					<div>内容内容内容内容内容内容内容内容</div>
				</me-timeline-item>
			</me-timeline>
		</div> -->
		<div>
			<me-image v-for="item in url" :key="url" :src="item" :list="url" width="180px" height="100px"></me-image>
			<!-- <me-image-preview :list="['http://files.drcloud.me/727788e6-5841-49fb-902e-5c5b3a240bc1', 132131]" /> -->
			<me-button type="primary" shape="round" loading @click="visible = !visible" />
			<me-image-preview infinite :list="url" v-model:visible="visible" />
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
</script>

<style scoped lang="scss">
	.always-me {
		height: 100vh;

		> div {
			padding: 10px;
		}
	}
</style>
