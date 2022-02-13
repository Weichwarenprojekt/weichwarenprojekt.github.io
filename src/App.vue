<template>
    <div class="app">
        <Header class="header" />
        <router-view class="content" />
        <Footer />
    </div>
</template>

<script lang="ts">
import Header from "./components/Header.vue";
import { defineComponent } from "vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
    components: { Footer, Header },
});
</script>

<style lang="less">
@import "styles/global";

.app {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.header {
    position: fixed;
    top: 0;
    z-index: 100;
}

.content {
    padding: @big-padding @outer-padding;
}
</style>
