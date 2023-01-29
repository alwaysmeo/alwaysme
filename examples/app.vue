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
			<me-image src="http://files.drcloud.me/727788e6-5841-49fb-902e-5c5b3a240bc1-" width="300px" height="200px"></me-image>
			<me-image src="http://files.drcloud.me/727788e6-5841-49fb-902e-5c5b3a240bc1" :width="100" height="100">
				<template #mask>预览</template>
			</me-image>
		</div>
	</div>
</template>

<script setup lang="ts">
	const handleClick = (e: Event) => {
		console.log(e)
	}
</script>

<style scoped lang="scss">
	.always-me {
		height: 100vh;

		> div {
			padding: 10px;
		}
	}
</style>
