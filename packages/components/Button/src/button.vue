<template>
    <button
        :class="[
            'me-button',
            `me-button-type-${state.type}`,
            `me-button-shape-${state.shape}`,
            {
                [`me-button-long`]: state.long,
                [`me-button-loading`]: state.loading,
                [`me-button-disabled`]: state.disabled,
                [`me-button-ghost`]: state.ghost
            }
        ]"
        :disabled="props.disabled"
        :type="props.htmlType"
        @click="handleClick"
    >
        <i class="iconfont icon-loading" v-if="loading" />
        <slot name="icon" />
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
import { PropType, reactive, computed } from 'vue'

defineOptions({ name: 'MeButton' })

const props = defineProps({
    // 按钮类型 default | primary | dashed | text | link |
    type: {
        type: String as PropType<
            'default' | 'primary' | 'dashed' | 'text' | 'link'
        >,
        default: 'default'
    },
    // 按钮形状 default | square | round
    shape: {
        type: String as PropType<'default' | 'square' | 'round'>,
        default: 'default'
    },
    // 使按钮的宽度跟随容器的宽度 true | false
    long: {
        type: Boolean as PropType<boolean>,
        default: false
    },
    // 禁用状态 true | false
    disabled: {
        type: Boolean as PropType<boolean>,
        default: false
    },
    // 加载中状态 true | false
    loading: {
        type: Boolean as PropType<boolean>,
        default: false
    },
    // 设置 button 的原生 type 属性 可选值参考 HTML 标准
    htmlType: {
        type: String as PropType<'submit' | 'reset' | 'button'>,
        default: 'button'
    },
    // 幽灵按钮，使按钮背景透明
    ghost: {
        type: Boolean as PropType<boolean>,
        default: false
    }
})

const emits = defineEmits(['click'])

const state = reactive({
    type: computed(() => props.type),
    shape: computed(() => props.shape),
    long: computed(() => props.long),
    disabled: computed(() => props.disabled),
    loading: computed(() => props.loading),
    htmlType: computed(() => props.htmlType),
    ghost: computed(() => props.ghost)
})

const handleClick = (event: MouseEvent) => {
    if (props.disabled || props.loading) return event.preventDefault()
    emits('click', event)
}
</script>
