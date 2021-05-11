<template>
    <div class="header">
        <!-- The logo -->
        <img src="../assets/img/logo.svg" alt="" />

        <!-- The nav links -->
        <div class="links">
            <router-link to="/">Home</router-link>
            <router-link to="/contact">Contact</router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Header",
});
</script>

<style lang="less" scoped>
@import "~@/styles/vars.less";

.header {
    height: @header-height;
    display: flex;
    align-items: center;
    max-width: @max-width;
    width: 100%;
    background: white;

    img {
        height: 48px;
        margin-right: 64px;
    }

    .links {
        display: flex;
        flex-direction: row;

        * {
            font-size: @h3;
            margin-right: 16px;
        }
    }
}
</style>
