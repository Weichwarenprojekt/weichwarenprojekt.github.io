<template>
    <div class="focus-card">
        <img :src="image" alt="Image" />
        <h2>{{ title }}</h2>
        <div>{{ description }}</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "FocusCard",
    props: {
        title: {
            type: String,
            default: "Title",
        },
        description: {
            type: String,
            default: "Description",
        },
        image: {
            type: String,
            default: "",
        },
    },
});
</script>

<style lang="less" scoped>
@import "~@/styles/vars.less";

.focus-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: @normal-padding;
    background: @grey;
    border-radius: @border-radius;

    img {
        flex: 0 0 auto;
        height: 10rem;
        margin-bottom: 2rem;
    }

    div {
        font-size: @h3;
        font-weight: 300;
        text-align: center;
    }
}
</style>
