<template>
		<div :class="state.className">
			<slot></slot>
		</div>
</template>

<script setup lang="ts">
import { PropType, reactive } from 'vue'
import { prefix } from '@utils/config'

defineOptions({ name: `${prefix}ButtonGroup` })

const state = reactive({
    className: [
        'me-btn-group'
    ]
})
</script>