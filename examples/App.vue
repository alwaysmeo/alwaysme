<template>
    <div class="always-me">
        <div>
            <me-button type="primary">按钮</me-button>
            <me-button>按钮</me-button>
            <me-button type="dashed">按钮</me-button>
            <me-button type="text">按钮</me-button>
            <me-button type="link">按钮</me-button>
        </div>
        <div style="width: 200px">
            <me-button type="primary" long>按钮</me-button>
            <me-button type="primary">按钮</me-button>
        </div>
        <div>
            <me-button type="primary" loading>按钮</me-button>
            <me-button loading>按钮</me-button>
            <me-button type="dashed" loading>按钮</me-button>
            <me-button type="text" loading>按钮</me-button>
            <me-button type="link" loading>按钮</me-button>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.always-me {
    box-sizing: border-box;
    padding: 30px;
    height: 90vh;
    .me-btn {
        margin: 6px;
    }
}
</style>
