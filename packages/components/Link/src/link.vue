<template>
		<div :class="state.className">
			<slot></slot>
		</div>
</template>

<script setup lang="ts">
import { PropType, reactive } from 'vue'
import { prefix } from '@utils/config'

defineOptions({ name: `${prefix}Link` })

const state = reactive({
    className: ['me-link-group']
})
</script>