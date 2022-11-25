<template>
    <a
        :class="[
            'me-link',
            {
                [`me-link-underline`]: state.underline,
                [`me-link-disabled`]: state.disabled
            }
        ]"
        :href="state.href"
        :target="state.target"
    >
        <slot></slot>
    </a>
</template>

<script setup lang="ts">
import { PropType, reactive, computed } from 'vue'

defineOptions({ name: 'MeLink' })

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
    color: computed(() => props.color),
    underline: computed(() => props.underline),
    disabled: computed(() => props.disabled),
    href: computed(() => props.href),
    target: computed(() => props.target)
})
</script>
