<template>
    <a
        :class="[
            'me-link',
            {
                [`me-link-underline`]: props.underline,
                [`me-link-disabled`]: props.disabled
            }
        ]"
        :href="props.href || 'javascript:;'"
        :target="props.target"
        @click="handleClick"
    >
        <slot></slot>
    </a>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { prefix } from '@/config'

defineOptions({ name: `${prefix}Link` })

const props = defineProps({
    // 链接色值
    color: {
        type: String as PropType<string>,
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
        type: String as PropType<string>,
        default: ''
    },
    // 原生 target 属性
    target: {
        type: String as PropType<'_self' | '_blank' | '_parent' | '_top'>,
        default: '_self'
    }
})
const emits = defineEmits(['click'])

const handleClick = (event: MouseEvent) => {
    console.log(props)
    if (props.disabled) return event.preventDefault()
    emits('click', event)
}
</script>
