<template>
		<a :class="state.className" :href="props.href" :target="props.target">
			<slot></slot>
		</a>
</template>

<script setup lang="ts">
import { PropType, reactive } from 'vue'
import { prefix } from '@utils/config'

defineOptions({ name: `${prefix}Link` })

const props = defineProps({
    // 链接色值
    color: {
        type: String,
        default: ''
    },
		// 是否需要下划线
		underline: {
				type: Boolean as PropType<boolean>,
				default: true
		},
		// 是否禁用状态
		disabled: {
      type: Boolean as PropType<boolean>,
      default: false
    },
		// 原生 herf 属性
		href: {
			type: String,
			default: ''
		},
		// 原生 target 属性
		target: {
			type: String as PropType<'_self' | '_blank' | '_parent' | '_top'>,
			default: '_self'
		}
	})

const state = reactive({
    className: [
			'me-link',
        {
            [`me-link-underline`]: props.underline,
            [`me-link-disabled`]: props.disabled
        }
		]
})
</script>