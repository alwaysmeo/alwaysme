<template>
    <div class="always-me">
        <div>
            <me-button type="primary">按钮</me-button>
            <me-button>按钮</me-button>
            <me-button type="dashed">按钮</me-button>
            <me-button type="text">按钮</me-button>
            <me-button type="link">按钮</me-button>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.always-me {
    box-sizing: border-box;
    padding: 30px;
    height: 90vh;
    //background-color: var(--dark);
    .me-button {
        margin-right: 10px;
    }
}
</style>
