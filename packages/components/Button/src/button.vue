<template>
    <button :class="[state.className]" :disabled="props.disabled" type="button" @click="handleClick">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
import { PropType, reactive } from 'vue'
import { prefix } from '@utils/config'

defineOptions({ name: `${prefix}Button` })

const props = defineProps({
    // 按钮类型 default | primary | dashed | text | link |
    type: {
        type: String as PropType<'default' | 'primary' | 'dashed' | 'text' | 'link'>,
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
        type: String as PropType<string>,
        default: 'button',
    },
})

const emits = defineEmits(['click'])

const state = reactive({
    className: [
        `${prefix}-button`,
        `${prefix}-type-${props.type}`,
        `${prefix}-shape-${props.shape}`,
        {
            [`${prefix}-long`]: props.long,
            [`${prefix}-disabled`]: props.disabled,
            [`${prefix}-loading`]: props.loading
        }
    ]
})

const handleClick = (event: MouseEvent) => {
    if (props.disabled || props.loading) {
        event.preventDefault()
        return
    }
    emits('click', event)
}
</script>
